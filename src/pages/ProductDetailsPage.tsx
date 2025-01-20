import { useParams } from 'react-router-dom' // Importing useParams from react-router-dom
import { useContext, useEffect, useState } from 'react' // Importing useContext, useEffect, useState from react
import axios from 'axios' // Importing axios for API calls
import { CartContext } from '../context/CartContext' // Importing CartContext
import { toast } from 'react-toastify' // Importing toast for toast notifications
import 'react-toastify/dist/ReactToastify.css' // Importing React Toastify CSS

export const ProductDetailsPage = () => {
  // Define a Product type
  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };

  const { id } = useParams<string>() // Extracting id from useParams
  const [product, setProduct] = useState<Product | null>(null) // State for product data
  const [loading, setLoading] = useState(false) // State for loading indicator
  const { addToCart } = useContext(CartContext) // Accessing addToCart from CartContext

  // Fetching product data on component mount
  useEffect(() => {
    axios.get('/src/mock/products.json').then((res) => {
      const product = res.data.find((p: Product) => p.id === parseInt(id!)) // Finding product by id
      setProduct(product || null) // Setting product state
    })
  }, [id])

  if (!product) return <div>Loading...</div> // Displaying loading message if product is not found

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    setLoading(true) // Setting loading to true
    addToCart({ ...product, quantity: 1 }) // Adding product to cart
    setLoading(false) // Setting loading to false

    // Displaying toast notification
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
    <div className="p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">
        ${product.price}
      </p>
      <button
        className={`bg-blue-500 text-white px-4 py-2 mt-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
        onClick={handleAddToCart}
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  )
}
