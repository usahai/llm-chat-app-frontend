import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <div id="appRootLayout" className="container w-full mx-auto ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
