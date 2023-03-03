export type Item = {
    id?: string;
    name?: string;
    price?: string;
    subname?: string;
    image?: string;
    brand?: string;
    video?: string;
    desc1?: string;
    cname?: string;
    cphone?: string;
    cemail?: string;
};

export type Items = Item[];

export type Brand = {
    id?: string;
    name?: string;
};

export type Brands = Brand[];
