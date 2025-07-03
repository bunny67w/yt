import React, { useState } from 'react';
import { Download, Youtube, AlertCircle, CheckCircle, Loader2, Video, Music, FileText } from 'lucide-react';
import VideoDownloader from './components/VideoDownloader';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Youtube className="w-16 h-16 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold text-white">
              YouTube Downloader
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download your favorite YouTube videos in high quality. Fast, free, and easy to use.
          </p>
        </div>

        {/* Main Downloader Component */}
        <VideoDownloader />

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Downloader?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Video className="w-8 h-8 text-blue-400" />}
              title="High Quality"
              description="Download videos in up to 4K resolution with crystal clear quality"
            />
            <FeatureCard
              icon={<Music className="w-8 h-8 text-green-400" />}
              title="Audio Only"
              description="Extract audio tracks in MP3 format for your music collection"
            />
            <FeatureCard
              icon={<Download className="w-8 h-8 text-purple-400" />}
              title="Fast Downloads"
              description="Lightning-fast download speeds with our optimized servers"
            />
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How to Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Copy URL</h3>
              <p className="text-gray-300">
                Copy the YouTube video URL from your browser
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Paste & Analyze</h3>
              <p className="text-gray-300">
                Paste the URL and click analyze to get download options
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Download</h3>
              <p className="text-gray-300">
                Choose your preferred quality and download the video
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;