export type ComponentWithProviderProps<T> = {
  open: (props: T) => void;
  close: () => void;
};
