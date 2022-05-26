const products = [
    {
        id:'1',
        name:'El Matadero',
        price:200,
        category:'Libros',
        img:'',
        stock:20,
        description:'Literatura Argentina',
    },
    {
        id:'2',
        name:'El Aleph',
        price:400,
        category:'Libros',
        img:'',
        stock:18,
        description:'Literatura Argentina',
    },
    {
        id:'3',
        name:'Rayuela',
        price:700,
        category:'Libros',
        img:'',
        stock:10,
        description:'Literatura Argentina',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        },2000)
    })
}