import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children?: ReactNode;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryState) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error: error, errorInfo: errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong, please return to previous page</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </>
      );
    }
    return this.props?.children;
  }
}

export default ErrorBoundary;
