import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "صفحه اصلی", href: "/" },
    { label: "درباره ما", href: "/about" },
    { label: "خدمات", href: "/services" },
    { label: "فروشگاه", href: "/shop" },
    { label: "تماس با ما", href: "/contact" },
    { label: "درخواست نمایندگی", href: "/agency" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(28,28,28,0.97)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B07A10] to-[#8A5E00] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <span className="font-bold text-lg text-white hidden sm:inline">NESHAT</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-white hover:text-[#B07A10] transition-colors text-sm font-medium">
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link href="/shop">
            <a className="relative text-white hover:text-[#B07A10] transition">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#B07A10] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-[#B07A10] transition">
              <User size={20} />
            </a>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#2C2C2C] border-t border-[#B07A10]/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-white hover:text-[#B07A10] transition-colors text-sm font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
