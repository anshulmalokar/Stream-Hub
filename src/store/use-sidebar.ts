import { create } from "zustand";

interface SideBarStore{
    collasped: Boolean,
    onExpand: () => void,
    onContract: () => void
}

export const useSideBar = create<SideBarStore>((set) => ({
    collasped: false,
    onExpand: () => set({ collasped: false }),
    onContract: () => set({ collasped: true }), 
}))