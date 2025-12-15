import { motion } from 'framer-motion';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        {/* Logo */}
        <div className="logo" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--freedom-red)', fontFamily: 'var(--font-heading)' }}>
          FREEDOM SNACKS
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center" style={{ display: 'flex', gap: '2rem' }}>
          <a href="/shop" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'var(--freedom-blue)' }}>SHOP SNACKS</a>
          <a href="/wholesale" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'var(--freedom-blue)' }}>WHOLESALE</a>
          <a href="/about" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'var(--freedom-blue)' }}>OUR STORY</a>
        </div>

        {/* Icons */}
        <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
          <a href="/my-account" aria-label="Account">
            <User color="var(--freedom-blue)" />
          </a>
          <a href="/cart" aria-label="Cart">
            <ShoppingCart color="var(--freedom-red)" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
