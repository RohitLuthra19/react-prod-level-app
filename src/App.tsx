import * as React from 'react';
import './App.css';

type AppProps = {
  message?: string;
};

function App({ message }: AppProps) {
  return (
    <div className="class1" data-testid={message}>
      {message}
    </div>
  );
}

App.defaultProps = {
  message: 'Hello',
};

export default App;
