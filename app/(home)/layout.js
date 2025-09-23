import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Nav from "@/components/common/nav";
import Announcement from "@/components/common/announcement";
import HomeFooter from "@/components/home/home-footer";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bệnh viện phổi Quảng Ninh",
  description: "Nơi trả lại những hơi thở khoẻ mạnh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${plusJakarta.className} antialiased w-full flex flex-col`}
      >
        <Nav />
        <Provider>
          <div className="flex w-full flex-col items-center pb-12 bg-[#f5fcff]">
            {children}
          </div>
        </Provider>
        <HomeFooter />
      </body>
    </html>
  );
}
