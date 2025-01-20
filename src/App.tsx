import { BrowserRouter, Routes, Route } from 'react-router-dom' // importing necessary modules
import { HomePage } from './pages/HomePage' // importing HomePage component
import { ProductDetailsPage } from './pages/ProductDetailsPage' // importing ProductDetailsPage component
import { CartPage } from './pages/CartPage' // importing CartPage component
import { CartProvider } from './context/CartContext' // importing CartProvider from context
import { Header } from './components/Header' // importing Header component

const App = () => ( // App component
  <CartProvider>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
)

export default App // exporting App component
