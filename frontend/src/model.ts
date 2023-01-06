export interface IBook {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
}


// {
//     "id": number
//     "title": string
//     "autor": string
//     "date": string
//     "cut_id": number
// }