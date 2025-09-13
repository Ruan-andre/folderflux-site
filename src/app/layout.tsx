import { ReleaseInfoProvider } from '@/contexts/ReleaseInfoContext';
import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'FolderFlux - Organização de Arquivos Automática',
  description: 'Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você.',
  openGraph: {
    title: 'FolderFlux - Organização de Arquivos Automática',
    description: 'Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você.',
    url: 'https://folderflux.com',
    siteName: 'FolderFlux',
    images: [
      {
        url: 'https://folderflux.com/logo.png',
        width: 512,
        height: 512,
        alt: 'FolderFlux Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FolderFlux - Organização de Arquivos Automática',
    description: 'Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você.',
    site: '@folderflux',
    images: ['https://folderflux.com/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <ReleaseInfoProvider>
            {children}
          </ReleaseInfoProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}