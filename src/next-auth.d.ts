// next-auth.d.ts
import { DefaultSession } from "next-auth";
// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's unique identifier. */
      id?: string;
      /** The user's role. */
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    /** The user's unique identifier. */
    id?: string;
    /** The user's role. */
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    role?: string;
  }
}
