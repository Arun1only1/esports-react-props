import React from "react";
import "./App.css";
import ProductCard from "./ProductCard";

const productList = [
  {
    id: "1",
    image:
      "https://static-01.daraz.com.np/p/9a5f85c067833bdf7a746142c5d68213.png_300x0q75.webp",
    name: "Royal Blue Water Purifier",
    price: 10395,
  },
  {
    id: "2",
    image:
      "https://static-01.daraz.com.np/p/67789aac75b2c560fc34336b77fbb147.png_300x0q75.webp",
    name: "Aqua Fresh Accent Plus RO",
    price: 14599,
  },
  {
    id: "3",
    image:
      "https://static-01.daraz.com.np/p/6131ef9f232eefcea78fabf3265333c6.png_300x0q75.webp",
    name: "Kent Grand Plus B",
    price: 301550,
  },
  {
    id: "4",
    image:
      "https://static-01.daraz.com.np/p/57485880e1f1dd76081e795428e25b34.jpg_300x0q75.webp",
    name: "Kent Grand Plus",
    price: 22500,
  },
  {
    id: "5",
    image:
      "https://static-01.daraz.com.np/p/550c369110dda9e872a4a73e7c2f663f.jpg_300x0q75.webp",
    name: "Adidas",
    price: 9500,
  },
  {
    id: "6",
    image:
      "https://www.maketheswitch.ph/cdn/shop/products/43VidaaTransparent.png?v=1669004891",
    name: "Samsung | Full HD | 55 inch",
    price: 96000,
  },
  {
    id: "7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWzagIjgLT7VLC5_O36vHMP7z5GjcJoiGGgewClCAyQ&s",
    name: "LG Washing Machine | ThinQ AI | Power saving | Less water",
    price: 85000,
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {productList.map((item, index, self) => {
        return (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default App;
