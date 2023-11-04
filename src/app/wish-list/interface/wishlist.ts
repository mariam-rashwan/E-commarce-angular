export interface Wishlist {
    count:number,
    data:Data[],
}

interface Data {
    imageCover:string,
    price:number,
    title:string,
    totalCartPrice:number,
    _id:string,
    category:Category
}

interface Category{
    name:string
}