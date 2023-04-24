import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
// import Modal from "./components/modals/Modal";
// import Modal from "./components/modals/modal";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone built with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {/* <Modal
            secondaryActionLabel="Cancel"
            actionLabel="Submit"
            title="Login Forms"
            isOpen
          /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
