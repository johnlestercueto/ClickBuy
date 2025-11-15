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
            return data.user;
        } catch (error) {
             const errMsg = error.response?.data?.message || "Login failed";
              set({ error: errMsg, loading: false });
             throw new Error(errMsg); // <-- important for component to catch
        }
    },

    registerUser: async(userdata) => {
        
        set({ loading: true, error: null})
        try {
            const data = await register(userdata)
            
            set({ user: data.user, loading: false})
            return data.user;
        } catch (error) {
            const errMsg = error.response?.data?.message || "Registration failed";
    set({ error: errMsg, loading: false });
    throw new Error(errMsg); // <-- throw so component can catch
        }
    },

    logout: () => set({user: null})
})
)