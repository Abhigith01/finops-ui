import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

interface StatCardProps {
    label: string;
    value: string;
    chip?: string;
    positive?: boolean;
    negative?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, chip, positive, negative }) => {
    const chipColor = positive ? 'success' : negative ? 'error' : 'default';

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle2" color="textSecondary">{label}</Typography>
                <Typography variant="h6" fontWeight="bold">{value}</Typography>
                {chip && (
                    <Box mt={1}>
                        <Chip label={chip} color={chipColor} size="small" />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default StatCard;
