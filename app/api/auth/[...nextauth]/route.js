import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const OPTIONS = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };