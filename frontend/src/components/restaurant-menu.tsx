import { motion } from "framer-motion"

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic delight with mozzarella cheese & tomato sauce.",
    price: "$12.99",
    image: "/margherita-pizza.png", // ✅ from public folder
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "Spicy and creamy chicken curry served with basmati rice.",
    price: "$13.99",
    image: "/chicken-tikka-masala.png", // ✅ from public folder
  },
  {
    id: 3,
    name: "Beef Burger with Fries",
    description: "Juicy grilled beef patty with crispy golden fries.",
    price: "$11.50",
    image: "/beef-burger-with-fries.png", // ✅ from public folder
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp lettuce, parmesan, and Caesar dressing.",
    price: "$9.50",
    image: "/caesar-salad.png",
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm molten chocolate cake served with ice cream.",
    price: "$8.99",
    image: "/chocolate-lava-cake.png",
  },
  {
    id: 6,
    name: "Chinese Dim Sum",
    description: "Steamed dumplings filled with flavorful goodness.",
    price: "$10.99",
    image: "/chinese-dim-sum.png",
  },
]

export default function RestaurantMenu() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3 font-poppins">
          Explore Our <span className="text-amber-600">Menu</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Taste the freshness and flavors that define our kitchen.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-amber-100 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-600 text-lg">{item.price}</span>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
