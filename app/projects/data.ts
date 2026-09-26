export type Project = {
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  company: string;
  date: string;
  image?: string;
  tech: string[];
  overview: string[];
  points: string[];
  mediumUrl?: string;
  pdfUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "network-installation-setup",
    category: "Infrastructure",
    title: "Network Installation & Setup",
    shortDesc:
      "Instalasi & konfigurasi LAN/Wi-Fi untuk sekolah dan kantor kecil. Klik untuk membaca artikel lengkap.",
    company: "Kreasi Media",
    date: "Desember 2024",
    tech: ["Networking", "LAN", "WiFi"],
    overview: [
      "Proyek instalasi jaringan untuk kebutuhan sekolah dan kantor kecil, mencakup survei lokasi, penarikan kabel, dan konfigurasi perangkat access point.",
      "Fokus pada konektivitas yang stabil, kemudahan perawatan, dan dokumentasi sederhana agar bisa dikelola oleh staf non-teknis.",
    ],
    points: [
      "Survei kebutuhan & desain penempatan AP dan titik kabel",
      "Instalasi LAN/Wi-Fi, crimping kabel UTP, dan pengujian konektivitas",
      "Konfigurasi SSID, keamanan wireless dasar, dan file & printer sharing",
      "Dokumentasi instalasi dan panduan perawatan dasar",
    ],
    mediumUrl: "https://medium.com",
  },
  {
    slug: "Antar-as-interconnection-topology",
    category: "Infrastructure",
    title: "Antar-AS Interconnection Topology",
    shortDesc:
      "Arsitektur jaringan Antar-AS (AS 1000 & AS 2000) menggunakan routing OSPF, RIP, dan BGP serta segmentasi VLAN.",
    company: "PT Qelopak",
    date: "September 2025",
    image: "/topologi-network.png",
    tech: ["BGP", "OSPF", "RIP", "VLAN", "Packet Tracer"],
    overview: [
      "Desain dan implementasi interkoneksi dua Autonomous System (AS 1000 & AS 2000) dengan routing policy dan segmentasi VLAN.",
      "Menggabungkan routing interior (OSPF, RIP) dan exterior (BGP) beserta pengamanan QoS, port security, dan ACL.",
    ],
    points: [
      "Analisis kebutuhan & desain topologi VLAN intra / inter-AS",
      "Konfigurasi OSPF & RIP untuk routing internal, BGP untuk antar-AS",
      "Implementasi routing policy, path selection, dan encapsulation 802.1Q",
      "Penerapan QoS, port security, ACL, serta testing & dokumentasi",
    ],
    pdfUrl: "/sertifikat-qelopak.pdf",
  },
  {
    slug: "antar-as-topology-vlan-acl-port-security",
    category: "Infrastructure",
    title: "Antar-AS Topology — VLAN, ACL & Port Security ",
    shortDesc:
      "Implementasi detail ASN 60005 (EIGRP) & ASN 60006 (OSPF) dengan BGP antar-AS, VLAN 10/20/101/201, ACL, dan Port Security shutdown Fa0/1–Fa0/4.",
    company: "Independent Project",
    date: "September 2026",
    image: "/topologi-network1.png",
    tech: ["BGP", "OSPF", "EIGRP", "VLAN", "ACL", "Packet Tracer"],
    overview: [
      "Sisi kiri (ASN 60005, routing intra-AS EIGRP): Router A terhubung ke Switch A-1 yang melayani Server A-1 DNS-WWW (200.200.200.2) dan Server A-2 FTP (200.200.200.3), serta ke Switch A-2 yang memisahkan VLAN 10 (202.100.10.0/26, PC0–PC1) dan VLAN 20 (202.100.20.0/26, PC2–PC3). Router A terhubung ke Router B via 28.19.30.128/30.",
      "Sisi kanan (ASN 60006, routing intra-AS OSPF): Router C terhubung ke Router C(1) via 90.98.10.240/30, melayani Switch C-2(1) dengan VLAN 101 (202.110.10.0/26, PC4–PC5) dan VLAN 201 (202.110.20.0/26, PC6–PC7). Interkoneksi antar-AS memakai BGP antara Router B dan Router C via 88.76.90.64/30.",
    ],
    points: [
      "Segmentasi VLAN 10, 20 di ASN 60005 dan VLAN 101, 201 di ASN 60006 sesuai subnet pada gambar",
      "EIGRP di sisi Router A–B, OSPF di sisi Router C–C(1), dan BGP untuk routing antar-AS",
      "Aturan ACL: VLAN 10 & 101 tidak bisa akses web Server A, VLAN 20 & 201 tidak bisa akses FTP, VLAN 10 tidak bisa ping VLAN 201",
      "Port Security shutdown Fa0/1–Fa0/4 pada Switch A-2 dan Switch C-2(1) untuk hardening port akses",
      "Verifikasi konektivitas server DNS-WWW/FTP dan dokumentasi topologi di Packet Tracer",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type Experience = {
  title: string;
  company: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Inter-AS Interconnection Project",
    company: "PT Qelopak",
    date: "Desember 2025",
    points: [
      "Analisis kebutuhan & desain topologi VLAN dan routing intra / inter-AS",
      "Implementasi router, switch, dan firewall beserta routing policy",
      "Penerapan QoS dan ACL untuk keamanan dan prioritas trafik",
    ],
  },
  {
    title: "Digital Infrastructure Development Project",
    company: "PT Ginvo Studio",
    date: "June 2025",
    points: [
      "Merancang topologi LAN, MAN, dan WAN beserta segmentasi VLAN",
      "Menyusun routing policy dan skema pengalamatan IP",
      "Monitoring jaringan menggunakan Winbox dan Ubuntu Server",
    ],
  },
  {
    title: "Small Office Network Setup Project",
    company: "Kreasi Media",
    date: "Desember 2024",
    points: [
      "Desain LAN / WLAN untuk kebutuhan kantor kecil",
      "Crimping kabel UTP dan pengujian konektivitas fisik",
      "Konfigurasi file & printer sharing antar komputer",
    ],
  },
];
