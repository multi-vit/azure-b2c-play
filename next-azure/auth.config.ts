import type { NextAuthOptions } from "next-auth";
import azureAdB2c from "next-auth/providers/azure-ad-b2c";

export const authConfig: NextAuthOptions = {
  providers: [
    azureAdB2c({
      clientId: process.env.AUTH_AZURE_AD_B2C_ID!,
      clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET!,
      tenantId: process.env.AUTH_AZURE_AD_B2C_TENANT_NAME,
      primaryUserFlow: process.env.AUTH_AZURE_AD_B2C_PRIMARY_USER_FLOW,
      authorization: { params: { scope: "offline_access openid" } },
    }),
  ],
  callbacks: {
    jwt({ token, account }) {
      if (token) console.log("TOKEN = ", token);
      if (account) console.log("ACCOUNT = ", account);
      return token;
    },
  },
};
