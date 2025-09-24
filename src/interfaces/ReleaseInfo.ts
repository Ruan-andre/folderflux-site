import ReleaseAsset from "./ReleaseAsset";

export default interface ReleaseInfo {
  tag_name: string;
  published_at: string;
  assets: ReleaseAsset[];
}