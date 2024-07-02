export const authConfig = {
  providers:[],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const baseURL = process.env.NEXT_BASE_URL;
        return Response.redirect(new URL("/dashboard",baseURL));
      }
      return true;
    },
  },
};