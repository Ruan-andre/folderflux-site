"use client";
import { Box, Button, Card, CardContent, CircularProgress, Container, Grid, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";
import { useReleaseInfo } from "../../contexts/ReleaseInfoContext";

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

  const getAssetUrl = (extension: "setup" | "portable" | "appimage" | "deb") =>{
    let response = "";
    switch (extension) {
      case "setup":
        response = releaseInfo?.assets.find((asset) => asset.name.endsWith("-setup.exe"))?.browser_download_url || "#";
        break;
      case "portable":
        response = releaseInfo?.assets.find((asset) => asset.name.endsWith(".exe") && !asset.name.endsWith("-setup.exe"))?.browser_download_url || "#";
        break;
      case "appimage":
        response = releaseInfo?.assets.find((asset) => asset.name.endsWith(".AppImage"))?.browser_download_url || "#";
        break;
      case "deb":
        response = releaseInfo?.assets.find((asset) => asset.name.endsWith(".deb"))?.browser_download_url || "#";
        break;
      default:
        break;
    }
    return response;
  }

  return (
    <Container id="download" maxWidth="md" sx={{ py: 8, mb: 6 }}>
      <Box
        sx={{
          bgcolor: "linear-gradient(135deg, #23243a 0%, #1a1b2b 100%)",
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
        <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center" alignItems="stretch" columns={12}>
          <Grid sx={{ flex: 1, display: 'flex' }}>
            <Card
              sx={{
                bgcolor: "#23243a",
                border: "1.5px solid #3a7bd5",
                borderRadius: 4,
                boxShadow: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <CardContent sx={{ textAlign: "center", flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ color: "#3a7bd5", fontWeight: 700 }}>
                  Windows
                </Typography>
                <DownloadButton fullWidth href={getAssetUrl("setup")} sx={{ mt: 2 }}>
                  Baixar Instalador (.exe)
                </DownloadButton>
                <Button
                  variant="outlined"
                  sx={{ mt: 1, borderColor: "#3a7bd5", color: "#3a7bd5", fontWeight: 700 }}
                  fullWidth
                  href={getAssetUrl("portable")}
                >
                  Versão Portátil (.exe)
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Card Linux */}
          <Grid sx={{ flex: 1, display: 'flex' }}>
            <Card sx={{
                bgcolor: "#23243a",
                border: "1.5px solid #00c9a7",
                borderRadius: 4,
                boxShadow: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}>
              <CardContent sx={{ textAlign: "center", flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ color: "#00c9a7", fontWeight: 700 }}>
                  Linux
                </Typography>
                <DownloadButton
                  fullWidth
                  href={getAssetUrl("appimage")}
                  sx={{ mt: 2, background: "linear-gradient(90deg, #00c9a7 0%, #23243a 100%)" }}
                >
                  Baixar (.AppImage)
                </DownloadButton>
                <Button
                  variant="outlined"
                  sx={{ mt: 1, borderColor: "#00c9a7", color: "#00c9a7", fontWeight: 700 }}
                  fullWidth
                 href={getAssetUrl("deb")}
                >
                  Outros formatos (.deb)
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Download;
