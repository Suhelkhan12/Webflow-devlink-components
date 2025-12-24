import { createContext, useContext } from "react";

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
  baseId: string;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs must be inside <Tabs></Tabs>");
  return ctx;
};
