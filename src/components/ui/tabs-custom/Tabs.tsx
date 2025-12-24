import { useState, useId } from "react";
import { TabsContext } from "./TabsContext";

export function Tabs({
  defaultValue,
  children,
  ...props
}: {
  defaultValue: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState(defaultValue);
  const baseId = useId();

  return (
    <TabsContext.Provider value={{ value, setValue, baseId }}>
      <div data-tabs {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
