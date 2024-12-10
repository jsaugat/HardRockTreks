import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { MenuItem } from "@/types/nav";

interface SubMenuItemProps {
  menuItem: MenuItem;
}

export const SubMenuItem = React.memo(({ menuItem }: SubMenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded cursor-pointer hover:bg-primary/10 hover:text-primary p-1.5 px-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={menuItem.href || "#"}
        className="group capitalize text-left flex items-center justify-between gap-4"
      >
        {menuItem.label}
        {menuItem.submenu && (
          <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-in-out group-hover:rotate-90" />
        )}
      </Link>

      {isHovered && menuItem.submenu && (
        <Card className="absolute top-0 left-[100%] flex flex-col p-2 min-w-[200px] z-20">
          {menuItem.submenu.map((subMenuItem) => (
            <SubSubMenuItem key={subMenuItem.label} subMenuItem={subMenuItem} />
          ))}
        </Card>
      )}
    </div>
  );
});

SubMenuItem.displayName = "SubMenuItem";

const SubSubMenuItem = React.memo(({ subMenuItem }: { subMenuItem: MenuItem }) => (
  <Link
    href={subMenuItem.href || "#"}
    className="block p-1.5 px-3 rounded hover:bg-primary/10 hover:text-primary text-left"
  >
    {subMenuItem.label}
  </Link>
));

SubSubMenuItem.displayName = "SubSubMenuItem";

