import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio uncaught runtime error:', error, errorInfo);
  }

  public handleReset = () => {
    try {
      localStorage.removeItem('thabet_slot_images');
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#EDE9E0] text-[#221F1A] flex items-center justify-center p-6 font-sans">
          <div className="max-w-lg w-full bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-[#221F1A]/15 shadow-xl text-center">
            <div className="w-12 h-12 rounded-full bg-[#8A4E28]/10 text-[#8A4E28] flex items-center justify-center mx-auto mb-4 font-mono font-bold text-xl">
              !
            </div>
            <h1 className="font-serif-fraunces text-2xl font-bold text-[#221F1A] mb-2">
              Application Display Notice
            </h1>
            <p className="text-sm text-[#5B564C] mb-6 leading-relaxed">
              An unexpected render issue occurred while initializing the portfolio workspace.
            </p>
            {this.state.error && (
              <div className="bg-[#221F1A] text-[#EDE9E0] text-left p-3 rounded-lg text-xs font-mono mb-6 overflow-x-auto max-h-36">
                {this.state.error.toString()}
              </div>
            )}
            <div className="flex justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-lg bg-[#8A4E28] text-white font-medium text-sm hover:bg-[#723E1E] transition-colors shadow-sm cursor-pointer"
              >
                Clear Cache & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
