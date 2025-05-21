export const masjidStructure = {
  provinceId: "seoul",
  provinceName: "Seoul",
  overview:
    "Discover the heart of South Korea's Islamic community with mosques like the Seoul Central Mosque, a hub for worship and cultural exchange.",
  icon: "FaMosque",
  iconColorCode: "#10B981",
  masjids: [
    {
      id: "seoul-central-mosque",
      name: "Seoul Central Mosque",
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
};
