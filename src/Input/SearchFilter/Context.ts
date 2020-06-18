import { createContext, useContext } from 'react';

interface SearchFilterContext {
  closeSearchFilterMenu: () => void;
}

export const SearchFilterContext = createContext<
  SearchFilterContext | undefined
>(undefined);

export function useSearchFilterContext() {
  const context = useContext(SearchFilterContext);
  if (context === undefined) {
    throw new Error('useSearchFilterContext must be used within SearchFilter');
  }
  return context;
}

export const MainHeaderHeightContext = createContext(0);
