export interface Cart {
    numOfCartItems:number,
    data:Data,
}
 interface Data {
    totalCartPrice:number,
    products:Product[],
    _id:string,
}
interface Product{
    _id:string,
    price:number,
    count:number,
    product:innerProduct

}

interface innerProduct{
    title:string,
    imageCover:string,
    category:Category ,
    id:string
}
interface Category{
name:string
}