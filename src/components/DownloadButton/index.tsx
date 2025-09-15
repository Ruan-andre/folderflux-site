import { Button, SxProps } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React, { useCallback } from 'react';

interface DownloadButtonProps {
  href?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  autoDetectOS?: boolean; // se true, detecta o SO e faz download correto
  getDownloadUrl?: (os: 'windows' | 'linux' | 'other') => string;
}

export default function DownloadButton({ href = '#download', fullWidth = false, children = 'Baixar Gratuitamente', sx = {}, size = 'large', autoDetectOS = false, getDownloadUrl, ...props }: DownloadButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!autoDetectOS || !getDownloadUrl) return;
      e.preventDefault();
      let os: 'windows' | 'linux' | 'other' = 'other';
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes('windows')) os = 'windows';
      else if (ua.includes('linux')) os = 'linux';
      // Mac não suportado oficialmente
      const url = getDownloadUrl(os);
      if (url && url !== '#') {
        window.location.href = url;
      } else {
        // fallback: rola até a seção de download
        const el = document.getElementById('download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [autoDetectOS, getDownloadUrl]
  );

  return (
    <Button
      variant="contained"
      size={size}
      startIcon={<DownloadIcon />}
      href={autoDetectOS ? undefined : href}
      onClick={autoDetectOS ? handleClick : undefined}
      fullWidth={fullWidth}
      sx={{
        background: 'linear-gradient(90deg, #3a7bd5 0%, #23243a 100%)',
        color: '#fff',
        fontWeight: 700,
        px: 4,
        fontSize: 20,
        boxShadow: 2,
        borderRadius: 99,
        backgroundSize: '200% 100%',
        backgroundPosition: '0% 0%',
        transition: 'background-position 0.7s cubic-bezier(.4,0,.2,1), box-shadow 0.3s, transform 0.2s',
        '&:hover': {
          backgroundPosition: '100% 0%',
          boxShadow: 4,
          transform: 'scale(1.04)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
