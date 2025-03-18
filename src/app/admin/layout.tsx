import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#222",
          color: "white",
          padding: "20px",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>
              <Link href="/admin">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/products">Manage Products</Link>
            </li>
            <li>
              <Link href="/admin/orders">Manage Orders</Link>
            </li>
            <li>
              <Link href="/admin/employees">Manage Employees</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: "1", padding: "20px", background: "#f4f4f4" }}>
        {children}
      </main>
    </div>
  );
}
