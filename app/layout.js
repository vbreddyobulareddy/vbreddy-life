import "./globals.css";
import ProfileNav from "./_components/navs/profileNav";
import ContextEntityProvider from "./context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-[#fff] dark:text-[#121c24] h-screen">
        <ContextEntityProvider>
          <ProfileNav></ProfileNav>
          {children}
        </ContextEntityProvider>
      </body>
    </html>
  );
}
