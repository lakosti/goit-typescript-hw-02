export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}
