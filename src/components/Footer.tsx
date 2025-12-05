import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://arnaudgct.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors"
          >
            Arnaud Graciet
          </a>
          . Open Source sous licence MIT.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.buymeacoffee.com/arnaudgct"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
          >
            <Coffee className="w-4 h-4" />
            Buy me a coffee
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="https://github.com/ArnaudGct/MediaSync"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://arnaudgct.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
