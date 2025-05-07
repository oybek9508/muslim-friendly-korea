"use client";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import MainLayout from "../components/layout/MainLayout";

const Page = () => {
  return (
    <PageWrapper scroll={false}>
      <MainLayout>
        <main className="p-4"></main>
      </MainLayout>
    </PageWrapper>
  );
};

export default Page;
