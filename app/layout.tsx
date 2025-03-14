import { ReactNode } from "react";
import "../styles/globals.css";
import Airtable from "airtable";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
