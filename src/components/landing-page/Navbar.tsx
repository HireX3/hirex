'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Get all section elements dynamically
      const sectionIds = ["hero", "features", "how-it-works", "pricing", "contact"];
      const sectionElements = sectionIds.map(id => ({ 
        id, 
        element: document.getElementById(id) 
      })).filter(item => item.element);

      // Calculate which section is currently in view
      const currentPosition = window.scrollY + 300; // Adjust this offset based on your needs
      
      // Find the current section by checking if we've scrolled past its top
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= currentPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get navbar height to adjust scroll position
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      window.scrollTo({
        top: section.offsetTop - navbarHeight - 10, // Additional offset for better positioning
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="flex items-center gap-2">        <a href="#" onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
          <Image src="/hirex.svg" alt="HireX Logo" width={32} height={32} className="h-8 w-auto" />
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">Beta</span>
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4">
        <Button 
          variant="ghost" 
          className={activeSection === "features" ? "text-blue-600 dark:text-blue-400" : ""}
          onClick={() => scrollToSection("features")}
        >
          Features
        </Button>
        <Button 
          variant="ghost" 
          className={activeSection === "how-it-works" ? "text-blue-600 dark:text-blue-400" : ""}
          onClick={() => scrollToSection("how-it-works")}
        >
          How It Works
        </Button>
        <Button 
          variant="ghost" 
          className={activeSection === "pricing" ? "text-blue-600 dark:text-blue-400" : ""}
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </Button>
      </div>
      
      <div className="flex gap-2 items-center">
        <Button onClick={() => router.push("/login")} variant="outline" className="hidden sm:flex">Log In</Button>
        <Button onClick={() => router.push("/register")} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Sign Up</Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-2 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg py-4 px-5 flex flex-col gap-2 md:hidden border-t">
          <Button 
            variant="ghost" 
            className={`justify-start ${activeSection === "features" ? "text-blue-600 dark:text-blue-400" : ""}`}
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
          <Button 
            variant="ghost" 
            className={`justify-start ${activeSection === "how-it-works" ? "text-blue-600 dark:text-blue-400" : ""}`}
            onClick={() => scrollToSection("how-it-works")}
          >
            How It Works
          </Button>
          <Button 
            variant="ghost" 
            className={`justify-start ${activeSection === "pricing" ? "text-blue-600 dark:text-blue-400" : ""}`}
            onClick={() => scrollToSection("pricing")}
          >
            Pricing
          </Button>
          <Button 
            variant="ghost" 
            className={`justify-start ${activeSection === "contact" ? "text-blue-600 dark:text-blue-400" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
          <Button onClick={() => router.push("/login")} variant="outline" className="w-full mt-2">
            Log In
          </Button>
        </div>
      )}
    </nav>
  );
}
