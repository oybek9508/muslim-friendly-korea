"use client";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/HeroSection";

const Page = () => {
  return (
    <PageWrapper scroll={false}>
      <MainLayout>
        <HeroSection />
        <main className="p-4">
          <p>page</p>
          <p>page</p>
          <p>page</p>
        </main>
      </MainLayout>
    </PageWrapper>
  );
};

export default Page;
