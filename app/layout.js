import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Nav from "../components/home/nav";
import Announcement from "@/components/home/announcement";
import Footer from "@/components/home/footer";

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
        className={`${plusJakarta.className} antialiased w-full flex flex-col`}
      >
        <Nav />
        <Provider>
          <div className="flex w-full flex-col items-center pb-12">
            <div className="container flex flex-col">
              <div className="grid grid-cols-4 mt-6 gap-10">
                <div className="col-span-3">{children}</div>
                <Announcement />
              </div>
            </div>
          </div>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
