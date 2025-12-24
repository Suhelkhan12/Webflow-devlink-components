export const TabsList = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div role="tablist" data-tabs-list {...props}>
      {children}
    </div>
  );
};
