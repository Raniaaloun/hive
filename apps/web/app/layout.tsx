import Navbar from "@/components/navbar";
import "./globals.css";
import { AuthProvider } from "@/context/auth-provider";

export const metadata = {
  title: 'The Hive',
  description: 'Blogging platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
      <Navbar />
      <main>
        {children}
      </main>
      </AuthProvider>
      </body>
    </html>
  );
}
