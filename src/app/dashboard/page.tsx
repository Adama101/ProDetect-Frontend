import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { TotalCustomers } from '@/components/dashboard/overview/total_customers';
import { Alerts } from '@/components/dashboard/overview/alerts';
import { RiskScore } from '@/components/dashboard/overview/risk_score';
import { TransactionVolume } from '@/components/dashboard/overview/transaction_volume';
import { FlaggedTransactions } from '@/components/dashboard/overview/flagged_transactions';
import { LatestAlerts } from '@/components/dashboard/overview/all_alerts';
import { FlaggedCustomer } from '@/components/dashboard/overview/flagged_customers';
import { TotalTransactions } from '@/components/dashboard/overview/total_transactions';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>

        {/* Total Transaction Tile */}
        <TotalTransactions diff={12} trend="up" sx={{ height: '100%' }} value="$24K" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>

        {/* Total Customer Tile */}
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="178" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>

        {/* Alerts Tile */}
        <Alerts sx={{ height: '100%' }} value={75} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>

        {/* Risk Score Tile */}
        <RiskScore sx={{ height: '100%' }} value={15} />
      </Grid>

      {/* Risk Detected By Month Tile */}
      <Grid lg={8} xs={12}>
        <TransactionVolume
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 25] },
            //{ name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>

      {/* Flagged Transactions Tile */}
      <Grid lg={4} md={6} xs={12}>
        <FlaggedTransactions chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>

      {/* Flagged Customers Tile */}
      <Grid lg={4} md={6} xs={12}>
        <FlaggedCustomer
          products={[
            {
              id: 'PRD-005',
              name: 'Samson Were',
              avatar: 'assets/avatar.png',
              updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
            },
            {
              id: 'PRD-004',
              name: 'Kaba Mohammad',
              avatar: '',
              updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-003',
              name: 'Adama JArju',
              avatar: 'assets/avatar.png',
              updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-002',
              name: 'Larry Page',
              avatar: '',
              updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
            },
            {
              id: 'PRD-001',
              name: 'Jude Oliver',
              avatar: 'assets/avatar.png',
              updatedAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestAlerts
          alert={[
            
            // This is a sample dummy  data for place holding
            {
              id: 'PTD-007',
              customer: { name: 'Lucky Dogbey' },
              amount: 10.50,
              status: 'low_risk',
              riskscore: 7,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'PTD-006',
              customer: { name: 'Emmanuel Terwase' },
              amount: 250.1,
              status: 'low_risk',
              riskscore: 75,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'PTD-004',
              customer: { name: 'Jude Belligham' },
              amount: 1000.99,
              status: 'high_risk',
              riskscore: 90,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'PTD-003',
              customer: { name: 'Bright Init' },
              amount: 906.43,
              status: 'low_risk',              
              riskscore: 63,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'PTD-002',
              customer: { name: 'Grace Oliver' },
              amount: 320.54,
              status: 'flagged',              
              riskscore: 75.54,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },            
            {
              id: 'PTD-002',
              customer: { name: 'Kaba Mohammad' },
              amount: 120.54,
              status: 'low_risk',
              riskscore: 71,
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}

