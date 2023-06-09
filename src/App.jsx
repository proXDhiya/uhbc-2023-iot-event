import * as React from 'react';
import {
  ChakraProvider
} from "@chakra-ui/react"

// Particles
import ParticlesComponent from './components/Particles';

// components
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';
import CommiteeMembers from './components/CommiteeMembers';
import Speakers from './components/Speakers';
import Submition from './components/Submition';
import Schedule from './components/Schedule';
import EventPhotos from './components/EventPhotos';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BitCrew from './components/BitCrew';

// event time end - Algeria
const eventTimeEnd = new Date('2023-11-08T00:00:00');

function App() {
  // change title on load
  React.useEffect(() => {
    document.title = 'AISTC 2023';
  }, []);

  // render
  return (
    <ChakraProvider>
      <div className="App"
        style={{
          backgroundColor: 'var(--chakra-colors-gray-900)',
          width: '100vw',
          height: 'auto',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <ParticlesComponent />
        <Header />
        <Timer time={eventTimeEnd} />
        <About />
        <CommiteeMembers />
        <Speakers />
        <Submition />
        <Schedule />
        <EventPhotos />
        <Partners />
        <BitCrew />
        <Contact />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
