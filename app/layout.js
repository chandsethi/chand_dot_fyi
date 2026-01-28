import "./globals.css";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import BottomNav from "@/components/BottomNav";
import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { getNowData } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "chand (@Publisethi)",
  description: "Personal website of chand (@Publisethi)",
};

export default function RootLayout({ children }) {
  const nowData = getNowData();

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable}`}>
        <StyledJsxRegistry>
          <div className="container">
            <Sidebar />
            <main className="main-wrapper">
              {children}
            </main>
            <RightSidebar nowData={nowData} />
          </div>
          <BottomNav />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
