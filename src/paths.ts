export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    Dashboard: '/dashboard',    
    customers: '/dashboard/customers',
    account: '/dashboard/account',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
} as const;
