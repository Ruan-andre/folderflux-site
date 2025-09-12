import { ReleaseInfoProvider } from '@/contexts/ReleaseInfoContext';
import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'FolderFlux - Organização de Arquivos Automática',
  description: 'Crie regras inteligentes, defina perfis e deixe o FolderFlux organizar seus arquivos para você.',
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