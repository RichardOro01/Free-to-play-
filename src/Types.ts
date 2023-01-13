export interface Img{
    url: string,
    title: string,
    genres?: Array<Genre>,
    overview?: string,
    popularity?: number,
    release_date?: string,
}

export interface Genre{
    id: number,
    name: string
}