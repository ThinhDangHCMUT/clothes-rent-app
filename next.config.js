const path = require('path');

module.exports = {
  compilerOptions: {
    baseUrl: './',
    paths: {
      '@/*': ['./*'],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx'],
  webpack5: true,
  env: {
    ZLP_MERCHANT_APP_ID: '2554',
    ZLP_MERCHANT_KEY1: 'sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn',
    ZLP_MERCHANT_KEY2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf',
    ZLP_MERCHANT_ENDPOINT: 'https://sb-openapi.zalopay.vn/v2/',
    ZLP_MERCHANT_CALLBACK_URL:
      'https://3a7a-2a09-bac5-d46a-16c8-00-245-53.ngrok-free.app/api/callback',
  },
};
