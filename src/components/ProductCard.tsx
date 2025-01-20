import { useContext, useState } from 'react' // React hooks
import { Link } from 'react-router-dom' // For routing
import { CartContext } from '../context/CartContext' // Cart context for managing cart state
import { toast } from 'react-toastify' // For toast notifications
import 'react-toastify/dist/ReactToastify.css' // Toast notification styles

// Define a Product interface
interface Product {
  id: number; // Product ID
  name: string; // Product name
  price: number; // Product price
  image: string; // Product image URL
}

// ProductCard component
export const ProductCard = ({ product }: { product: Product }) => {
  const [loading, setLoading] = useState(false) // Loading state for the button
  const { addToCart } = useContext(CartContext) // Accessing addToCart from CartContext

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    setLoading(true) // Set loading to true
    const cartItem = { ...product, quantity: 1 } // Create a CartItem object
    addToCart(cartItem) // Using the context method to add the product to the cart
    setLoading(false) // Set loading to false

    // Show a toast notification
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  // rendering component
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <div className="flex justify-between">
        <Link to={`/product/${product.id}`} className="text-blue-500">
          View Details
        </Link>
        <button
          className={`bg-blue-500 text-white px-2 py-1 text-sm rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
