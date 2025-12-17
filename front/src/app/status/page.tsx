export const dynamic = "force-dynamic";

type HealthResponse = {
  ok: boolean;
  timestamp: string;
};

export default async function StatusPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  let data: HealthResponse | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(`${apiUrl}/health`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = (await res.json()) as HealthResponse;
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Aurowear Status</h1>

      <p style={{ marginTop: 8 }}>
        API URL: <code>{apiUrl}</code>
      </p>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #333", borderRadius: 8 }}>
        {error ? (
          <>
            <p style={{ fontWeight: 700 }}>❌ Backend: OFF</p>
            <p>Error: {error}</p>
          </>
        ) : (
          <>
            <p style={{ fontWeight: 700 }}>✅ Backend: ON</p>
            <pre style={{ marginTop: 8 }}>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
      </div>
    </main>
  );
}
    