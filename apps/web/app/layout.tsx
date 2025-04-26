import Navbar from "@/components/navbar";
import "./globals.css";
import { AuthProvider } from "@/context/auth-provider";
import { APIProvider } from "@/context/api-provider";
import ContentLayout from "@/components/content-layout";

export const metadata = {
  title: "The Hive",
  description: "Blogging platform",
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
          <APIProvider>
            <Navbar />
            <ContentLayout>{children}</ContentLayout>
          </APIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
