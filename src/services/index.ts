import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct, IUser } from "../types/common";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], undefined>({
      query: () => "/products",
    }),
    getUsers: builder.query<IUser[], undefined>({
      query: () => "/users",
    }),
  }),
});

export const { useGetProductsQuery, useGetUsersQuery } = dataApi;
