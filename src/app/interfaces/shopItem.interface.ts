export interface ShopItem {
    id: number,
    name: string,
    description: string,
    versions: VersionInfo[],
}

export interface VersionInfo {
    version: number,
    versionRequirement: number
    price: number,
    purchased: boolean    
}