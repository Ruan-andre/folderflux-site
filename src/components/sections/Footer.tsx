import { Box, Container, Link, Typography } from '@mui/material';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#181926', mt: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {/* GitHub */}
          <Link href="https://github.com/Ruan-andre/folderflux" target="_blank" aria-label="GitHub" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s' , '&:hover': { transform: 'scale(1.15)' } }}>
            <GitHubIcon style={{ width: 32, height: 32 }} />
            <Typography variant="caption" sx={{ color: '#b0b0c3', mt: 0.5 }}>GitHub</Typography>
          </Link>
          {/* Portfólio */}
          <Link title='Portfólio' href="https://a-ruan-portfolio.vercel.app/" target="_blank" aria-label="Portfólio" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }}>
            <Image src="/icon-portfólio.ico" alt="Portfólio" width={32} height={32} style={{ borderRadius: 4 }} />
            <Typography variant="caption" sx={{ color: '#b0b0c3', mt: 0.5 }}>Portfólio</Typography>
          </Link>
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/andré-ruan-554854250" target="_blank" aria-label="LinkedIn" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }}>
            <LinkedInIcon style={{ width: 32, height: 32 }} />
            <Typography variant="caption" sx={{ color: '#b0b0c3', mt: 0.5 }}>LinkedIn</Typography>
          </Link>
        </Box>
        <Typography variant="body2" sx={{ color: '#b0b0c3' }}>
          © {new Date().getFullYear()} André Ruan. Lançado sob a Licença MIT.
        </Typography>
      </Container>
    </Box>
  );
}