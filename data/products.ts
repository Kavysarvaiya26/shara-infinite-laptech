// data/products.ts

export type Product = {
  id: number;        // 1,2,3...
  name: string;      // Product name
  category: string;  // RAM, Monitor, SSD, etc.
  brand: string;     // Company
  specs: string;     // Short details
  price: number;     // Price in Rs
  stock: number;     // How many pieces left
  inStock: boolean;  // true = available
  imageUrl: string;  
};

export const products: Product[] = [
{
  id: 1,
  name: "8GB DDR4 RAM",
  category: "RAM",
  brand: "Corsair",
  specs: "DDR4, 3200MHz",
  price: 4999,
  stock: 5,
  inStock: true,
  imageUrl: "/product/ram.jpg",     // ✔ correct
},{ 

  id: 2,
  name: "Monitor 24 inch",
  category: "Monitor",
  brand: "Dell",
  specs: "1080p, HDMI",
  price: 8999,
  stock: 0,
  inStock: false,
  imageUrl: "/product/ram.jpg", // ✔ correct
},
  {
    id: 3,
    name: '24" IPS Monitor',
    category: "Monitor",
    brand: "Dell",
    specs: "24 inch, 1080p, HDMI",
    price: 7999,
    stock: 0,
    inStock: false,
    imageUrl: "/product/mointer.jpg",   
  },
  {
    id: 4,
    name: "512GB NVMe SSD",
    category: "SSD",
    brand: "Samsung",
    specs: "NVMe M.2, 512GB",
    price: 3999,
    stock: 4,
    inStock: true,
    imageUrl: "/product/mointer.jpg",   
  },
];
