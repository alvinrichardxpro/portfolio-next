import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faNetworkWired, faShieldHalved, faChartLine } from "@fortawesome/free-solid-svg-icons";

export type BulletItem = string;

export type SkillGroup = {
  title: string;
  icon: IconDefinition;
  points: BulletItem[];
};

export type Certification = {
  badge: string;
  title: string;
  score: string;
  publisher: string;
  date: string;
  points: BulletItem[];
  pdfUrl: string;
};

export const profile = {
  name: "Alvin Richard Hidayat Aras",
  school: "SMK Informatika Pesat",
  major: "Teknik Komputer dan Jaringan (TKJ)",
  summary:
    "Berfokus pada infrastruktur jaringan, administrasi sistem Linux, serta pemantauan jaringan menggunakan MikroTik, Cisco, dan Zabbix.",
};

export const focusPoints: BulletItem[] = [
  "Desain & instalasi LAN / WLAN untuk kebutuhan small office dan sekolah",
  "Konfigurasi VLAN, subnetting, routing statis & dinamis (OSPF, RIP, BGP)",
  "Administrasi Linux server & monitoring jaringan dengan Zabbix dan Winbox",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Network Infrastructure",
    icon: faNetworkWired,
    points: [
      "Desain topologi LAN, MAN, dan WAN",
      "VLAN segmentation & encapsulation (802.1Q)",
      "Subnetting IPv4 dan perencanaan IP addressing",
      "Routing intra-AS & inter-AS dengan routing policy",
    ],
  },
  {
    title: "System & Security",
    icon: faShieldHalved,
    points: [
      "Instalasi & administrasi Ubuntu Server",
      "Konfigurasi firewall dasar, ACL, dan port security",
      "Implementasi QoS untuk prioritas trafik",
      "File & printer sharing antar komputer",
    ],
  },
  {
    title: "Monitoring & Tools",
    icon: faChartLine,
    points: [
      "Monitoring dengan MikroTik Winbox & Zabbix",
      "Cable crimping & troubleshooting fisik jaringan",
      "Dokumentasi topologi & analisis kebutuhan jaringan",
      "Web dasar dengan Next.js & Tailwind CSS",
    ],
  },
];

export const certifications: Certification[] = [
  {
    badge: "Official Certificate of Competence",
    title:
      "Administrator Linux",
    score: "Competent",
    publisher: "Asnet",
    date: "Juni 2026",
    points: [
      "Analisis Konfigurasi Jaringan & Server",
      "Konfigurasi Web Server & DNS Server",
      "Konfigurasi Database Server",
      "Konfigurasi Client & Server Monitoring",
      "Laporan Hasil Project & Penyusunan Modul",
    ],
    pdfUrl: "/sertifikat-asnet.pdf",
  },
  {
    badge: "Official Certificate of Competence",
    title:
      "Interkoneksi Antar Autonomous System (AS)",
    score: "Competent",
    publisher: "PT Qelopak Teknologi Indonesia",
    date: "Des 2025",
    points: [
      "Analisis Kebutuhan Jaringan & Topologi",
      "Implementasi VLAN & Enkapsulasi",
      "Routing Intra-AS & Routing Antar-AS",
      "Routing Policy & Pemilihan Jalur BGP",
      "QoS, Port Security, & ACL",
      "Pengujian Jaringan & Dokumentasi",
    ],
    pdfUrl: "/sertifikat-qelopak.pdf",
  },
  {
    badge: "Official Certificate of Competence",
    title: "Pengembangan Infrastruktur Digital",
    score: "Competent",
    publisher: "PT Ginvo Studio",
    date: "Juni 2025",
    points: [
      "Desain Topologi LAN, MAN & WAN",
      "Segmentasi VLAN & Perencanaan Pengalamatan IP",
      "Implementasi Routing Policy",
      "Monitoring Jaringan dengan Winbox & Ubuntu Server",
      "Troubleshooting & Dokumentasi Akhir",
    ],
    pdfUrl: "/sertifikat-ginvostudio.pdf",
  },
  {
    badge: "Official Certificate of Competence",
    title: "Instalasi & Setup Jaringan",
    score: "Competent",
    publisher: "Kreasi Media",
    date: "Des 2024",
    points: [
      "Survei LAN / WLAN & Penempatan Access Point",
      "Crimping Kabel UTP & Pengujian Konektivitas",
      "Konfigurasi SSID & Keamanan Wireless Dasar",
      "Konfigurasi File & Printer Sharing",
      "Dokumentasi Instalasi & Serah Terima",
    ],
    pdfUrl: "/sertifikat-kreasimedia.pdf",
  },
];
