export interface Devices {
    id: number,
    name: string,
    icon: string,
    address?: string,
    affected?: boolean,
    allowContent?: boolean,    
    deviceContent?: any
}