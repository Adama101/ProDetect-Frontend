export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    Dashboard: '/dashboard', 
    transactions: '/dashboard/transactions',   
    customers: '/dashboard/customers',
    account: '/dashboard/account',
    integrations: { integration:'/dashboard/integrations', api:'/dashboard/integrations/api'},
    settings: '/dashboard/settings',
  },
} as const;
