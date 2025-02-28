"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { toolsMenu, type ToolsMenu } from "@/lib/constant";

function NavItems() {
    return (
        <div className="flex space-x-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {toolsMenu.map((tools) => (
                                    <ListItem
                                        key={tools.title}
                                        title={tools.title}
                                        href={tools.link}
                                    >
                                        {tools.desc}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

function MobileMenu() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                className="px-2 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu className="h-6 w-6" />
            </Button>
            {isOpen && (
                <div className="absolute grid grid-cols-2 top-full left-0 right-0 bg-blackOut p-5 gap-0">
                    <div className="flex items-start">
                        <NavItems />
                    </div>

                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    // React.useEffect(() => {
    //   if (isOpen) document.body.classList.add('overflow-hidden');
    //   else document.body.classList.remove('overflow-hidden');
    // }, [isOpen]);
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 backdrop-filter backdrop-blur-md">
            <div className="container flex h-12 md:h-14 lg:h-16 max-w-screen items-center justify-between mx-auto">
                <div className="hidden lg:flex items-center justify-center flex-1">
                    <NavItems />
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
}