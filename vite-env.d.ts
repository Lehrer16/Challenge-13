// src/vite-env.d.ts
interface ImportMetaEnv {
    readonly TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  