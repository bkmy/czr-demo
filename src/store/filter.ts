import { SdgKey } from '@/lib/sdgs'
import { create } from 'zustand'

type FilterState = {
  selectedSdgs: SdgKey[]
  searchTerm: string
  setSdgs: (sdgs: SdgKey[]) => void
  setSearch: (term: string) => void
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedSdgs: [],
  searchTerm: '',
  setSdgs: (sdgs) => set({ selectedSdgs: sdgs }),
  setSearch: (term) => set({ searchTerm: term }),
}))
