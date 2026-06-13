"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { navLinks } from "@/config/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className={"gap-5"}>
        {navLinks.map((link,i)=>{
            return(
                <NavigationMenuItem key={i}>
                    <NavigationMenuLink asChild >
                        <Link href={link.href} className={"capitalize text-[15px]"}>{link.title}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
