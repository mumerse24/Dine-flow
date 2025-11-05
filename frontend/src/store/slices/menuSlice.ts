import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/api"
import type { MenuItem, ApiResponse } from "../../types"

interface MenuState {
  items: MenuItem[]
  categories: string[]
  isLoading: boolean
  error: string | null
  currentRestaurantId: string | null
}

const initialState: MenuState = {
  items: [],
  categories: [],
  isLoading: false,
  error: null,
  currentRestaurantId: null,
}

// Async thunks
export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async (restaurantId: string, { rejectWithValue }) => {
    try {
      const response = await api.get<ApiResponse<MenuItem[]>>(`/menu/restaurant/${restaurantId}`)
      return { items: response.data.data, restaurantId }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch menu items")
    }
  },
)

export const fetchMenuCategories = createAsyncThunk(
  "menu/fetchMenuCategories",
  async (restaurantId: string, { rejectWithValue }) => {
    try {
      const response = await api.get<ApiResponse<string[]>>(`/menu/restaurant/${restaurantId}/categories`)
      return response.data.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch categories")
    }
  },
)

export const createMenuItem = createAsyncThunk(
  "menu/createMenuItem",
  async (
    menuItemData: {
      restaurant: string
      name: string
      description: string
      price: number
      category: string
      image: string
      ingredients?: string[]
      allergens?: string[]
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post<ApiResponse<MenuItem>>("/menu", menuItemData)
      return response.data.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to create menu item")
    }
  },
)

export const updateMenuItem = createAsyncThunk(
  "menu/updateMenuItem",
  async ({ id, data }: { id: string; data: Partial<MenuItem> }, { rejectWithValue }) => {
    try {
      const response = await api.put<ApiResponse<MenuItem>>(`/menu/${id}`, data)
      return response.data.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to update menu item")
    }
  },
)

export const deleteMenuItem = createAsyncThunk("menu/deleteMenuItem", async (id: string, { rejectWithValue }) => {
  try {
    await api.delete(`/menu/${id}`)
    return id
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to delete menu item")
  }
})

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.items = []
      state.categories = []
      state.currentRestaurantId = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch menu items
      .addCase(fetchMenuItems.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload.items
        state.currentRestaurantId = action.payload.restaurantId
        state.error = null
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Fetch categories
      .addCase(fetchMenuCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      // Create menu item
      .addCase(createMenuItem.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createMenuItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.items.push(action.payload)
        state.error = null
      })
      .addCase(createMenuItem.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Update menu item
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item._id === action.payload._id)
        if (index !== -1) {
          state.items[index] = action.payload
        }
      })
      // Delete menu item
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload)
      })
  },
})

export const { clearMenu, clearError } = menuSlice.actions
export default menuSlice.reducer
