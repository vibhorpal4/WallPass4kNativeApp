import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = `https://wallpass4k.herokuapp.com`;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => `/api/user`,
      providesTags: ['Users'],
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;
