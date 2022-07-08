import create from "zustand";

const useStore = create((set) => ({
  mesobOpen: false,
  setMesobOpen: () => set((state) => ({ mesobOpen: !state.mesobOpen })),

  modalVisible: false,
  setModalVisible: (value) => set((state) => ({ modalVisible: value })),
}));

export default useStore;
