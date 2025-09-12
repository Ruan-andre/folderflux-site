
import { Box, Divider } from '@mui/material';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Download from '../components/sections/Download';
import Donation from '../components/sections/Donation';
import Footer from '../components/sections/Footer';

export default function HomePage() {
  return (
    <Box>
      <Header />
      <header>
        <Hero />
      </header>
      <main>
        <Features />
        <Divider />
        <Download />
        <Donation />
      </main>
      <Footer />
    </Box>
  );
}