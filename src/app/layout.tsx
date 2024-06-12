// "use client";

// import React, { useState, useEffect } from "react";
// import { Inter } from "next/font/google";
// import { usePathname } from "next/navigation";
// import "./globals.css";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer";
// import MainPageHeader from "@/components/Header/MainPageHeader";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [sidebarWidth, setSidebarWidth] = useState<string>("50px");
//   const [showSidebar, setShowSidebar] = useState<boolean>(true);
//   const pathname = usePathname();

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth >= 1024) {
//         setSidebarWidth("250px");
//       } else if (window.innerWidth >= 768) {
//         setSidebarWidth("58px");
//       } else {
//         setSidebarWidth("0px");
//       }
//     }

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (pathname === "/" || pathname === "/admin") {
//       setShowSidebar(false);
//     } else {
//       setShowSidebar(true);
//     }
//   }, [pathname]);

//   return (
//     <html lang="en" className="h-full">
//       <body className={`h-full overflow-hidden ${inter.className}`}>
//         {showSidebar && (
//           <div className="hidden sm:block fixed top-0 left-0 h-full z-10">
//             <Sidebar />
//           </div>
//         )}
//         <div className={`pl-${showSidebar ? `[0px] sm:pl-[58px] md:pl-[58px] lg:pl-sidebar-lg` : '0px'} flex flex-col w-full`}>
//           <div
//             className="fixed top-0 z-20"
//             style={{
//               width: `calc(100% - ${showSidebar ? sidebarWidth : '0px'})`,
//             }}
//           >
//             {(pathname === "/" || pathname === "/admin") ? <MainPageHeader /> : <Header />}
//           </div>
//           <main className="flex-grow overflow-auto pt-header p-4">
//             {children}
//           </main>
//           <footer className="block sm:hidden">
//             <Footer />
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MainPageHeader from "@/components/Header/MainPageHeader";

// Inter fontの利用例です。実際のプロジェクトの設定に応じて調整してください。
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full overflow-hidden ${inter.className}`}>
        <div className={`pl-0 flex flex-col w-full`}>
          <MainPageHeader />
          <main className="flex-grow overflow-auto  p-4">{children}</main>
          <footer className="block sm:hidden">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
