import * as React from 'react';
import styles from './App.scss';
import Button from './components/Button';

type AppProps = {
  message?: string;
};
function App({ message }: AppProps) {
  return (
    <div className={styles.class1} data-testid={message}>
      <Button>Submit</Button>
    </div>
  );
}

App.defaultProps = {
  message: 'Hello',
};

export default App;
