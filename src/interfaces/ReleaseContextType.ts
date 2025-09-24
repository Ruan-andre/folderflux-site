import ReleaseInfo from "./ReleaseInfo";

export default interface ReleaseInfoContextType {
  releaseInfo: ReleaseInfo | null;
  loading: boolean;
  error: string | null;
}