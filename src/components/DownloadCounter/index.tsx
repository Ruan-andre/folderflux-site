'use client';

import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

export default function DownloadCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/downloads')
      .then((res) => res.json())
      .then((data) => {
        setCount(data.totalDownloads);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Falha ao buscar contagem de downloads:", error);
        setIsLoading(false);
      });
  }, []); 

  if (isLoading || count === null || count === 0) {
    return null;
  }

  const formattedCount = new Intl.NumberFormat('pt-BR').format(count);

  return (
    <Box sx={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: 0.5, 
      color: 'rgba(220,220,255,0.7)' 
    }}>
      <Typography variant="body2" sx={{ color: 'inherit' }}>•</Typography>
      <PeopleAltRoundedIcon sx={{ fontSize: '1.1rem', color: 'inherit' }} />
      <Typography
        component="span"
        variant="body2"
        sx={{
          fontWeight: 400,
          color: 'inherit',
        }}
      >
        {formattedCount} downloads
      </Typography>
    </Box>
  );
}