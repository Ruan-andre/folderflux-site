import ReleaseInfo from "@/interfaces/ReleaseInfo";
import { DownloadUrlFactoryType } from "@/types/DownloadUrlFactoryType";

type osDownloadType = {
  os: "windows" | "linux" | "other";
  type: "setup" | "portable" | "appimage" | "deb";
};
export function getDownloadUrlFactory(releaseInfo: ReleaseInfo | null, osDownloadType?: osDownloadType) {
  const msgNewVersion = "Aguarde, uma nova versão está sendo preparada... Tente novamente em alguns minutos.";
  const responseObj: DownloadUrlFactoryType = {
    status: "error",
    message: "Erro ao obter informações de download.",
  };
  return (os: "windows" | "linux" | "other") => {
    if (!releaseInfo) {
      responseObj.message = "Erro ao obter informações de download. ";
      return responseObj;
    }

    if (os === "windows") {
      if (osDownloadType) {
        responseObj.url =
          osDownloadType.type === "setup"
            ? releaseInfo.assets.find((a) => a.name.endsWith("-setup.exe"))?.browser_download_url
            : releaseInfo.assets.find((a) => a.name.endsWith(".exe"))?.browser_download_url;
      } else {
        responseObj.url = releaseInfo.assets.find((a) => a.name.endsWith("-setup.exe"))?.browser_download_url;
      }

      if (responseObj.url) {
        responseObj.status = "ok";
        responseObj.message = "Sucesso ao obter URL de download.";
      } else {
        responseObj.status = "newVersion";
        responseObj.message = msgNewVersion;
      }
      return responseObj;
    }
    if (os === "linux") {
      if (osDownloadType) {
        responseObj.url =
          osDownloadType.type === "appimage"
            ? releaseInfo.assets.find((a) => a.name.endsWith(".AppImage"))?.browser_download_url
            : releaseInfo.assets.find((a) => a.name.endsWith(".deb"))?.browser_download_url;
      } else {
        responseObj.status = "newVersion";
        responseObj.message = msgNewVersion;
      }
      return responseObj;
    }
    return responseObj;
  };
}
