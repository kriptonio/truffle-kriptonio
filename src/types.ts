export interface TruffleConfig {
  working_directory: string;
  contracts_build_directory: string;

  kriptonio: UploadConfig;
}

export interface UploadConfig {
  accessToken: string;
  apiUrl: string;
  appUrl: string;
  blockchain: string;
  contract: string;
  name: string;
  wallet: string | undefined;
}
