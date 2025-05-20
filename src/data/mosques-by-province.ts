import { FaMosque } from "react-icons/fa";

export interface Mosque {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  address: MosqueAddress;
  contact: MosqueContact;
  facilities: MosqueFacilities;
  services: string[];
  languagesSpoken: string[];
  imam: mosqueImam;
  images: string[];
  socialMedia: mosqueSocialMedia;
  verified: boolean;
  lastUpdated: string;
}

interface MosqueAddress {
  street: string;
  city: string;
  postalCode: string;
  district: string;
  latitude: number;
  longitude: number;
}

interface MosqueContact {
  phone: string;
  email: string;
  website: string;
}

interface MosqueFacilities {
  prayerRooms: boolean;
  wuduFacilities: boolean;
  parking: boolean;
  womenArea: boolean;
  library: boolean;
  halalRestaurantNearby: boolean;
}

interface mosqueImam {
  name: string;
  languages: string[];
}

interface mosqueSocialMedia {
  facebook?: string;
  instagram?: string;
}
export interface ProvinceMosqueData {
  provinceId: string;
  provinceName: string;
  overview: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColorCode: string;
  mosques: Mosque[];
}

export const mosquesByProvince: ProvinceMosqueData[] = [
  {
    provinceId: "seoul",
    provinceName: "Seoul",
    overview:
      "Discover the heart of South Korea's Islamic community with mosques like the Seoul Central Mosque, a hub for worship and cultural exchange.",
    icon: FaMosque,
    iconColorCode: "#10B981",
    mosques: [
      {
        id: "seoul-central-mosque",
        name: "Seoul Central Mosque",
        tags: [
          "prayer",
          "halal food nearby",
          "women's area",
          "Quran classes",
          "parking",
        ],
        description:
          "The main and largest mosque in South Korea, located in Itaewon.",
        address: {
          street: "39 Usadan-ro 10-gil, Yongsan-gu",
          city: "Seoul",
          postalCode: "04408",
          district: "Yongsan-gu",
          latitude: 37.541,
          longitude: 126.986,
        },
        contact: {
          phone: "+82-2-793-6908",
          email: "info@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Quran Classes",
          "Islamic Lectures",
          "Ramadan Iftar",
          "Marriage Services",
          "Funeral Services",
        ],
        languagesSpoken: ["Korean", "English", "Arabic", "Urdu"],
        imam: {
          name: "Imam Abdul Rahman Lee",
          languages: ["Korean", "Arabic", "English"],
        },
        images: [
          "https://example.com/images/seoul-mosque1.jpg",
          "https://example.com/images/seoul-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/seoulmosque",
          instagram: "https://instagram.com/seoulcentralmosque",
        },
        verified: true,
        lastUpdated: "2025-05-19T15:00:00Z",
      },
    ],
  },
  {
    provinceId: "busan",
    provinceName: "Busan",
    overview:
      "Busan offers a welcoming environment for Muslims with mosques like the Busan Mosque, catering to the needs of the local and international community.",
    icon: FaMosque,
    iconColorCode: "#EF4444",
    mosques: [
      {
        id: "busan-mosque",
        name: "Busan Mosque",
        description:
          "Serving the Muslim community in South Korea’s largest port city.",
        address: {
          street: "30-1 Namsan-dong, Geumjeong-gu",
          city: "Busan",
          postalCode: "46222",
          district: "Geumjeong-gu",
          latitude: 35.2325,
          longitude: 129.0892,
        },
        contact: {
          phone: "+82-51-518-9991",
          email: "busanmosque@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Islamic Lectures",
          "Ramadan Iftar",
        ],
        languagesSpoken: ["Korean", "English", "Arabic", "Urdu"],
        imam: {
          name: "Imam Muhammad Yunus",
          languages: ["Korean", "Arabic", "English"],
        },
        images: [
          "https://example.com/images/busan-mosque1.jpg",
          "https://example.com/images/busan-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/busanmosque",
          instagram: "https://instagram.com/busanmosque",
        },
        verified: true,
        lastUpdated: "2025-05-20T12:00:00Z",
      },
    ],
  },
  {
    provinceId: "incheon",
    provinceName: "Incheon",
    overview:
      "Incheon, home to a vibrant Muslim community, features mosques like Incheon Masjid, which serves travelers and locals near the international airport.",
    icon: FaMosque,
    iconColorCode: "#3B82F6",
    mosques: [
      {
        id: "incheon-masjid",
        name: "Incheon Masjid",
        description:
          "Welcomes travelers and locals near the international airport.",
        address: {
          street: "305-8 Unseo-dong, Jung-gu",
          city: "Incheon",
          postalCode: "22371",
          district: "Jung-gu",
          latitude: 37.4939,
          longitude: 126.4931,
        },
        contact: {
          phone: "+82-32-743-1234",
          email: "incheonmasjid@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: false,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Ramadan Iftar",
          "Traveler Assistance",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Farooq Khan",
          languages: ["English", "Arabic", "Korean"],
        },
        images: [
          "https://example.com/images/incheon-masjid1.jpg",
          "https://example.com/images/incheon-masjid2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/incheonmasjid",
          instagram: "https://instagram.com/incheonmasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T12:00:00Z",
      },
    ],
  },

  {
    provinceId: "daegu",
    provinceName: "Daegu",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#8B5CF6",
    mosques: [
      {
        id: "daegu-islamic-center",
        name: "Daegu Islamic Center",
        description:
          "A hub for Islamic learning and prayer in the southeastern region.",
        address: {
          street: "19-2 Daemyeong-ro 12-gil, Nam-gu",
          city: "Daegu",
          postalCode: "42476",
          district: "Nam-gu",
          latitude: 35.8418,
          longitude: 128.5937,
        },
        contact: {
          phone: "+82-53-627-4747",
          email: "daeguislamiccenter@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: true,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Quran Classes",
          "Islamic Lectures",
          "Community Gatherings",
          "Ramadan Iftar",
        ],
        languagesSpoken: ["Korean", "English", "Arabic", "Bengali"],
        imam: {
          name: "Imam Hassan Uddin",
          languages: ["Arabic", "Bengali", "English", "Korean"],
        },
        images: [
          "https://example.com/images/daegu-mosque1.jpg",
          "https://example.com/images/daegu-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/daeguislamiccenter",
          instagram: "https://instagram.com/daeguislamiccenter",
        },
        verified: true,
        lastUpdated: "2025-05-20T12:00:00Z",
      },
    ],
  },

  {
    provinceId: "gwangju",
    provinceName: "Gwangju",
    overview:
      "Gwangju Masjid is a growing place of worship catering to the Muslim community in the southwestern city, promoting interfaith understanding and cultural diversity.",
    icon: FaMosque,
    iconColorCode: "#F97316",
    mosques: [
      {
        id: "gwangju-masjid",
        name: "Gwangju Masjid",
        description:
          "A growing mosque catering to the Muslim community in the southwestern city.",
        address: {
          street: "16-1 Songjeong-dong, Gwangsan-gu",
          city: "Gwangju",
          postalCode: "62414",
          district: "Gwangsan-gu",
          latitude: 35.1398,
          longitude: 126.7934,
        },
        contact: {
          phone: "+82-62-952-7330",
          email: "gwangjumasjid@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: false,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Quran Study Circles",
          "Community Events",
          "Ramadan Iftar",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Mohammad Anwar",
          languages: ["Arabic", "English", "Korean"],
        },
        images: [
          "https://example.com/images/gwangju-mosque1.jpg",
          "https://example.com/images/gwangju-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/gwangjumasjid",
          instagram: "https://instagram.com/gwangjumasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T13:00:00Z",
      },
    ],
  },

  {
    provinceId: "daejeon",
    provinceName: "Daejeon",
    overview:
      "Daejeon Mosque serves as a vital center for Muslims in the central region of South Korea, offering prayer facilities and cultural programs to the local and international community.",
    icon: FaMosque,
    iconColorCode: "#F59E0B",
    mosques: [
      {
        id: "daejeon-mosque",
        name: "Daejeon Mosque",
        description:
          "Located in the heart of the city, providing space for prayer and community events.",
        address: {
          street: "46-7 Munhwa-ro, Jung-gu",
          city: "Daejeon",
          postalCode: "34920",
          district: "Jung-gu",
          latitude: 36.3274,
          longitude: 127.4277,
        },
        contact: {
          phone: "+82-42-256-5753",
          email: "daejeonmasjid@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Islamic Classes",
          "Community Gatherings",
          "Ramadan Iftar",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Tariq Mahmood",
          languages: ["English", "Urdu", "Korean"],
        },
        images: [
          "https://example.com/images/daejeon-mosque1.jpg",
          "https://example.com/images/daejeon-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/daejeonmosque",
          instagram: "https://instagram.com/daejeonmasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T13:30:00Z",
      },
    ],
  },

  {
    provinceId: "ulsan",
    provinceName: "Ulsan",
    overview:
      "Ulsan Islamic Center supports the growing Muslim population in South Korea’s major industrial city, offering religious services, cultural education, and a welcoming space for worship.",
    icon: FaMosque,
    iconColorCode: "#14B8A6",
    mosques: [
      {
        id: "ulsan-islamic-center",
        name: "Ulsan Islamic Center",
        description:
          "Serving the Muslim community in South Korea’s industrial hub.",
        address: {
          street: "53-1 Namseo-ro, Nam-gu",
          city: "Ulsan",
          postalCode: "44716",
          district: "Nam-gu",
          latitude: 35.5384,
          longitude: 129.3114,
        },
        contact: {
          phone: "+82-52-227-3266",
          email: "ulsanmasjid@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Islamic Education",
          "Community Events",
          "Ramadan Iftar",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Muhammad Fahad",
          languages: ["Arabic", "English", "Korean"],
        },
        images: [
          "https://example.com/images/ulsan-mosque1.jpg",
          "https://example.com/images/ulsan-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/ulsanislamiccenter",
          instagram: "https://instagram.com/ulsanmasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T14:00:00Z",
      },
    ],
  },

  {
    provinceId: "sejong",
    provinceName: "Sejong",
    overview:
      "Sejong, South Korea’s administrative capital, is home to a small but active Muslim community, centered around Sejong Masjid which supports both worship and cultural exchange.",
    icon: FaMosque,
    iconColorCode: "#6B7280",
    mosques: [
      {
        id: "sejong-masjid",
        name: "Sejong Masjid",
        description:
          "A mosque in the administrative capital of South Korea, facilitating prayer and cultural exchange.",
        address: {
          street: "1260-3 Jochiwon-eup, Sejong City",
          city: "Sejong",
          postalCode: "30015",
          district: "Jochiwon-eup",
          latitude: 36.5947,
          longitude: 127.2964,
        },
        contact: {
          phone: "+82-44-865-1100",
          email: "sejongmasjid@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Cultural Events",
          "Islamic Studies",
          "Community Gatherings",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Ismail Hossain",
          languages: ["English", "Korean", "Arabic"],
        },
        images: [
          "https://example.com/images/sejong-mosque1.jpg",
          "https://example.com/images/sejong-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/sejongmasjid",
          instagram: "https://instagram.com/sejongmasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "jeju",
    provinceName: "Jeju",
    overview:
      "Jeju Island, a popular tourist destination, also offers a place of spiritual refuge for Muslims through the Jeju Island Mosque, which welcomes both residents and travelers.",
    icon: FaMosque,
    iconColorCode: "#F472B6",
    mosques: [
      {
        id: "jeju-island-mosque",
        name: "Jeju Island Mosque",
        description:
          "The only mosque on the beautiful island of Jeju, welcoming both locals and tourists.",
        address: {
          street: "123 Jeju-daero, Jeju City",
          city: "Jeju",
          postalCode: "63100",
          district: "Jeju-si",
          latitude: 33.4996,
          longitude: 126.5312,
        },
        contact: {
          phone: "+82-64-123-4567",
          email: "jejumosque@koreaislam.org",
          website: "https://www.koreaislam.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: false,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Tourist Assistance",
          "Islamic Information",
          "Community Events",
        ],
        languagesSpoken: ["Korean", "English", "Arabic"],
        imam: {
          name: "Imam Yusuf Khan",
          languages: ["English", "Arabic", "Korean"],
        },
        images: [
          "https://example.com/images/jeju-mosque1.jpg",
          "https://example.com/images/jeju-mosque2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/jejumosque",
          instagram: "https://instagram.com/jeju.island.mosque",
        },
        verified: true,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "gyeonggi-do",
    provinceName: "Gyeonggi-do",
    overview:
      "Gyeonggi-do surrounds Seoul and is home to a diverse Muslim community, supported by mosques like Gyeonggi Masjid that serve both locals and visitors.",
    icon: FaMosque,
    iconColorCode: "#30D5C8",
    mosques: [
      {
        id: "gyeonggi-masjid",
        name: "Gyeonggi Masjid",
        description:
          "Serving the greater Seoul area, catering to the diverse Muslim community in Gyeonggi.",
        address: {
          street: "45 Gyeonggi-daero, Suwon-si",
          city: "Suwon",
          postalCode: "16499",
          district: "Suwon-si",
          latitude: 37.2636,
          longitude: 127.0286,
        },
        contact: {
          phone: "+82-31-123-4567",
          email: "info@gyeonggimasjid.org",
          website: "https://www.gyeonggimasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: true,
          halalRestaurantNearby: true,
        },
        services: [
          "Jummah (Friday) Prayer",
          "Daily Prayers",
          "Quran Classes",
          "Islamic Lectures",
          "Community Gatherings",
        ],
        languagesSpoken: ["Korean", "English", "Arabic", "Urdu"],
        imam: {
          name: "Imam Ahmed Kim",
          languages: ["Korean", "Arabic", "English"],
        },
        images: [
          "https://example.com/images/gyeonggi-masjid1.jpg",
          "https://example.com/images/gyeonggi-masjid2.jpg",
        ],
        socialMedia: {
          facebook: "https://facebook.com/gyeonggimasjid",
          instagram: "https://instagram.com/gyeonggimasjid",
        },
        verified: true,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "gangwon-do",
    provinceName: "Gangwon-do",
    overview:
      "Gangwon-do, known for its natural beauty and mountains, hosts a welcoming Muslim community with mosques like Gangwon Masjid, serving locals and visitors alike.",
    icon: FaMosque,
    iconColorCode: "#6D4C41",
    mosques: [
      {
        id: "gangwon-masjid",
        name: "Gangwon Masjid",
        description:
          "A smaller mosque in the northeastern region of South Korea, welcoming locals and visitors.",
        address: {
          street: "22 Seorak-ro, Sokcho-si",
          city: "Sokcho",
          postalCode: "24738",
          district: "Sokcho-si",
          latitude: 38.2041,
          longitude: 128.5912,
        },
        contact: {
          phone: "+82-33-123-4567",
          email: "info@gangwonmasjid.org",
          website: "https://www.gangwonmasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: false,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: ["Daily Prayers", "Friday Prayer", "Community Events"],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Yusuf Lee",
          languages: ["Korean", "English"],
        },
        images: ["https://example.com/images/gangwon-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/gangwonmasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },
  {
    provinceId: "chungcheongbuk-do",
    provinceName: "Chungcheongbuk-do",
    overview:
      "Chungcheongbuk-do, located in the central region of South Korea, is home to a welcoming Muslim community with mosques like Chungcheongbuk Masjid, offering prayer spaces and community activities.",
    icon: FaMosque,
    iconColorCode: "#10B981",
    mosques: [
      {
        id: "chungcheongbuk-masjid",
        name: "Chungcheongbuk Masjid",
        description:
          "Located in the central part of South Korea, this mosque provides prayer and community activities.",
        address: {
          street: "15 Cheongwon-ro, Cheongju-si",
          city: "Cheongju",
          postalCode: "28644",
          district: "Cheongwon-gu",
          latitude: 36.6424,
          longitude: 127.4895,
        },
        contact: {
          phone: "+82-43-123-4567",
          email: "info@chungcheongbukmasjid.org",
          website: "https://www.chungcheongbukmasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Islamic Classes",
          "Community Events",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Muhammad Park",
          languages: ["Korean", "English"],
        },
        images: ["https://example.com/images/chungcheongbuk-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/chungcheongbukmasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "chungcheongnam-do",
    provinceName: "Chungcheongnam-do",
    overview:
      "Chungcheongnam-do, located in the western part of South Korea, is home to a vibrant Muslim community with mosques like Chungcheongnam Masjid, serving as hubs for worship and community engagement.",
    icon: FaMosque,
    iconColorCode: "#8B5CF6",
    mosques: [
      {
        id: "chungcheongnam-masjid",
        name: "Chungcheongnam Masjid",
        description:
          "Located in the west of South Korea, this mosque is a hub for worship and community engagement.",
        address: {
          street: "123 Daejeon-daero, Seosan-si",
          city: "Seosan",
          postalCode: "31900",
          district: "Seosan",
          latitude: 36.7765,
          longitude: 126.45,
        },
        contact: {
          phone: "+82-41-987-6543",
          email: "info@chungcheongnammasjid.org",
          website: "https://www.chungcheongnammasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Islamic Education",
          "Community Gatherings",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Hasan Kim",
          languages: ["Korean", "English"],
        },
        images: ["https://example.com/images/chungcheongnam-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/chungcheongnammasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "jeollabuk-do",
    provinceName: "Jeollabuk-do",
    overview:
      "Jeollabuk-do, in the southwestern part of South Korea, hosts mosques like Jeollabuk Masjid, offering spiritual services and community support to the local Muslim population.",
    icon: FaMosque,
    iconColorCode: "#F97316",
    mosques: [
      {
        id: "jeollabuk-masjid",
        name: "Jeollabuk Masjid",
        description:
          "Located in the Jeolla region, providing spiritual services to the local Muslim population.",
        address: {
          street: "45 Jeonju-ro, Wansan-gu",
          city: "Jeonju",
          postalCode: "560-123",
          district: "Wansan-gu",
          latitude: 35.8242,
          longitude: 127.148,
        },
        contact: {
          phone: "+82-63-123-4567",
          email: "info@jeollabukmasjid.org",
          website: "https://www.jeollabukmasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Quran Classes",
          "Community Events",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Yusuf Park",
          languages: ["Korean", "English", "Arabic"],
        },
        images: ["https://example.com/images/jeollabuk-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/jeollabukmasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "jeollanam-do",
    provinceName: "Jeollanam-do",
    overview:
      "Jeollanam-do, located in the southern part of South Korea, is home to mosques like Jeollanam Masjid, providing prayer space and community activities to the Muslim population.",
    icon: FaMosque,
    iconColorCode: "#F472B6",
    mosques: [
      {
        id: "jeollanam-masjid",
        name: "Jeollanam Masjid",
        description:
          "Serving the southern part of the country, offering prayer space and community activities.",
        address: {
          street: "12 Suncheon-ro, Suncheon-si",
          city: "Suncheon",
          postalCode: "57922",
          district: "Suncheon-si",
          latitude: 34.9497,
          longitude: 127.4875,
        },
        contact: {
          phone: "+82-61-123-4567",
          email: "info@jeollanammasjid.org",
          website: "https://www.jeollanammasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Islamic Classes",
          "Community Gatherings",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Ahmed Kim",
          languages: ["Korean", "English", "Arabic"],
        },
        images: ["https://example.com/images/jeollanam-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/jeollanammasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "gyeongsangbuk-do",
    provinceName: "Gyeongsangbuk-do",
    overview:
      "Gyeongsangbuk-do in the northeastern region of South Korea features Gyeongsangbuk Masjid, offering prayer services and supporting the local Muslim community.",
    icon: FaMosque,
    iconColorCode: "#6D4C41",
    mosques: [
      {
        id: "gyeongsangbuk-masjid",
        name: "Gyeongsangbuk Masjid",
        description:
          "Located in the northeastern region, providing prayer services for the local Muslim community.",
        address: {
          street: "45 Daegu-ro, Pohang-si",
          city: "Pohang",
          postalCode: "37660",
          district: "Pohang-si",
          latitude: 36.019,
          longitude: 129.3435,
        },
        contact: {
          phone: "+82-54-123-4567",
          email: "info@gyeongsangbukmasjid.org",
          website: "https://www.gyeongsangbukmasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: false,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Islamic Study Groups",
          "Community Support",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Yusuf Park",
          languages: ["Korean", "Arabic", "English"],
        },
        images: ["https://example.com/images/gyeongsangbuk-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/gyeongsangbukmasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },

  {
    provinceId: "gyeongsangnam-do",
    provinceName: "Gyeongsangnam-do",
    overview:
      "Gyeongsangnam-do, located in the southern region of South Korea, features Gyeongsangnam Masjid, fostering a strong sense of community among local Muslims.",
    icon: FaMosque,
    iconColorCode: "#34D399",
    mosques: [
      {
        id: "gyeongsangnam-masjid",
        name: "Gyeongsangnam Masjid",
        description:
          "A mosque serving the southern region of South Korea, helping foster a sense of community.",
        address: {
          street: "88 Jungang-ro, Changwon-si",
          city: "Changwon",
          postalCode: "51439",
          district: "Changwon-si",
          latitude: 35.2284,
          longitude: 128.6811,
        },
        contact: {
          phone: "+82-55-123-4567",
          email: "info@gyeongsangnammasjid.org",
          website: "https://www.gyeongsangnammasjid.org/",
        },
        facilities: {
          prayerRooms: true,
          wuduFacilities: true,
          parking: true,
          womenArea: true,
          library: false,
          halalRestaurantNearby: true,
        },
        services: [
          "Daily Prayers",
          "Friday Prayer",
          "Quran Classes",
          "Community Events",
        ],
        languagesSpoken: ["Korean", "English"],
        imam: {
          name: "Imam Ahmed Kim",
          languages: ["Korean", "Arabic", "English"],
        },
        images: ["https://example.com/images/gyeongsangnam-masjid1.jpg"],
        socialMedia: {
          facebook: "https://facebook.com/gyeongsangnammasjid",
        },
        verified: false,
        lastUpdated: "2025-05-20T15:00:00Z",
      },
    ],
  },
];
