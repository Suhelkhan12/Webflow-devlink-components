import { useTabs } from "./TabsContext";

export function TabsContent({
  value,
  children,
  ...props
}: {
  value: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const { value: active, baseId } = useTabs();
  const isActive = active === value;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      aria-hidden={!isActive}
      hidden={!isActive}
      data-tabs-content
      data-state={`${isActive ? "active" : "inactive"}`}
      {...props}
    >
      {children}
    </div>
  );
}
