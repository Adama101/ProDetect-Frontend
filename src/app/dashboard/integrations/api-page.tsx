import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { API, APICard } from '@/components/dashboard/integrations/api-card';

export const metadata = { title: `API | Dashboard | ${config.site.name}` } satisfies Metadata;

// Define the `api` array according to the `API` type
const api: API[] = [
    {
        id: 'API-001',
        name: 'Example API 1',
        description: 'This is an example API description.',
        endpoint: '/api/example1',
    },
    {
        id: 'API-002',
        name: 'Example API 2',
        description: 'This is another example API description.',
        endpoint: '/api/example2',
    },
];

export default function Page(): React.JSX.Element {
    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h4">APIs</Typography>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}></Stack>
                </Stack>
            </Stack>
            <Grid container spacing={3}>
                {api.map((apiItem) => (
                    <Grid key={apiItem.id} lg={4} md={6} xs={12}>
                        <APICard api={apiItem} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}></Box>
        </Stack>
    );
}