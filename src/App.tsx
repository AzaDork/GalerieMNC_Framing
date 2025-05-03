import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AtelierEncadrement from './components/AtelierEncadrement';
import VideoSection from './components/VideoSection';
import FramingWorkshop from './components/FramingWorkshop';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main className="pt-40">
        <AtelierEncadrement />
        <VideoSection />
        <FramingWorkshop />
      </main>
      <Footer />
    </div>
  );
}

export default App;