"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

// --- Accordion Section (same logic, cleaner visuals) ---
const FilterSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  }

  return (
    <div className="border-b border-amber-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 group"
      >
        <h4 className="font-semibold text-amber-800 group-hover:text-orange-600 transition-colors">
          {title}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown
            size={20}
            className="text-amber-500 group-hover:text-orange-600 transition-colors"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FilterSidebar() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<string>("")
  const [selectedPrice, setSelectedPrice] = useState<string>("")

  const cuisines = [
    "Italian", "Chinese", "Indian", "Mexican", "Japanese",
    "Thai", "American", "Mediterranean", "French", "Korean",
  ]

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    )
  }

  const clearFilters = () => {
    setSelectedCuisines([])
    setSelectedRating("")
    setSelectedPrice("")
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-amber-200 p-6 sticky top-24"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-amber-800">Filter Menu</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-orange-600 hover:text-orange-700"
        >
          Clear
        </Button>
      </div>

      {/* Cuisine Type */}
      <FilterSection title="Cuisine Type" defaultOpen={true}>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-2">
          {cuisines.map((cuisine) => (
            <label
              key={cuisine}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedCuisines.includes(cuisine)}
                onChange={() => toggleCuisine(cuisine)}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-800">{cuisine}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Rating">
        <div className="space-y-1">
          {["4.5+", "4.0+", "3.5+", "3.0+"].map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-800">{rating} stars</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-1">
          {[ 
            { value: "$", label: "$ - Under $15" },
            { value: "$$", label: "$$ - $15-30" },
            { value: "$$$", label: "$$$ - $30-50" },
            { value: "$$$$", label: "$$$$ - Over $50" },
          ].map((price) => (
            <label
              key={price.value}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <input
                type="radio"
                name="price"
                value={price.value}
                checked={selectedPrice === price.value}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-800">{price.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Active Filters Section */}
      {(selectedCuisines.length > 0 || selectedRating || selectedPrice) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-5 border-t border-amber-100 mt-4"
        >
          <h4 className="font-semibold text-amber-800 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {selectedCuisines.map((cuisine) => (
                <motion.div
                  key={cuisine}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-orange-100 text-orange-800 font-medium">
                    {cuisine}
                    <button
                      onClick={() => toggleCuisine(cuisine)}
                      className="ml-1 text-orange-600 hover:text-orange-800"
                    >
                      &times;
                    </button>
                  </Badge>
                </motion.div>
              ))}

              {selectedRating && (
                <motion.div
                  key="rating"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-orange-100 text-orange-800 font-medium">
                    {selectedRating} stars
                    <button
                      onClick={() => setSelectedRating("")}
                      className="ml-1 text-orange-600 hover:text-orange-800"
                    >
                      &times;
                    </button>
                  </Badge>
                </motion.div>
              )}

              {selectedPrice && (
                <motion.div
                  key="price"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-orange-100 text-orange-800 font-medium">
                    {selectedPrice}
                    <button
                      onClick={() => setSelectedPrice("")}
                      className="ml-1 text-orange-600 hover:text-orange-800"
                    >
                      &times;
                    </button>
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
