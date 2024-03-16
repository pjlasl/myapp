export interface ShopItem {
  id: number;
  name: string;
  description: string;
  versions: VersionInfo[];
}

export interface VersionInfo {
  id: number;
  version: number;
  versionRequirement: number;
  price: number;
  purchased: boolean;
}
