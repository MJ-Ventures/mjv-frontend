'use client';

import { createContext, useContext, useState, useMemo } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      openModal,
      closeModal,
    }),
    [open]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
