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
    const headerBgColor = cardColor ? alpha(cardColor, 0.08) : '#f5f5f5';

    const ArrowUp = (
        <svg width="14" height="14" viewBox="0 0 20 20" style={{ marginRight: 4, display: 'block' }}>
            <path d="M10 15V5M10 5l-5 5M10 5l5 5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const ArrowDown = (
        <svg width="14" height="14" viewBox="0 0 20 20" style={{ marginRight: 4, display: 'block' }}>
            <path d="M10 5v10M10 15l5-5M10 15l-5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

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
                        <Chip
                            label={
                                <Box display="flex" alignItems="center">
                                    {positive && ArrowUp}
                                    {negative && ArrowDown}
                                    {chip}
                                </Box>
                            }
                            color={chipColor}
                            size="small"
                        />
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatCard;
