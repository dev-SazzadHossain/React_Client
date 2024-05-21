import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const auth = localStorage.getItem("authUser");
let token;
if (auth) {
  const { refreshToken } = JSON.parse(auth);
  token = refreshToken;
}

const rootApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    headers: {
      authorization: token ? token : "",
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default rootApi;
