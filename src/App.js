import * as React from 'react';
import {
  ChakraProvider
} from "@chakra-ui/react"

// components
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider>
      <div className="App"
        style={{
          backgroundColor: '#f5f5f5',
          width: '99vw',
          height: 'auto',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
