import { cn } from "@/libs/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className="max-w-[1280px] px-10 m-auto">{children}</div>
    </div>
  );
};

export default Container;
