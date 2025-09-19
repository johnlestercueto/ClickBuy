import { create } from "zustand"
import { login, register} from "../auth/authService"

export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    
    loginUser: async (credential) => {
        set({loading: true, error: null})
        try {
            const data = await login(credential)
            set({ user: data.user, loading: false})
        } catch (error) {
            set({ error: error.response?.data?.message || "Login failed", loading: false });
        }
    },

    registerUser: async(userdata) => {
        
        set({ loading: true, error: null})
        try {
            const data = await register(userdata)
            
            set({ user: data.user, loading: false})
        } catch (error) {
            set({ error: error.response?.data?.message || "Registration failed", loading: false });
        }
    },

    logout: () => set({user: null})
})
)