import { useContext } from 'react' // importing useContext from React
import { CartContext } from '../context/CartContext' // importing CartContext from context

// Define a type for the cart item
type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext) // accessing cart context

  const calculateTotal = () => // function to calculate total price
    cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {// function to handle checkout process
    if (cart.length === 0) {
      alert(
        'Your cart is empty. Add items to the cart before proceeding to checkout.',
      )
      return
    }

    // Simulate checkout confirmation
    let totalAmount = 0
    cart.forEach((item: CartItem) => {
      totalAmount += item.price * item.quantity
    })

    const productList = cart
      .map((item: CartItem) => `${item.name} (x${item.quantity})`)
      .join(', ')
    alert(
      `Checkout successful!\n\nItems: ${productList}\nTotal: $${totalAmount.toFixed(2)}`,
    )

    clearCart()
  }

  // rendering component
  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item: CartItem) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex mt-4 font-bold justify-between">
            <div className="">Total: ${calculateTotal().toFixed(2)}</div>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-green-500 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
