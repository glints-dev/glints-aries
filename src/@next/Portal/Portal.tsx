import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const container = document.getElementById('glints-portal-container');
  if (!container) {
    throw new Error(
      `Portal component requires div with id "glints-portal-container" as container, 
      please add it as a sibling to where your react app is rendered!`
    );
  }
  return createPortal(children, container);
};
