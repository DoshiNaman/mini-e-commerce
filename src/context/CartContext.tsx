import { createContext, useState, ReactNode } from 'react' // importing necessary modules

type CartItem = {
  id: number // unique identifier for the cart item
  name: string // name of the cart item
  price: number // price of the cart item
  quantity: number // quantity of the cart item
}

type CartContextType = {
  cart: CartItem[] // array of cart items
  addToCart: (item: CartItem) => void // function to add item to cart
  removeFromCart: (id: number) => void // function to remove item from cart
  clearCart: () => void // function to clear the cart
}

export const CartContext = createContext<CartContextType>({
  cart: [], // initial cart state
  addToCart: () => {}, // placeholder function for adding to cart
  removeFromCart: () => {}, // placeholder function for removing from cart
  clearCart: () => {}, // placeholder function for clearing the cart
})

// CartProvider component to manage cart state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]) // state to hold cart items

  // function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id) // check if item already exists in cart
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ) // update quantity if item exists
      }
      return [...prevCart, { ...item, quantity: 1 }] // add new item to cart
    })
  }

  // function to remove an item from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)) // filter out the item to be removed
  }

  // function to clear the cart
  const clearCart = () => {
    setCart([]) // reset cart to empty
  }

  // rendering component
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }} // providing context values
    >
      {children} // rendering children components
    </CartContext.Provider>
  )
}
