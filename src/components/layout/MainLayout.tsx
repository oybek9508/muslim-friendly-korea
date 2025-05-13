import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchMain from "../search/SearchMain";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />

      <main className="pt-[72px]">
        <SearchMain />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
