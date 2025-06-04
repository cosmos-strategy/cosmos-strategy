import { MainNavItems } from "@/types";
import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/app/_components/icons";
import { useLockBody } from "@/hooks/use-lock-body";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/_components/ui/accordion";

interface MobileNavProps {}

interface MobileNavDuplicateProps {
  items: MainNavItems;
  children?: React.ReactNode;
  removeHandler: () => void;
}

const MobileNavDuplicate: FC<MobileNavDuplicateProps> = ({
  items,
  children,
  removeHandler,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-24 z-50 grid min-h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 xl:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-ma gap-4 x text-sm">
          {items.map((item, i) => (
            <div
              className={cn(
                "grid  items-start gap-2 border-b border-b-background/20 last:border-b-foreground pb-3",
                item.subItems.length ? "grid-cols-2" : "grid-cols-1"
              )}
              key={i}
            >
              <h4 className="text-pargrpah_heading text-secondary-foreground">
                <Link
                  href={item.disabled ? "#" : item.href}
                  onClick={removeHandler}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 text-pargrpah_heading font-medium hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  {item.title}
                </Link>
              </h4>
              <ul>
                {item.subItems.map((subItem, j) => (
                  <li key={j}>
                    <Link
                      href={subItem.disabled ? "#" : subItem.href}
                      onClick={removeHandler}
                      className={cn(
                        "flex w-full items-center rounded-md px-2 text-subtitle_heading font-medium mb-1.5 hover:underline",
                        subItem.disabled && "cursor-not-allowed opacity-60"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default MobileNavDuplicate;
