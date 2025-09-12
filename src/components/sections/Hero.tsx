"use client";

import { Box, Container, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";
import { useReleaseInfo } from "../../contexts/ReleaseInfoContext";

import type { ReleaseInfo } from "../../contexts/ReleaseInfoContext";
function getDownloadUrlFactory(releaseInfo: ReleaseInfo | null) {
  return (os: 'windows' | 'linux' | 'other') => {
    if (!releaseInfo) return '#';
    if (os === 'windows') {
      // Prioriza instalador, senão portátil
      return (
        releaseInfo.assets.find((a) => a.name.endsWith('-setup.exe'))?.browser_download_url ||
        releaseInfo.assets.find((a) => a.name.endsWith('.exe'))?.browser_download_url ||
        '#'
      );
    }
    if (os === 'linux') {
      return (
        releaseInfo.assets.find((a) => a.name.endsWith('.AppImage'))?.browser_download_url ||
        '#'
      );
    }
    return '#';
  };
}


export default function Hero() {
  const { releaseInfo, loading, error } = useReleaseInfo();

  if (loading) {
    return null;
  }
  if (error) {
    return null;
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #23243a 0%, #1a1b2b 100%)",
        py: { xs: 8, md: 14 },
        color: "#f3f3f3",
        textAlign: "center",
        borderRadius: 6,
        boxShadow: 4,
        mb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 900, letterSpacing: -2, fontSize: { xs: 32, md: 48 }, color: "#fff" }}
        >
          Organize seus arquivos no automático.
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: "rgba(220,220,255,0.85)", fontWeight: 400 }}>
          Crie regras inteligentes, defina perfis e deixe o FolderFlux trabalhar por você. Simples, poderoso e
          de código aberto.
        </Typography>
        <DownloadButton
          size="large"
          autoDetectOS
          getDownloadUrl={getDownloadUrlFactory(releaseInfo)}
        />
        <Typography variant="body2" sx={{ mt: 2, color: "rgba(220,220,255,0.7)" }}>
          Disponível para Windows e Linux
        </Typography>
      </Container>
    </Box>
  );
}
