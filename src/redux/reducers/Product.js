let initialState = [
  {
    id: 1,
    name: "IPhone 12 Pro Max",
    image:
      "https://cdn.tgdd.vn/Files/2020/10/14/1298699/iphone-12-pro-max_800x450.jpg",
    description: "Apple",
    price: 1000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: "IPhone 12 Mini",
    image: "https://cdn.tgdd.vn/Files/2020/10/13/1298564/r2_1280x720.jpg",
    description: "Apple",
    price: 1000,
    inventory: 10,
    rating: 3,
  },
  {
    id: 3,
    name: "IPhone 12",
    image:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2.png",
    description: "Apple",
    price: 1000,
    inventory: 10,
    rating: 2,
  },
];

const Product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default Product;
