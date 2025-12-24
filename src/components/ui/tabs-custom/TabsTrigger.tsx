import { useTabs } from "./TabsContext";

export const TabsTrigger = ({
  value,
  children,
  ...props
}: {
  value: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const { value: active, setValue, baseId } = useTabs();
  // setting the isActive state
  const isActive = active === value;

  return (
    <button
      role="tab-trigger"
      id={`${baseId}-tab-${value}`}
      aria-selected={isActive}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={isActive ? 0 : -1}
      data-tabs-trigger
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setValue(value)}
      onKeyDown={(e) => {
        const tabs = Array.from(
          e.currentTarget
            .closest('[role="tablist"]')!
            .querySelectorAll<HTMLButtonElement>('[role="tab-trigger"]')
        );
        const index = tabs.indexOf(e.currentTarget);
        if (e.key === "ArrowRight") {
          tabs[(index + 1) % tabs.length].focus();
          tabs[(index + 1) % tabs.length].click();
        }

        if (e.key === "ArrowLeft") {
          tabs[(index - 1 + tabs.length) % tabs.length].focus();
          tabs[(index - 1 + tabs.length) % tabs.length].click();
        }
      }}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
