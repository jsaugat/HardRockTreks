import { useState } from "react";
import { Logo } from "../Logo";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { routes } from "@/routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define the properties the OverlayNavMenu component will receive
type OverlayMenuProps = {
  isNavOpen: boolean; // whether the menu is open
  onClose: any; // function to close the menu
};

//? Main OverlayNavMenu component for displaying the menu
export const OverlayNavMenu = ({ isNavOpen, onClose }: OverlayMenuProps) => {
  //? Tracks the current navigation path for nested menus (e.g., "Destinations > Nepal > Trekking")
  const [activePath, setActivePath] = useState<string[]>([]);

  // If the menu is not open, don’t show anything
  if (!isNavOpen) return null;

  //? Function to find and return the correct menu items based on where we are in activePath
  const getCurrentMenu = () => {
    let menuItems: any = routes; // Start with top-level menu items

    // Go through each level in activePath to find the correct submenu
    for (const level of activePath) {
      const currentLevel = menuItems.find((item: any) => item.label === level);

      // Check each level's menu, submenu, or subsubmenu to find the correct items
      if (currentLevel?.menu) {
        menuItems = currentLevel.menu;
      } else if (currentLevel?.submenu) {
        menuItems = currentLevel.submenu;
      } else if (currentLevel?.subsubmenu) {
        menuItems = currentLevel.subsubmenu;
      }
    }
    return menuItems || []; // Return the menu items for the current level
  };

  //? Handles when a menu item is clicked
  const handleRouteClick = (route: any) => {
    if (route.menu || route.submenu || route.subsubmenu) {
      // If the item has nested menus, add it to activePath to go deeper
      setActivePath([...activePath, route.label]);
    } else {
      onClose(); // Close the menu if it's a final link
    }
  };

  //? Handles back button click, which removes the last item in activePath to go up a level
  const handleBack = () => {
    setActivePath(activePath.slice(0, -1)); // Remove the last item in activePath
  };

  //? Get the correct menu items to display based on the current path
  const currentMenu = getCurrentMenu();
  const currentLabel = activePath[activePath.length - 1] || "Main Menu"; // Use last item in activePath as the label, or "Main Menu" if on the top level

  return (
    <main className="fixed inset-0 bg-card z-50">
      {/* TOP BAR WITH X BUTTON */}
      <div className="container h-16 flex items-center justify-between">
        {activePath.length > 0 ? (
          // If we're in a submenu, show a back button with the current menu label
          <button
            onClick={handleBack}
            className="text-lg font-semibold flex items-center gap-3"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-xl">{currentLabel}</span>
          </button>
        ) : (
          // Show the logo when at the top-level menu
          <Logo />
        )}
        {/* //! Close button */}
        <Button
          size="icon"
          variant="secondary"
          className="rounded-md bg-muted border backdrop-blur-md w-12"
          onClick={onClose}
        >
          <X className="w-7 h-7 text-foreground" />
        </Button>
      </div>

      {/* NAVIGATION MENU: List each menu item in the current menu */}
      <nav
        className={cn(
          "text-xl font-semibold flex flex-col",
          activePath.length > 0 && "font-normal"
        )}
      >
        {currentMenu.map((item: any) => (
          <div
            key={item.label}
            className="active:text-muted-foreground px-5 py-3 border-y flex justify-between items-center cursor-pointer"
            onClick={() => handleRouteClick(item)}
          >
            <span>{item.label}</span>
            {/* Show a down arrow icon if this item has nested menus */}
            {(item.menu || item.submenu || item.subsubmenu) && (
              <ChevronRight className="w-6 h-6" />
            )}
          </div>
        ))}
      </nav>
    </main>
  );
};
