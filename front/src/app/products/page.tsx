export const dynamic = 'force-dynamic';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: string;
  isActive: boolean;
};

export default async function ProductsPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

  const res = await fetch(`${apiUrl}/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products: Product[] = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Products</h1>

      <ul style={{ marginTop: 16 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: 16,
              padding: 16,
              border: '1px solid #ccc',
              borderRadius: 8,
            }}
          >
            <h2 style={{ fontWeight: 600 }}>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
