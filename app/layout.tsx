import { ReactNode } from "react";
import "../styles/globals.css";
import Airtable from "airtable";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
