import { create } from "zustand";

export const useLogin = create((set) => ({
    roleBase: "",
    setRoleBase: (role) => set({ roleBase: role }) 
}));