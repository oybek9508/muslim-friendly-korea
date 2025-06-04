import Link from "next/link";
import ProvinceCard from "../card/ProvinceCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type Data = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type TopDestinationsSectionProps = {
  viewAllLink: string;
  title: string;
  data: Data[];
};

export default function TopDestinationsSection({
  viewAllLink,
  title,
  data,
}: TopDestinationsSectionProps) {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Link
          href={`/${viewAllLink}`}
          className="text-emerald-600 hover:underline flex items-center gap-1"
        >
          View All <span className="text-xl">→</span>
        </Link>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
        navigation
        className="!overflow-visible"
      >
        {data.map((item: Data) => (
          <SwiperSlide key={item.id}>
            <ProvinceCard
              name={item.name}
              imageUrl={item?.imageUrl}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
