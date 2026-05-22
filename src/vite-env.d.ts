/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, any>;
  export default content;
}

declare module 'react-dom/client' {
  import type React from 'react';
  
  export function createRoot(
    container: Element | DocumentFragment,
    options?: any
  ): {
    render(children: React.ReactNode): void;
    unmount(): void;
  };
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}