import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protected routes: Check if the user is trying to access protected areas
      // Determine if the path is NOT /login (or other public paths if any)
      const isAuthPage = nextUrl.pathname.startsWith('/login');
      const isForgotPasswordPage = nextUrl.pathname.startsWith('/forgot-password');
      const isResetPasswordPage = nextUrl.pathname.startsWith('/reset-password');
      const isPublicPage = isAuthPage || isForgotPasswordPage || isResetPasswordPage;

      if (!isPublicPage) {
        if (isLoggedIn) {
          // Role-based Redirect Logic
          const role = (auth.user as any).role;
          const isRoot = nextUrl.pathname === '/';

          if (role === 'EMPLOYEE' && isRoot) {
            return Response.redirect(new URL('/assets', nextUrl));
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // If logged in and on login page, redirect to appropriate home
        const role = (auth.user as any).role;
        if (role === 'EMPLOYEE') {
          return Response.redirect(new URL('/assets', nextUrl));
        }
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
    // Add user role to the session
    async session({ session, token }: any) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    }
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
