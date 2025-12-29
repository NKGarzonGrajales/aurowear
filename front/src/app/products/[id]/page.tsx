import Link from "next/link";

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

type PageProps = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

  const res = await fetch(`${apiUrl}/products/${params.id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    return (
      <main style={{ padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Product not found</h1>
        <p>Id: {params.id}</p>
      </main>
    );
  }

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const product: Product = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>{product.name}</h1>

      <p style={{ marginTop: 8 }}>{product.description}</p>

      <div style={{ marginTop: 16 }}>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Active:</strong> {product.isActive ? 'Yes' : 'No'}
        </p>
      </div>

      <p style={{ marginTop: 24 }}>
        <Link href="/products" style={{ textDecoration: 'underline' }}>
          ← Back to products
        </Link>
      </p>
    </main>
  );
}
