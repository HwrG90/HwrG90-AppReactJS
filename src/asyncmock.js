/* const productos = [
  {
    id: "1",
    nombre: "El Matadero",
    precio: 200,
    categoria: "Literatura Argentina",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRbHwZxVQ5bHNvrZRBz5SoM13B-eSYAa04w&usqp=CAU",
    stock: 20,
    description: "Un texto fundacional de la literatura Argentina",
  },
  {
    id: "2",
    nombre: "El Aleph",
    precio: 400,
    categoria: "Literatura Argentina",
    img: "http://lectorvoraz.com/wp-content/uploads/2020/09/df00421c0ea7c302959f6b24fd7742fd.jpg",
    stock: 18,
    description: "Uno de los libros mas representativos de Jorge Luis Borges",
  },
  {
    id: "3",
    nombre: "Rayuela",
    precio: 700,
    categoria: "Literatura Argentina",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/526/507/products/97898772525381-b9794455c354cbb38d15843725976161-480-0.png",
    stock: 10,
    description: "Una novela que fusiona la narrativa con lo ludico ",
  },
  {
    id: "4",
    nombre: "La Celestina",
    precio: 900,
    categoria: "Litetatura Española",
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/80/c2/80c2be032222bce3c9cad323777d8343.jpg",
    stock: 5,
    description: "Clasico de la literatura española",
  },
  {
    id: "5",
    nombre: "Lazarillo de Tormes",
    precio: 700,
    categoria: "Litetatura Española",
    img: "https://www.elsotano.com/imagenes_grandes/9786071/978607141112.JPG",
    stock: 8,
    description: "El libro cumbre de la novela picarezca",
  },  {
    id: "6",
    nombre: "La casa de Bernarda Alba",
    precio: 500,
    categoria: "Litetatura Española",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJiSTUQs_z3Fj2eAwWbwLnku1lrcm1EvRK0tyblUjyaXeGFFm4fYjQgrgEcUS01Y-Cc8&usqp=CAU",
    stock: 10,
    description: "Una obra teatral escrita en tres actos",
  },
];

export const listaProductos = () => {
  return new Promise((respuesta) => {
    setTimeout(() => {
      respuesta(productos);
    }, 2000);
  });
};

export const productoId = (id) => {
  return new Promise((respuesta) => {
    setTimeout(() => {
      respuesta(productos.find((prod) => prod.id === id));
    }, 2000);
  });
};

export const productosPorCategoria = (categoriaId) => {
  return new Promise((respuesta) => {
    setTimeout(() => {
      respuesta(productos.filter((prod) => prod.categoria === categoriaId));
    }, 2000);
  });
};
 */