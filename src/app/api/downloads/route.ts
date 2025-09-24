// app/api/downloads/route.ts
import { NextResponse } from 'next/server';

// Interface para garantir a tipagem da resposta da API do GitHub
interface GitHubAsset {
  name: string;
  download_count: number;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/repos/Ruan-andre/folderflux/releases', {
      next: { revalidate: 3600 }, 
    });

    if (!res.ok) {
      throw new Error(`Falha ao buscar dados do GitHub: ${res.statusText}`);
    }

    const releases: GitHubRelease[] = await res.json();

    const extensoesValidas = ['.exe', '.deb', '.AppImage', '.zip'];
    let totalDownloads = 0;

    for (const release of releases) {
      for (const asset of release.assets) {
        if (extensoesValidas.some(ext => asset.name.endsWith(ext))) {
          totalDownloads += asset.download_count;
        }
      }
    }

    return NextResponse.json({ totalDownloads });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ totalDownloads: 0 }, { status: 500 });
  }
}