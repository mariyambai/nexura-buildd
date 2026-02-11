import { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#F5F2EE]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-[#F5F2EE] tracking-tight">
            NexuraBuild
          </div>
          <button
            onClick={onContactClick}
            className="px-6 py-2 border border-[#C9A96E]/50 text-[#F5F2EE] rounded-full font-light transition-all duration-300 hover:bg-[#C9A96E]/10 hover:border-[#C9A96E]"
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}
