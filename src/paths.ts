export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    Dashboard: '/dashboard', 
    transactions: '/dashboard/transactions',   
    customers: '/dashboard/customers',
    account: '/dashboard/account',
    // integration:'/dashboard/integrations',
    // api:'/dashboard/integrations/api',
    // documentation:'/dashboard/integrations/api/documentation',
    integrations: { integration:'/dashboard/integrations', api:'/dashboard/integrations/api', documentation:'/dashboard/integrations/api/documentation'},
    settings: '/dashboard/settings',
  },
} as const;
