import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const baseUrl = `https://wallpass4k.herokuapp.com`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation({
      query: user => ({
        url: `/api/auth/login`,
        method: 'POST',
        body: user,
      }),
    }),
    regisrer: builder.mutation({
      query: user => ({
        url: `/api/auth/register`,
        method: 'POST',
        body: user,
      }),
      
    }),
  }),
});

export const {useLoginMutation, useRegisrerMutation} = authApi;
