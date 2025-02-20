export {};

declare global {
  interface Window {
    FinisherHeader?: new (config: unknown) => void;
  }
}
