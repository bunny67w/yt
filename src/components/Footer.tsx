import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> for YouTube enthusiasts
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 YouTube Downloader. For educational purposes only.
          </p>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              Disclaimer: This tool is for educational purposes only. Please respect copyright laws and YouTube's terms of service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;