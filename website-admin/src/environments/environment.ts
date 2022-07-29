import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'EcommerceSourceAbp',
    logoUrl: '',
  },
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
    },
  },
} as Environment;
