"use client";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/HeroSection";
import province from "../data/provinces.json";
import masjids from "../data/masjids.json";
import halalEatings from "../data/halalEatings.json";
import TopDestinationsSection from "../components/section/TopDestionationsSection";
import ValueProps from "../components/ValueProps";
import CallToAction from "../components/section/CallToAction";

console.log("province", province);

const provinceData = province.map((data) => ({
  id: data.provinceId,
  name: data.provinceName,
  description: data.overview,
  imageUrl: data.image,
}));

const masjidData = masjids.map((data) => ({
  id: data.id,
  name: data.name,
  description: data.description,
  imageUrl: data.images[0],
}));

const halalEatingsData = halalEatings.map((data) => ({
  id: data.id,
  name: data.name,
  description: data.description,
  imageUrl: data.images[0],
}));

const Page = () => {
  return (
    <PageWrapper scroll={false}>
      <MainLayout>
        <HeroSection />
        <main className="p-4">
          <TopDestinationsSection
            title="Top Destionations"
            viewAllLink="provinces"
            data={provinceData}
          />
          <TopDestinationsSection
            title="Featured Masjids"
            viewAllLink="masjids"
            data={masjidData}
          />
          <TopDestinationsSection
            title="Popular Halal Dinings"
            viewAllLink="halal-eatings"
            data={halalEatingsData}
          />
          <ValueProps />
          <CallToAction />
        </main>
      </MainLayout>
    </PageWrapper>
  );
};

export default Page;
