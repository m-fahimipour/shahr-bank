//@Third-Party
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//------------------------------------------------------

//@Types
import type { IProduct, IUser } from "~/types/common";
//------------------------------------------------------

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
    getUserInfo: builder.query<IUser, string>({
      query: (id: string) => `/users/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetUsersQuery, useGetUserInfoQuery } =
  dataApi;
