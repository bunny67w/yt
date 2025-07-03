import React from 'react';
import { Eye, Clock, User } from 'lucide-react';

interface VideoData {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  author: string;
  description: string;
}

interface VideoInfoProps {
  videoData: VideoData;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ videoData }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnail */}
        <div className="md:w-1/3">
          <img
            src={videoData.thumbnail}
            alt={videoData.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Video Details */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
            {videoData.title}
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{videoData.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{videoData.views} views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{videoData.duration}</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {videoData.description.length > 200 
              ? `${videoData.description.substring(0, 200)}...` 
              : videoData.description
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;