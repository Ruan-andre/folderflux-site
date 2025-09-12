import { Box, Container, Grid, Typography } from '@mui/material';

import RuleIcon from '@mui/icons-material/Rule';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CodeIcon from '@mui/icons-material/Code';
import TourIcon from '@mui/icons-material/Tour';

const features = [
  { icon: <RuleIcon fontSize="large" sx={{ color: '#6C63FF' }} />, title: 'Regras Inteligentes', description: 'Crie lógicas complexas de forma visual e intuitiva.' },
  { icon: <AccountTreeIcon fontSize="large" sx={{ color: '#00C9A7' }} />, title: 'Perfis Customizáveis', description: 'Alterne entre conjuntos de regras com um único clique.' },
  { icon: <CodeIcon fontSize="large" sx={{ color: '#FFB300' }} />, title: 'Código Aberto', description: 'Confie em um software onde você pode ver como tudo funciona.' },
  { icon: <TourIcon fontSize="large" sx={{ color: '#FF5C8D' }} />, title: 'Onboarding Interativo', description: 'Um tour guiado ensina a usar o app em minutos.' },
];

export default function Features() {
  return (
    <Box id="features" sx={{ bgcolor: 'rgba(30,32,48,0.98)', py: 8, borderRadius: 6, boxShadow: 2, mb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 800, color: '#e0e0ff' }}>
          Tudo que você precisa para uma organização perfeita
        </Typography>
  <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center" alignItems="center">
          {features.map((feature) => (
            <Grid size={{xs:12, sm:6, md:3}} key={feature.title}>
              <Box textAlign="center">
                {feature.icon}
                <Typography variant="h5" component="h3" sx={{ mt: 2, fontWeight: 700, color: '#fff' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, color: '#b0b0c3' }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}