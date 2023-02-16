export type ComponentAction = {
  label: string;
  action: (...args: any[]) => void;
};
