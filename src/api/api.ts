import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User, Connection } from '../logic/types';
import { RootState } from '../redux/store';

// * Define endpoints and export the respective hooks *

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).global.auth.token;
            if (token) {
                headers.set('authentication', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // login
        login: builder.mutation<{ authToken: string }, { username: string; password: string }>({
            query: ({ username, password }) => ({
                url: `login`,
                method: 'POST',
                body: { username, password }
            })
        }),

        // me (current user)
        getMe: builder.query<User, undefined>({
            query: () => ({
                url: `me`,
                params: {}
            })
        }),
        updateMe: builder.mutation<User, { firstName?: string; emailAddress?: string }>({
            query: ({ firstName, emailAddress }) => ({
                url: `me`,
                method: 'POST',
                body: { firstName, emailAddress }
            })
        }),
        getMyRecentConnections: builder.query<Connection[], { since: number }>({
            query: ({ since }) => ({
                url: `me/connections`,
                params: { since }
            })
        })

        // ...
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetMeQuery, useUpdateMeMutation, useGetMyRecentConnectionsQuery } = api;
