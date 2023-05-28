import * as React from 'react';
import {
  ChakraProvider
} from "@chakra-ui/react"

// components
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';

// event time end - Algeria
const eventTimeEnd = new Date('2023-09-16T00:00:00');

function App() {
  return (
    <ChakraProvider>
      <div className="App"
        style={{
          backgroundColor: 'var(--chakra-colors-gray-900)',
          width: '99vw',
          height: 'auto',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Timer time={eventTimeEnd} />
        <About />
      </div>
    </ChakraProvider>
  );
}

export default App;
