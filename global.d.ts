declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

export const ReactNativeWebView = window.ReactNativeWebView;
