import NextAuth from "next-auth";
import { authConfig } from "@root/auth.config";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
