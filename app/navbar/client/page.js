// app/client-product/page.js
"use client";

import { useEffect, useState } from "react";

export default function ClientProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then(setProduct);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 CSR 商品頁</h1>
      {!product ? (
        <p>載入中...</p>
      ) : (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} width={150} alt="商品圖片" />
          <p>{product.description}</p>
          <p>價格：${product.price}</p>
        </>
      )}
    </div>
  );
}
