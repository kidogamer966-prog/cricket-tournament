import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aashray Cricket Tournament",
  description:
    "Official Aashray Cricket Tournament website — live scores, schedules, highlights, and team updates.",
  metadataBase: new URL("https://aashraycrickettournament.vercel.app"),
  alternates: {
    canonical: "https://aashraycrickettournament.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="F8zQGxk2WkE1mV6hI_Oyq5D3rZx8WvZRc8p9y1M8abc"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://aashraycrickettournament.vercel.app/"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
