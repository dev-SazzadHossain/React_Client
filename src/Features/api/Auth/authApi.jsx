import rootApi from "../../rootApi";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    // signUp Mutation
    signUp: builder.mutation({
      query: (data) => ({
        url: "/signUp",
        method: "POST",
        body: data,
      }),
    }),
    // SignUp Mutation

    // Sign In Mutation
    signIn: builder.mutation({
      query: (data) => ({
        url: "/signIn",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
