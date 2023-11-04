export interface Product {
    imageCover:string,
    price:number,
    title:string,
    ratingsAverage:number,
    category:Category,
    id:string,
    description:string,
    images?:string[]
}

export interface Category{
    _id: string,
    name: string,
    slug: string,
    image: string,
}
