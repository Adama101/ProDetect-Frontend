import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface API {
    id: string;
    name: string;
    description: string;
    endpoint: string;
}

export interface APICardProps {
    api: API;
}

export function APICard({ api }: APICardProps): React.JSX.Element {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar src={api.endpoint} variant="square" />
                    </Box>
                    <Stack spacing={1}>
                        <Typography align="center" variant="h5">
                            {api.name}
                        </Typography>
                        <Typography align="center" variant="body1">
                            {api.description}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
                <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
                </Stack>
            </Stack>
        </Card>
    );
}
