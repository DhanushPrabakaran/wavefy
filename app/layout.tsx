import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
// import grain from "@/public/svg/grain.svg";
import "./globals.css";
// import Header from "@/components/block/Header";
import { Toaster } from "@/components/ui/toaster";
// import Header from "@/components/block/Header";
import NextTopLoader from "nextjs-toploader";

const AntonSC = localFont({
  src: "./fonts/Tanker_Complete/Fonts/OTF/Tanker-Regular.otf",
  variable: "--font-antonsc",
  weight: "100 900",
});
const SCHABO = localFont({
  src: "./fonts/SCHABO-Condensed.woff",
  variable: "--font-schabo",
  weight: "100 900",
});
const W95FA = localFont({
  src: "./fonts/W95FA/W95FA/w95fa.woff",
  variable: "--font-w95fa",
  weight: "100 900",
});
const RobotoCondensed = localFont({
  src: "./fonts/RobotoCondensed-VariableFont_wght.ttf",
  variable: "--font-robotorondensed",
  weight: "100 900",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Walkway = localFont({
  src: "./fonts/Walkway/Walkway_UltraBold.ttf",
  variable: "--font-walkway",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Portfolio Forge ",
  description:
    "Craft your professional portfolio effortlessly with PortfolioForge. Showcase your skills, experiences, and projects to stand out in your field. With an intuitive dashboard and customizable themes, Portfolio Forge makes portfolio creation seamless and enjoyable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="hNAFUf5ssvqJlUqvjCz4Jj_PVzevjNDvJuN5-s16Kx8"
        />
      </head>
      <body
        className={`${Walkway.variable} ${W95FA.variable} ${SCHABO.variable} ${geistSans.variable} ${geistMono.variable} ${AntonSC.variable} ${RobotoCondensed.variable} bg-cover bg-no-repeat   relative antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#dc2626"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
