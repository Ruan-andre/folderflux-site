"use client";

import { Box, Container, Typography } from "@mui/material";
import DownloadButton from "../DownloadButton";
import { useReleaseInfo } from "../../contexts/ReleaseInfoContext";
import DownloadCounter from "../DownloadCounter";
import { getDownloadUrlFactory } from "@/functions/download";

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
        borderRadius: "0 0 24px 24px",
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
        <DownloadButton size="large" autoDetectOS getDownloadUrl={getDownloadUrlFactory(releaseInfo)} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            mt: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(220,220,255,0.7)" }}>
            Disponível para Windows e Linux
          </Typography>
          <DownloadCounter />
        </Box>
      </Container>
    </Box>
  );
}
