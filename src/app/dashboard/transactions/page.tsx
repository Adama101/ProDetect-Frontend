
import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { TransactionsFilters } from '@/components/dashboard/transactions/transactions-filters';
import { TransactionsTable } from '@/components/dashboard/transactions/transactions-table';
import type { Transactions } from '@/components/dashboard/transactions/transactions-table';

export const metadata = { title: `Transactions | Dashboard | ${config.site.name}` } satisfies Metadata;

const transactions = [
    // Transactions List
] satisfies Transactions[];

export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedTransactions = applyPagination(transactions, page, rowsPerPage);

    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h4">Transactions</Typography>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    </Stack>
                </Stack>
            </Stack>
            <TransactionsFilters />
            <TransactionsTable
                count={paginatedTransactions.length}
                page={page}
                rows={paginatedTransactions}
                rowsPerPage={rowsPerPage}
            />
        </Stack>
    );
}

function applyPagination(rows: Transactions[], page: number, rowsPerPage: number): Transactions[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
