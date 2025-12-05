import { Music, Github, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="w-full px-4 md:px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image src="/icon.webp" alt="Logo" width={24} height={24} />
          </div>
          MediaSync
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://www.buymeacoffee.com/arnaudgct"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors bg-yellow-500/10 px-3 py-1.5 rounded-full hover:bg-yellow-500/20"
          >
            <Coffee className="w-4 h-4" />
            Soutenir
          </a>
          <a
            href="https://github.com/ArnaudGct/MediaSync"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
