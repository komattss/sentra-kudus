// Data dummy untuk monitoring kualitas udara
export interface AirQualityReading {
  id: string;
  location: string;
  latitude: number;
  longitude: number;
  aqi: number;
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
  so2: number;
  co: number;
  timestamp: Date;
  status: "Baik" | "Sedang" | "Tidak Sehat" | "Sangat Tidak Sehat";
}

export const airQualityData: AirQualityReading[] = [
  {
    id: "station-001",
    location: "Panjunan",
    latitude: -6.8149,
    longitude: 110.8385,
    aqi: 35,
    pm25: 12,
    pm10: 28,
    o3: 45,
    no2: 22,
    so2: 8,
    co: 0.5,
    timestamp: new Date(),
    status: "Baik",
  },
  {
    id: "station-002",
    location: "Ploso (Jati)",
    latitude: -6.8189,
    longitude: 110.8329,
    aqi: 87,
    pm25: 45,
    pm10: 92,
    o3: 65,
    no2: 55,
    so2: 24,
    co: 1.2,
    timestamp: new Date(),
    status: "Tidak Sehat",
  },
  {
    id: "station-003",
    location: "Wergu Wetan",
    latitude: -6.8161073,
    longitude: 110.8479782,
    aqi: 62,
    pm25: 28,
    pm10: 68,
    o3: 52,
    no2: 38,
    so2: 15,
    co: 0.8,
    timestamp: new Date(),
    status: "Sedang",
  },
  {
    id: "station-004",
    location: "Getas Pejaten (Jati)",
    latitude: -6.8237,
    longitude: 110.8389,
    aqi: 45,
    pm25: 18,
    pm10: 35,
    o3: 48,
    no2: 25,
    so2: 10,
    co: 0.6,
    timestamp: new Date(),
    status: "Baik",
  },
  {
    id: "station-005",
    location: "Kudus Kota (Pusat)",
    latitude: -6.8048,
    longitude: 110.8405,
    aqi: 28,
    pm25: 8,
    pm10: 18,
    o3: 38,
    no2: 15,
    so2: 5,
    co: 0.3,
    timestamp: new Date(),
    status: "Baik",
  },
];

export const getAQIStatus = (aqi: number): AirQualityReading["status"] => {
  if (aqi <= 50) return "Baik";
  if (aqi <= 100) return "Sedang";
  if (aqi <= 150) return "Tidak Sehat";
  return "Sangat Tidak Sehat";
};

export const getAQIColor = (status: AirQualityReading["status"]): string => {
  switch (status) {
    case "Baik":
      return "bg-green-500";
    case "Sedang":
      return "bg-yellow-500";
    case "Tidak Sehat":
      return "bg-red-500";
    case "Sangat Tidak Sehat":
      return "bg-purple-900";
    default:
      return "bg-gray-500";
  }
};
