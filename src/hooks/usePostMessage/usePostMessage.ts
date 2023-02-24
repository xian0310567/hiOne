import React from "react";

const usePostMessage = (message: string) => {
  window.ReactNativeWebView.postMessage(message);
};

export default usePostMessage;
