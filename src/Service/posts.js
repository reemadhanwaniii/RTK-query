import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => {
        return {
            getPost: builder.query({
                query: () => {
                    return {
                        url: '/posts',
                        method: 'GET'
                    }
                }
            }),
            addPost: builder.mutation({
                query: (newPost) => {
                    return {
                        url: '/posts',
                        method: 'POST',
                        body: newPost 
                    }
                }
            }),
            deletePost: builder.mutation({
                query: (id) => {
                    return {
                        url: `/posts/${id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
});


export const {useGetPostQuery, useAddPostMutation, useDeletePostMutation} = postApi;