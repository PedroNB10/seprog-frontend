
interface Attributes {
    socialUrl: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    organizer: string
    shortContent: string
    longContent: string
    socialName: string
}


interface Daum {
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
    data: Daum[]
    meta: Meta
}