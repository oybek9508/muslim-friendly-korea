import { FaMosque } from "react-icons/fa";

export interface Mosque {
  name: string;
  description: string;
}

export interface ProvinceMosqueData {
  province: string;
  overview: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColorCode: string;
  mosques: Mosque[];
}

export const mosquesByProvince: ProvinceMosqueData[] = [
  {
    province: "Seoul",
    overview:
      "Discover the heart of South Korea's Islamic community with mosques like the Seoul Central Mosque, a hub for worship and cultural exchange.",
    icon: FaMosque,
    iconColorCode: "#10B981",
    mosques: [
      {
        name: "Seoul Central Mosque",
        // location: "서울특별시 영등포구 신길로60다길 21",
        // phoneNo: "010-9892-1197",
        description:
          "The main and largest mosque in South Korea, located in Itaewon.",
      },
    ],
  },
  {
    province: "Busan",
    overview:
      "Busan offers a welcoming environment for Muslims with mosques like the Busan Mosque, catering to the needs of the local and international community.",
    icon: FaMosque,
    iconColorCode: "#EF4444",
    mosques: [
      {
        name: "Busan Mosque",
        description:
          "Serving the Muslim community in South Korea’s largest port city.",
      },
    ],
  },
  {
    province: "Incheon",
    overview:
      "Incheon, home to a vibrant Muslim community, features mosques like Incheon Masjid, which serves travelers and locals near the international airport.",
    icon: FaMosque,
    iconColorCode: "#3B82F6",
    mosques: [
      {
        name: "Incheon Masjid",
        description:
          "Welcomes travelers and locals near the international airport.",
      },
    ],
  },
  {
    province: "Daegu",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#8B5CF6",
    mosques: [
      {
        name: "Daegu Islamic Center",
        description:
          "A hub for Islamic learning and prayer in the southeastern region.",
      },
    ],
  },
  {
    province: "Gwangju",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#F97316",
    mosques: [
      {
        name: "Gwangju Masjid",
        description:
          "A growing mosque catering to the Muslim community in the southwestern city.",
      },
    ],
  },
  {
    province: "Daejeon",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#F59E0B",
    mosques: [
      {
        name: "Daejeon Mosque",
        description:
          "Located in the heart of the city, providing space for prayer and community events.",
      },
    ],
  },
  {
    province: "Ulsan",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#14B8A6",
    mosques: [
      {
        name: "Ulsan Islamic Center",
        description:
          "Serving the Muslim community in South Korea’s industrial hub.",
      },
    ],
  },
  {
    province: "Sejong",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#6B7280",
    mosques: [
      {
        name: "Sejong Masjid",
        description:
          "A mosque in the administrative capital of South Korea, facilitating prayer and cultural exchange.",
      },
    ],
  },
  {
    province: "Jeju",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#F472B6",
    mosques: [
      {
        name: "Jeju Island Mosque",
        description:
          "The only mosque on the beautiful island of Jeju, welcoming both locals and tourists.",
      },
    ],
  },
  {
    province: "Gyeonggi-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#30D5C8",
    mosques: [
      {
        name: "Gyeonggi Masjid",
        description:
          "Serving the greater Seoul area, catering to the diverse Muslim community in Gyeonggi.",
      },
    ],
  },
  {
    province: "Gangwon-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#6D4C41",
    mosques: [
      {
        name: "Gangwon Masjid",
        description:
          "A smaller mosque in the northeastern region of South Korea, welcoming locals and visitors.",
      },
    ],
  },
  {
    province: "Chungcheongbuk-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#10B981",
    mosques: [
      {
        name: "Chungcheongbuk Masjid",
        description:
          "Located in the central part of South Korea, this mosque provides prayer and community activities.",
      },
    ],
  },
  {
    province: "Chungcheongnam-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#8B5CF6",
    mosques: [
      {
        name: "Chungcheongnam Masjid",
        description:
          "Located in the west of South Korea, this mosque is a hub for worship and community engagement.",
      },
    ],
  },
  {
    province: "Jeollabuk-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#F97316",
    mosques: [
      {
        name: "Jeollabuk Masjid",
        description:
          "Located in the Jeolla region, providing spiritual services to the local Muslim population.",
      },
    ],
  },
  {
    province: "Jeollanam-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#F472B6",
    mosques: [
      {
        name: "Jeollanam Masjid",
        description:
          "Serving the southern part of the country, offering prayer space and community activities.",
      },
    ],
  },
  {
    province: "Gyeongsangbuk-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#6D4C41",
    mosques: [
      {
        name: "Gyeongsangbuk Masjid",
        description:
          "Located in the northeastern region, providing prayer services for the local Muslim community.",
      },
    ],
  },
  {
    province: "Gyeongsangnam-do",
    overview:
      "Daegu's Islamic Center is a prominent place for worship and learning in the southeastern region, contributing to the area's religious diversity.",
    icon: FaMosque,
    iconColorCode: "#34D399",
    mosques: [
      {
        name: "Gyeongsangnam Masjid",
        description:
          "A mosque serving the southern region of South Korea, helping foster a sense of community.",
      },
    ],
  },
];
