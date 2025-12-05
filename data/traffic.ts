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

export interface TrafficIncident {
  id: string;
  type: "Kecelakaan" | "Perbaikan Jalan" | "Banjir" | "Event";
  location: string;
  description: string;
  severity: "Rendah" | "Sedang" | "Tinggi";
  timestamp: Date;
  estimatedClearance?: string;
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
  {
    id: "jalan-007",
    roadName: "Jl. Dr. Lukmono Hadi",
    latitude: -6.8173,
    longitude: 110.8375,
    congestionLevel: "Normal",
    averageSpeed: 38,
    density: 42,
    timestamp: new Date(),
  },
  {
    id: "jalan-008",
    roadName: "Jl. Jend. Ahmad Yani",
    latitude: -6.8149,
    longitude: 110.8385,
    congestionLevel: "Lancar",
    averageSpeed: 48,
    density: 30,
    timestamp: new Date(),
  },
  {
    id: "jalan-009",
    roadName: "Jl. Mayor Basuno",
    latitude: -6.8159,
    longitude: 110.8358,
    congestionLevel: "Padat",
    averageSpeed: 25,
    density: 68,
    timestamp: new Date(),
  },
  {
    id: "jalan-010",
    roadName: "Jl. KH Agus Salim",
    latitude: -6.8159,
    longitude: 110.8358,
    congestionLevel: "Normal",
    averageSpeed: 35,
    density: 48,
    timestamp: new Date(),
  },
  {
    id: "jalan-011",
    roadName: "Jl. Kyai Haji Wahid Hasyim",
    latitude: -6.8149,
    longitude: 110.8385,
    congestionLevel: "Lancar",
    averageSpeed: 45,
    density: 28,
    timestamp: new Date(),
  },
  {
    id: "jalan-012",
    roadName: "Jl. Johar",
    latitude: -6.8145,
    longitude: 110.8395,
    congestionLevel: "Normal",
    averageSpeed: 40,
    density: 45,
    timestamp: new Date(),
  },
  {
    id: "jalan-013",
    roadName: "Jl. Mangga",
    latitude: -6.8155,
    longitude: 110.8368,
    congestionLevel: "Lancar",
    averageSpeed: 50,
    density: 25,
    timestamp: new Date(),
  },
  {
    id: "jalan-014",
    roadName: "Jl. Nuri",
    latitude: -6.8162,
    longitude: 110.8378,
    congestionLevel: "Normal",
    averageSpeed: 42,
    density: 38,
    timestamp: new Date(),
  },
];

export const trafficIncidents: TrafficIncident[] = [
  {
    id: "inc-001",
    type: "Kecelakaan",
    location: "Jl. Getas Pejaten",
    description:
      "Kecelakaan ringan melibatkan 2 kendaraan di dekat simpang tiga",
    severity: "Sedang",
    timestamp: new Date(Date.now() - 30 * 60000), // 30 menit yang lalu
    estimatedClearance: "1 jam",
  },
  {
    id: "inc-002",
    type: "Perbaikan Jalan",
    location: "Jl. Kudus - Jepara (Ploso)",
    description: "Perbaikan jalan berlubang, lajur dikurangi menjadi 1",
    severity: "Tinggi",
    timestamp: new Date(Date.now() - 2 * 60 * 60000), // 2 jam yang lalu
    estimatedClearance: "3 hari",
  },
  {
    id: "inc-003",
    type: "Event",
    location: "Jl. Sunan Kudus (Pusat Kota)",
    description: "Acara pasar malam, jalan ditutup sebagian",
    severity: "Rendah",
    timestamp: new Date(Date.now() - 60 * 60000), // 1 jam yang lalu
    estimatedClearance: "Hingga pukul 22:00",
  },
  {
    id: "inc-004",
    type: "Kecelakaan",
    location: "Jl. Dr. Lukmono Hadi",
    description:
      "Kecelakaan tunggal motor terpeleset, penanganan sudah dilakukan",
    severity: "Rendah",
    timestamp: new Date(Date.now() - 45 * 60000), // 45 menit yang lalu
    estimatedClearance: "30 menit",
  },
  {
    id: "inc-005",
    type: "Perbaikan Jalan",
    location: "Jl. Wergu Wetan Raya",
    description: "Pemeliharaan drainase jalan, satu lajur ditutup sementara",
    severity: "Sedang",
    timestamp: new Date(Date.now() - 3 * 60 * 60000), // 3 jam yang lalu
    estimatedClearance: "2 hari",
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
