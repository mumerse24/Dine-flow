import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { ThemeProvider } from "./components/theme-provider"
import { CartProvider } from "./lib/cart-context" // ✅ import this
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import RestaurantPage from "./pages/RestaurantPage"
import RegisterRestaurantPage from "./pages/RegisterRestaurantPage"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <CartProvider>  {/* ✅ wrap everything here */}
          <div className="min-h-screen bg-background font-sans antialiased">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/register-restaurant" element={<RegisterRestaurantPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
