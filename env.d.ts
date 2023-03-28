declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INFURA_API_KEY: string;
      PRIVATE_KEY: string;
    }
  }
}

export {};
