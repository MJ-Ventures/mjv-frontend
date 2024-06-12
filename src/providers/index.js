// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider className="bg-black">{children}</NextUIProvider>;
}
