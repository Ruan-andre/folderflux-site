"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface ReleaseInfo {
  tag_name: string;
  published_at: string;
  assets: ReleaseAsset[];
}

interface ReleaseInfoContextType {
  releaseInfo: ReleaseInfo | null;
  loading: boolean;
  error: string | null;
}

const ReleaseInfoContext = createContext<ReleaseInfoContextType | undefined>(undefined);

export const ReleaseInfoProvider = ({ children }: { children: ReactNode }) => {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/Ruan-andre/folderflux/releases/latest")
      .then((res) => {
        if (!res.ok) throw new Error("Release não encontrada");
        return res.json();
      })
      .then((data: ReleaseInfo) => setReleaseInfo(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ReleaseInfoContext.Provider value={{ releaseInfo, loading, error }}>
      {children}
    </ReleaseInfoContext.Provider>
  );
};

export function useReleaseInfo() {
  const ctx = useContext(ReleaseInfoContext);
  if (!ctx) throw new Error("useReleaseInfo deve ser usado dentro de ReleaseInfoProvider");
  return ctx;
}
