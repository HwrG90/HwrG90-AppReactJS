const products = [
  {
    id: "1",
    name: "El Matadero",
    price: 200,
    category: "marron",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRbHwZxVQ5bHNvrZRBz5SoM13B-eSYAa04w&usqp=CAU",
    stock: 20,
    description: "Literatura Argentina",
  },
  {
    id: "2",
    name: "El Aleph",
    price: 400,
    category: "negro",
    img: "http://lectorvoraz.com/wp-content/uploads/2020/09/df00421c0ea7c302959f6b24fd7742fd.jpg",
    stock: 18,
    description: "Literatura Argentina",
  },
  {
    id: "3",
    name: "Rayuela",
    price: 700,
    category: "blanco",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/526/507/products/97898772525381-b9794455c354cbb38d15843725976161-480-0.png",
    stock: 10,
    description: "Literatura Argentina",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 400)
  })
}
export const getProductsByCategory = (categoryId) => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      },400)
  })
}
