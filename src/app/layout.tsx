import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <Link href="/">
            <button>Home</button>
          </Link>

          <Link href="/admin">
            <button>Admin</button>
          </Link>

          <Link href="/shop">
            <button>Shop</button>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
