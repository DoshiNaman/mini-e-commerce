# Mini E-Commerce Application

## Overview
This is a mini e-commerce application built using React. The application allows users to browse products, view product details, add items to a shopping cart, and simulate a checkout process. The project utilizes React Router for navigation and the Context API for state management.

## Features
- **Product Listing Page**: Displays a list of products with details such as name, price, image, and description.
- **Search and Filter Functionality**: Users can search for products by name and filter products by category.
- **Product Details Page**: Clicking on a product navigates to a detailed view with an "Add to Cart" button.
- **Shopping Cart**: Accessible from all pages, showing the number of items, total price, and options to remove items.
- **Checkout Simulation**: A button to simulate the checkout process.

## Technologies Used
- React
- React Router
- Context API for state management
- Axios for API calls
- Tailwind CSS for styling
- React Toastify for notifications

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DoshiNaman/mini-e-commerce.git
   cd mini-e-commerce
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Usage
- Browse the product listing page to view available products.
- Use the search bar to find specific products.
- Click on a product to view its details and add it to your cart.
- Access the cart from the header to view added items and proceed to checkout.

## Assumptions and Decisions
- The product data is fetched from a local JSON file for simplicity.
- The application is designed to be responsive and user-friendly on both desktop and mobile devices.
- The checkout process is simulated with alerts, as no backend integration is required.

## Future Improvements
- **Unit tests** have not been implemented yet.
- **PWA (Progressive Web App)** functionality is not done due to difficulties in setting up and watching the service worker locally.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by various e-commerce platforms and React documentation.
