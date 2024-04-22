import axios, { AxiosResponse } from "axios";

// // https://api.unsplash.com/search/photos/?client_id=Wp5F2-SCVpASwBAQgCUQrPKHfiOtxOwBkKABJIwXos4&query=${query}

// const API_KEY = "Wp5F2-SCVpASwBAQgCUQrPKHfiOtxOwBkKABJIwXos4";

// export const requestProduct = async (query, page) => {
//   const { data } = await axios.get("https://api.unsplash.com/search/photos/", {
//     params: {
//       client_id: API_KEY,
//       query: query,
//       page: page,
//       per_page: 10,
//     },
//   });
//   return data;
// };

// import axios, { AxiosResponse } from "axios";

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

const API_KEY = "Wp5F2-SCVpASwBAQgCUQrPKHfiOtxOwBkKABJIwXos4";

export const requestProduct = async (query: string, page: number): Promise<UnsplashResponse> => {
  const { data }: AxiosResponse<UnsplashResponse> = await axios.get(
    "https://api.unsplash.com/search/photos/",
    {
      params: {
        client_id: API_KEY,
        query: query,
        page: page,
        per_page: 10,
      },
    }
  );
  return data;
};
