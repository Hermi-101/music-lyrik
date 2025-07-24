
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set( 'x-rapidapi-key', '3177e1957cmsh9dbd98dddcc40f2p1ff8ecjsnfee6d472e6c4' )
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopcharts: builder.query({query: () => "/charts/world"}),

    })
})

export const {
    useGetTopchartsQuery
} = shazamCoreApi;
   