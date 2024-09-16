# azure-b2c-play

A repo for me to practise initialising, implementing and configuring Azure B2C

## Running the app locally

### Azure Active Directory B2C

- Create a tenant using [this tutorial](https://learn.microsoft.com/en-gb/azure/active-directory-b2c/tutorial-create-tenant?WT.mc_id=Portal-Microsoft_AAD_B2CAdmin)
- Register your [web application](https://learn.microsoft.com/en-gb/azure/active-directory-b2c/tutorial-register-applications)
- Create a [user flow](https://learn.microsoft.com/en-gb/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-user-flow)

### Add NextAuth

I've used [NextAuth](https://next-auth.js.org/) to mirror a client project I'm currently working on, but I'd recommend looking at v5 of this library, found [here](https://authjs.dev/).

### Environment

You'll need a `.env` file in the root of the project, containing the following keys:

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `AUTH_AZURE_AD_B2C_ID`
- `AUTH_AZURE_AD_B2C_SECRET`
- `AUTH_AZURE_AD_B2C_TENANT_NAME`
- `AUTH_AZURE_AD_B2C_PRIMARY_USER_FLOW`

More information about what these should contain can be found in the provider documentation linked above.

### Scripts

Install dependencies: `yarn install`
Run the app: `yarn run dev`
