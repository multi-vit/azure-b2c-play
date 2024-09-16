import NextAuth from "next-auth";
import { authConfig } from "@root/auth.config";

export const { auth, signIn, signOut } = NextAuth(authConfig);
