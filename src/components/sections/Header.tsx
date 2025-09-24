"use client";

import Image from "next/image";
import { Box, Link } from "@mui/material";
import DownloadButton from "../DownloadButton";
import { useReleaseInfo } from "../../contexts/ReleaseInfoContext";
import { getDownloadUrlFactory } from "@/functions/download";

export default function Header() {
  const { releaseInfo } = useReleaseInfo();
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: 2,
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        bgcolor: "rgba(24, 25, 38, 0.98)",
        boxShadow: 2,
        minHeight: 64,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Image src="/logo.png" alt="FolderFlux Logo" width={48} height={48} priority />
        <span style={{ color: "#e0e0ff", fontWeight: 700, fontSize: 22, marginLeft: 8, letterSpacing: -1 }}>
          FolderFlux
        </span>
      </Box>
      <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 6 }}>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#e0e0ff", fontWeight: 600, fontSize: 16, "&:hover": { color: "#3a7bd5" } }}
        >
          Início
        </Link>
        <Link
          href="#features"
          underline="none"
          sx={{ color: "#e0e0ff", fontWeight: 600, fontSize: 16, "&:hover": { color: "#3a7bd5" } }}
        >
          Recursos
        </Link>
        <Link
          href="#donation"
          underline="none"
          sx={{ color: "#e0e0ff", fontWeight: 600, fontSize: 16, "&:hover": { color: "#3a7bd5" } }}
        >
          Apoie
        </Link>
        <Link
          href="https://github.com/Ruan-andre/folderflux"
          target="_blank"
          underline="none"
          sx={{ color: "#e0e0ff", fontWeight: 600, fontSize: 16, "&:hover": { color: "#3a7bd5" } }}
        >
          GitHub
        </Link>
        <Link
          href="https://a-ruan-portfolio.vercel.app/"
          target="_blank"
          underline="none"
          sx={{ color: "#e0e0ff", fontWeight: 600, fontSize: 16, "&:hover": { color: "#3a7bd5" } }}
        >
          Portfólio
        </Link>
      </Box>
      {/* Botão de ação */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DownloadButton
          autoDetectOS
          size="small"
          getDownloadUrl={getDownloadUrlFactory(releaseInfo)}
        >
          Baixar Agora
        </DownloadButton>
      </Box>
    </Box>
  );
}
