const baseUrl = 'https://localhost:30666';
export const environment = {
  production: true,
  oAuthConfig: {
    issuer: 'https://localhost:44314',
    redirectUri: baseUrl,
    clientId: 'EcommerceSourceAbp_App',
    responseType: 'code',
    scope: 'offline_access EcommerceSourceAbp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44314',
      rootNamespace: 'EcommerceSourceAbp',
      prefixEcom: '/api/ecom',
    },
  },
};
