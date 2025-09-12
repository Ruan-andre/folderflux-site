"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import KofiIcon from "@mui/icons-material/Coffee";
import PixIcon from "@mui/icons-material/Pix";
import { useState } from "react";
import PixDonationDialog from "../PixDonationDialog";

export default function Donation() {
  const [isOpen, setIsOpen] = useState(false);  

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <Box id="donation" sx={{ bgcolor: "background.paper", py: 8, textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom>
          Apoie o Futuro do FolderFlux
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}>
          O FolderFlux é um projeto independente e de código aberto, mantido por apenas uma pessoa. Se ele
          facilita sua vida, considere fazer uma doação para manter o projeto vivo e em constante evolução.
        </Typography>
        <Typography fontSize={"1.5rem"}>Agradeço imensamente seu apoio!</Typography>
        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="outlined"
            startIcon={<KofiIcon />}
            href="https://ko-fi.com/folderflux"
            target="_blank"
          >
            Doar com Ko-fi (Cartão)
          </Button>
          <Button variant="outlined" onClick={() => setIsOpen(true)} startIcon={<PixIcon />}>
            Doar com PIX (Brasil)
          </Button>
        </Box>
      </Container>
      <PixDonationDialog open={isOpen} onClose={handleClose} />
    </Box>
  );
}
