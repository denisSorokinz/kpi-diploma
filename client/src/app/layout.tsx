import Modals from "@/components/Modals";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Header />
        <Modals />
        <main className="container mx-auto px-2 pt-8">{children}</main>
      </body>
    </html>
  );
}