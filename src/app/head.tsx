import React from "react";

export default function Head() {
  return (
    <>
      <title>FolderFlux - Organização de Arquivos Automática</title>
      <meta name="description" content="Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você." />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="FolderFlux" />
      <meta property="og:title" content="FolderFlux - Organização de Arquivos Automática" />
      <meta property="og:description" content="Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você." />
      <meta property="og:url" content="https://folderflux.com" />
      <meta property="og:image" content="https://folderflux.com/logo.png" />
      <meta property="og:image:alt" content="FolderFlux Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FolderFlux - Organização de Arquivos Automática" />
      <meta name="twitter:description" content="Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você." />
      <meta name="twitter:image" content="https://folderflux.com/logo.png" />
      <meta name="twitter:site" content="@folderflux" />
    </>
  );
}
