import React, { useState } from 'react';
import { Download, Youtube, AlertCircle, CheckCircle, Loader2, Play, Music, Video, FileText } from 'lucide-react';
import VideoInfo from './VideoInfo';
import DownloadOptions from './DownloadOptions';

interface VideoData {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  author: string;
  description: string;
}

interface DownloadFormat {
  quality: string;
  format: string;
  size: string;
  type: 'video' | 'audio';
}

const VideoDownloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [downloadFormats, setDownloadFormats] = useState<DownloadFormat[]>([]);
  const [downloading, setDownloading] = useState(false);

  const validateYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const analyzeVideo = async () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!validateYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    setVideoData(null);
    setDownloadFormats([]);

    try {
      // Simulate API call - In a real app, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock video data
      const mockVideoData: VideoData = {
        title: "Sample YouTube Video Title - Amazing Content!",
        thumbnail: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=480&h=270&dpr=1",
        duration: "10:45",
        views: "1,234,567",
        author: "Content Creator",
        description: "This is a sample video description that would normally come from the YouTube API..."
      };

      const mockFormats: DownloadFormat[] = [
        { quality: '1080p', format: 'MP4', size: '125 MB', type: 'video' },
        { quality: '720p', format: 'MP4', size: '85 MB', type: 'video' },
        { quality: '480p', format: 'MP4', size: '45 MB', type: 'video' },
        { quality: '360p', format: 'MP4', size: '25 MB', type: 'video' },
        { quality: 'High', format: 'MP3', size: '8.5 MB', type: 'audio' },
        { quality: 'Medium', format: 'MP3', size: '6.2 MB', type: 'audio' },
      ];

      setVideoData(mockVideoData);
      setDownloadFormats(mockFormats);
      setSuccess('Video analyzed successfully! Choose your download format below.');
    } catch (err) {
      setError('Failed to analyze video. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadVideo = async (format: DownloadFormat) => {
    setDownloading(true);
    setError('');
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // In a real app, this would trigger the actual download
      setSuccess(`Download started! Your ${format.type} file will be ready shortly.`);
    } catch (err) {
      setError('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      analyzeVideo();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* URL Input Section */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
              className="input-field pr-12"
              disabled={loading}
            />
            <Youtube className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <button
            onClick={analyzeVideo}
            disabled={loading || !url.trim()}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:shadow-md flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="loading-dots">Analyzing</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Analyze Video</span>
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-red-200">{error}</span>
          </div>
        )}

        {success && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-green-200">{success}</span>
          </div>
        )}
      </div>

      {/* Video Information */}
      {videoData && (
        <VideoInfo videoData={videoData} />
      )}

      {/* Download Options */}
      {downloadFormats.length > 0 && (
        <DownloadOptions 
          formats={downloadFormats} 
          onDownload={downloadVideo}
          downloading={downloading}
        />
      )}
    </div>
  );
};

export default VideoDownloader;