// app/page.js
// ✅ SSR 寫法：直接在 server component 中 fetch

async function getProduct() {
  const res = await fetch("https://fakestoreapi.com/products/1");
  const data = await res.json();
  return data;
}

export default async function ProductPage() {
  const product = await getProduct(); // Server Side 呼叫 API

  return (
    <div style={{ padding: 20 }}>
      <h1>🖥️ SSR 商品頁（app router）</h1>
      <h2>{product.title}</h2>
      <img src={product.image} width={150} alt="商品圖片" />
      <p>{product.description}</p>
      <p>價格：${product.price}</p>
    </div>
  );
}