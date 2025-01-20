import { useEffect, useState } from 'react' // importing React hooks
import axios from 'axios' // importing axios for API calls
import { ProductCard } from '../components/ProductCard' // importing ProductCard component

// Define a Product interface
interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]) // state for products
  const [search, setSearch] = useState<string>('') // state for search input
  const [category, setCategory] = useState<string>('All') // state for selected category

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1) // state for current page
  const [productsPerPage] = useState(6) // Number of products per page

  // Fetching products from the API
  useEffect(() => {
    axios
      .get('/products.json')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err))
  }, [])

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || product.category === category)
    )
  })

  // Calculate the number of products to display based on current page
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const uniqueCategories = ['All', ...new Set(products.map((p) => p.category))]

  // rendering component
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search for products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full sm:w-auto bg-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 bg-white"
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}
