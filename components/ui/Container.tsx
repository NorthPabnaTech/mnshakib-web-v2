import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const maxWidth = {
    default: "max-w-[1280px]",
    wide: "max-w-[1480px]",
    narrow: "max-w-[920px]",
  }[size];

  return (
    <div className={cn("mx-auto px-6 sm:px-8 lg:px-12 relative z-10", maxWidth, className)}>
      {children}
    </div>
  );
}
