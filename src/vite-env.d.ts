/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key that delivers the demo-request form to SUPPORT_EMAIL. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
