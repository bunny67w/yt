import React from 'react';
import { Download, Video, Music, Loader2 } from 'lucide-react';

interface DownloadFormat {
  quality: string;
  format: string;
  size: string;
  type: 'video' | 'audio';
}

interface DownloadOptionsProps {
  formats: DownloadFormat[];
  onDownload: (format: DownloadFormat) => void;
  downloading: boolean;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({ formats, onDownload, downloading }) => {
  const videoFormats = formats.filter(f => f.type === 'video');
  const audioFormats = formats.filter(f => f.type === 'audio');

  const FormatCard: React.FC<{ format: DownloadFormat }> = ({ format }) => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {format.type === 'video' ? (
            <Video className="w-5 h-5 text-blue-400" />
          ) : (
            <Music className="w-5 h-5 text-green-400" />
          )}
          <div>
            <div className="text-white font-medium">
              {format.quality} {format.format}
            </div>
            <div className="text-gray-400 text-sm">
              {format.size}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onDownload(format)}
          disabled={downloading}
          className="download-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {downloading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          <span>Download</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
        <Download className="w-6 h-6" />
        <span>Download Options</span>
      </h3>

      {/* Video Formats */}
      {videoFormats.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Video className="w-5 h-5 text-blue-400" />
            <span>Video Formats</span>
          </h4>
          <div className="grid gap-3">
            {videoFormats.map((format, index) => (
              <FormatCard key={index} format={format} />
            ))}
          </div>
        </div>
      )}

      {/* Audio Formats */}
      {audioFormats.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Music className="w-5 h-5 text-green-400" />
            <span>Audio Only</span>
          </h4>
          <div className="grid gap-3">
            {audioFormats.map((format, index) => (
              <FormatCard key={index} format={format} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
        <p className="text-yellow-200 text-sm">
          <strong>Note:</strong> This is a demo version. In a real implementation, you would need a backend service to handle YouTube video processing and downloads.
        </p>
      </div>
    </div>
  );
};

export default DownloadOptions;