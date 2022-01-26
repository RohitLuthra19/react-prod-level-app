import './App.css';
import * as React from 'react';

type AppProps = {
  message: string;
};

function App({ message }: AppProps) {
  return <div>{message}</div>;
}
export default App;
