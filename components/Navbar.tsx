import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, MenuIcon } from "lucide-react";

export default function Navbar() {
  const navItems = ["TREATMENTS", "ABOUT", "CONTACT", "RESEARCH", "PARTNERS", "LOGIN"];
  const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2));
  const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2));

  return (
    <header className="bg-[#FFF] relative top-0 z-[1000] px-6 py-4">
      <div className="container relative mx-auto flex items-center justify-evenly">
        <nav className="hidden md:flex items-center space-x-4 font-medium">
            
          {leftNavItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#39442B] hover:text-[#4a4a4a] transition-colors relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#39442B] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-16">
          <Image
            src="/Logo.jpg"
            alt="Logo"
            width={150}
            height={150}
            className="rounded-full border-4"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-4 font-medium">
            {rightNavItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#39442B] hover:text-[#4a4a4a] transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#39442B] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
}