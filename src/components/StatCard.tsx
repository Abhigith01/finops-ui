import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface StatCardProps {
    label: string;
    value: string;
    chip?: string;
    positive?: boolean;
    negative?: boolean;
    cardColor?: string;
}

const StatCard = ({ label, value, chip, positive, negative, cardColor }: StatCardProps) => {
    const chipColor = positive ? 'success' : negative ? 'error' : 'default';

    const headerBgColor = cardColor ? alpha(cardColor, 0.2) : '#f5f5f5';

    return (
        <Card variant="outlined" sx={{ overflow: 'hidden' }}>
   
            <Box sx={{ backgroundColor: headerBgColor, px: 2, py: 1 }}>
                <Typography variant="subtitle2" color="textSecondary">
                    {label}
                </Typography>
            </Box>


            <CardContent sx={{ pt: 1.5 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">
                        {value}
                    </Typography>
                    {chip && (
                        <Chip label={chip} color={chipColor} size="small" />
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatCard;
