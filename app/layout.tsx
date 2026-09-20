import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesh Pujari | Full Stack Engineer",
  description: "Portfolio of Ganesh Pujari — Full Stack Engineer specializing in Angular, Node.js, TypeScript, PostgreSQL, MongoDB and Azure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}