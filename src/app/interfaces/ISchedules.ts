import IEvents from "./IEvents"

interface Attributes {
    url: string
    tabDay: string
    organizer: string
    theme: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    contentImg: ContentImg
    events: IEvents
}

export interface DaumSchedules {
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


export default interface ISchedules {
    data: DaumSchedules[]
    meta: Meta
}

interface Data {
    id: number
    attributes: Attributes
}

interface ContentImg {
    data: Data
}

// aaaaaaaaaaaaa

// export interface Root {
//     data: Daum[]
//     meta: Meta
// }

// export interface Daum {
//     id: number
//     attributes: Attributes
// }

// export interface Attributes {
//     tabDay: string
//     organizer: string
//     theme: string
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     contentImg: ContentImg
//     events: Events
// }





// export interface Attributes2 {
//     name: string
//     alternativeText: any
//     caption: any
//     width: number
//     height: number
//     formats: any
//     hash: string
//     ext: string
//     mime: string
//     size: number
//     url: string
//     previewUrl: any
//     provider: string
//     provider_metadata: any
//     createdAt: string
//     updatedAt: string
// }

// export interface Events {
//     data: any[]
// }

// export interface Meta {
//     pagination: Pagination
// }

// export interface Pagination {
//     page: number
//     pageSize: number
//     pageCount: number
//     total: number
// }
