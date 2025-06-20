// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  //get products
  endpoints: (build) => ({
    getProducts: build.query({
      query: (name) => "products",
    }),
    // //add a new products
    //  addProduct: build.mutation({
    //   query: (newProduct) => ({
    //     url: "products",
    //     method: 'POST',
    //     body:newProduct,
    //   }),
    //   invalidatesTags: [ {types:'Products', id: 'LIST'}],
    }),
    
 
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery} = productsApi;