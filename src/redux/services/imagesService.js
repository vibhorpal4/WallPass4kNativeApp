import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = `https://wallpass4k.herokuapp.com`;

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Images'],
  endpoints: builder => ({
    getImages: builder.query({
      query: () => `/api/image`,
      providesTags: ['Images'],
    }),
  }),
});

export const {useGetImagesQuery} = imagesApi;
