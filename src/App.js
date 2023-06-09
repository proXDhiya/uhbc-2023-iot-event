import * as React from 'react';
import {
  ChakraProvider
} from "@chakra-ui/react"

// components
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';
import CommiteeMembers from './components/CommiteeMembers';
import Speakers from './components/Speakers';
import Submition from './components/Submition';
import Schedule from './components/Schedule';
import EventPhotos from './components/EventPhotos';

// event time end - Algeria
const eventTimeEnd = new Date('2023-11-08T00:00:00');

function App() {
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
        <Header />
        <Timer time={eventTimeEnd} />
        <About />
        <CommiteeMembers />
        <Speakers />
        <Submition />
        <Schedule />
        <EventPhotos />
      </div>
    </ChakraProvider>
  );
}

export default App;