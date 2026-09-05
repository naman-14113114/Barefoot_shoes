"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

interface ProductSelectionContextValue {
  selectedSizeEu: number | null;
  setSelectedSizeEu: (size: number | null) => void;
}

const ProductSelectionContext = createContext<ProductSelectionContextValue | null>(null);

export function ProductSelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedSizeEu, setSelectedSizeEu] = useState<number | null>(null);
  const value = useMemo(() => ({ selectedSizeEu, setSelectedSizeEu }), [selectedSizeEu]);

  return <ProductSelectionContext.Provider value={value}>{children}</ProductSelectionContext.Provider>;
}

export function useProductSelection() {
  const value = useContext(ProductSelectionContext);
  if (!value) throw new Error("useProductSelection must be used within ProductSelectionProvider");
  return value;
}
