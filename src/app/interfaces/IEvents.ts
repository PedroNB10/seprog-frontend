
interface Attributes {
    time: string
    content: string
    createdAt: string
    updatedAt: string
}


interface Daum {
    id: number
    attributes: Attributes
}


interface Meta {
    pagination: Pagination
}

interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}


export default interface IEvents {
    data: Daum[]
    meta: Meta
}
