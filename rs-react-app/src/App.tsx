import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary hasError={false} error={null} errorInfo={null}>
          <Header />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
