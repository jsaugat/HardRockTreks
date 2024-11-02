import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ButtonWithIcon({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div>
      <Button
        variant={"secondary"}
        className={cn(
          "flex gap-2 px-1 pr-3 shadow-md bg-background",
          className
        )}
      >
        <div className="rounded-full bg-primary p-1 h-8 w-8 flex items-center justify-center">
          {icon}
        </div>
        <span>{label}</span>
      </Button>
    </div>
  );
}
