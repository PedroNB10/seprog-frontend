
export interface Attributes {
    socialUrl: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    organizer: string
    shortContent: string
    longContent: string
    socialName: string
    logo: Logo
}


export interface DaumOrganizers {
    id: number
    attributes: Attributes
}





interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

interface Meta {
    pagination: Pagination
}

export default interface IOrganizers {
    data: DaumOrganizers[]
    meta: Meta
}


// novas
export interface Logo {
    data: Data
}

export interface Data {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    thumbnail: Thumbnail
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}
