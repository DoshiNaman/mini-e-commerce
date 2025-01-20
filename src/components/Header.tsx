import { Link } from 'react-router-dom' // Importing Link component from react-router-dom
import { useContext } from 'react' // Importing useContext hook from React
import { CartContext } from '../context/CartContext' // Importing CartContext from context

// Header component definition
export const Header = () => {
  const { cart } = useContext(CartContext) // Accessing cart from CartContext

  // rendering component
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md w-full">
      <div className="container mx-auto flex w-full justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Mini E-Commerce
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-200">
            Cart
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link to="/cart" className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2 0h2m-2 0L5 21h14m-9-4a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
