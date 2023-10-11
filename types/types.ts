export type Outdoor = {
    id: string;
    label: string;
    imageSrc: string
}

export type Category = {
    id: string;
    name: string;
    outdoor: Outdoor
}
export type Product = {
    id: string;
    name: string;
    price: string;
    isFeatured: boolean;
    categorias: Category;
    size: Size;
    Color: Color;
    Image: Images[]
}
export type Size = {
    id: string;
    name: string;
    value: string;
}
export type Color = {
    id: string;
    name: string;
    value: string;
}
export type Images = {
    id: string;
    url: string
}