// Data dummy untuk Smart Mobility & Traffic
export interface TrafficData {
  id: string;
  roadName: string;
  latitude: number;
  longitude: number;
  congestionLevel: "Lancar" | "Normal" | "Padat" | "Macet";
  averageSpeed: number;
  density: number; // 0-100
  timestamp: Date;
}

export interface TransportOption {
  id: string;
  name: string;
  type: "Publik" | "Pribadi" | "Micro";
  description: string;
  color: string;
  activeVehicles: number;
  waitingTime: number; // dalam menit
}

export const trafficData: TrafficData[] = [
  {
    id: "jalan-001",
    roadName: "Jl. Panjunan Kidul",
    latitude: -6.8149,
    longitude: 110.8385,
    congestionLevel: "Lancar",
    averageSpeed: 50,
    density: 25,
    timestamp: new Date(),
  },
  {
    id: "jalan-002",
    roadName: "Jl. Kudus - Jepara (Ploso)",
    latitude: -6.8189,
    longitude: 110.8329,
    congestionLevel: "Padat",
    averageSpeed: 20,
    density: 75,
    timestamp: new Date(),
  },
  {
    id: "jalan-003",
    roadName: "Jl. Wergu Wetan Raya",
    latitude: -6.8161073,
    longitude: 110.8479782,
    congestionLevel: "Normal",
    averageSpeed: 35,
    density: 45,
    timestamp: new Date(),
  },
  {
    id: "jalan-004",
    roadName: "Jl. Getas Pejaten",
    latitude: -6.8237,
    longitude: 110.8389,
    congestionLevel: "Macet",
    averageSpeed: 10,
    density: 90,
    timestamp: new Date(),
  },
  {
    id: "jalan-005",
    roadName: "Jl. Sunan Kudus (Pusat Kota)",
    latitude: -6.8048,
    longitude: 110.8405,
    congestionLevel: "Normal",
    averageSpeed: 40,
    density: 50,
    timestamp: new Date(),
  },
  {
    id: "jalan-006",
    roadName: "Jl. Kudus - Purwodadi",
    latitude: -6.812,
    longitude: 110.845,
    congestionLevel: "Lancar",
    averageSpeed: 55,
    density: 20,
    timestamp: new Date(),
  },
];

export const transportOptions: TransportOption[] = [
  {
    id: "bus-001",
    name: "Bus Kota Sentrakudus",
    type: "Publik",
    description: "Layanan bus umum dengan rute tetap di seluruh kota",
    color: "bg-blue-500",
    activeVehicles: 45,
    waitingTime: 5,
  },
  {
    id: "angkot-001",
    name: "Angkutan Kota",
    type: "Publik",
    description: "Transportasi public dengan rute fleksibel",
    color: "bg-cyan-500",
    activeVehicles: 120,
    waitingTime: 3,
  },
  {
    id: "ojek-001",
    name: "Ojek Online",
    type: "Micro",
    description: "Layanan ojek dengan aplikasi mobile",
    color: "bg-orange-500",
    activeVehicles: 200,
    waitingTime: 2,
  },
  {
    id: "taxi-001",
    name: "Taksi Resmi",
    type: "Pribadi",
    description: "Layanan taksi dengan standar internasional",
    color: "bg-yellow-400",
    activeVehicles: 80,
    waitingTime: 4,
  },
  {
    id: "bike-001",
    name: "Bike Sharing",
    type: "Micro",
    description: "Sepeda berbagi untuk mobilitas terakhir",
    color: "bg-green-500",
    activeVehicles: 150,
    waitingTime: 1,
  },
];

export const getCongestionColor = (
  level: TrafficData["congestionLevel"]
): string => {
  switch (level) {
    case "Lancar":
      return "text-green-500";
    case "Normal":
      return "text-blue-500";
    case "Padat":
      return "text-orange-500";
    case "Macet":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export const getCongestionBgColor = (
  level: TrafficData["congestionLevel"]
): string => {
  switch (level) {
    case "Lancar":
      return "bg-green-100";
    case "Normal":
      return "bg-blue-100";
    case "Padat":
      return "bg-orange-100";
    case "Macet":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
};
