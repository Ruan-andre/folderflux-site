"use client";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { useReleaseInfo } from "../../contexts/ReleaseInfoContext";
import { DownloadCard } from "../DownloadCard";
import { getDownloadUrlFactory } from "@/functions/download";

const Download = () => {
  const { releaseInfo, loading, error } = useReleaseInfo();

  if (loading) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }
  if (error || !releaseInfo) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Falha ao Carregar Downloads
        </Typography>
        <Typography color="text.secondary">{error}</Typography>
      </Container>
    );
  }

  const getAssetUrl = (extension: "setup" | "portable" | "appimage" | "deb") => {
    const osDownloadType = { os: extension === "setup" ? "windows" : "linux", type: extension } as const;
    const response = getDownloadUrlFactory(releaseInfo, osDownloadType).call(releaseInfo, osDownloadType.os);
    return response.url;
  };

  return (
    <Container id="download" maxWidth="md" sx={{ py: 8, mb: 6 }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #23243a 0%, #1a1b2b 100%)",
          borderRadius: 6,
          boxShadow: 3,
          p: { xs: 3, md: 5 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 800, color: "#e0e0ff" }}
        >
          Baixe o FolderFlux Gratuitamente
        </Typography>
        <Typography textAlign="center" sx={{ color: "#b0b0c3", mb: 4 }}>
          Versão {releaseInfo?.tag_name} | Lançado em{" "}
          {new Date(releaseInfo?.published_at ?? "").toLocaleDateString("pt-BR")}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center" alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", mb: { xs: 2, md: 0 } }}>
            <DownloadCard
              title="Windows"
              titleColor="#3a7bd5"
              borderColor="#3a7bd5"
              mainButtonLabel="Baixar Instalador"
              mainButtonHref={getAssetUrl("setup") ?? "#"}
              secondaryButtonLabel="Versão Portátil (.exe)"
              secondaryButtonHref={getAssetUrl("portable") ?? "#"}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <DownloadCard
              title="Linux"
              titleColor="#00c9a7"
              borderColor="#00c9a7"
              mainButtonLabel="Baixar (.AppImage)"
              mainButtonHref={getAssetUrl("appimage") ?? "#"}
              secondaryButtonLabel="Outros formatos (.deb)"
              secondaryButtonHref={getAssetUrl("deb") ?? "#"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Download;
