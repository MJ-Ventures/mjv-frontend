// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./modalProvider";

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <NextUIProvider className="bg-black">
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
