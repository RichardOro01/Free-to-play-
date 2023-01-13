export interface Img{
    url: string,
    title: string,
    genres?: Array<Genre>,
    overview?: string,
    popularity?: number,
    release_date?: string,
}

interface Genre{
    id: number,
    name: string
}