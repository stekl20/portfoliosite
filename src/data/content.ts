export const profile = {
  name: "alex_stekl",
  role: "music_label_ops && creative_operations",
  linkedin: "https://linkedin.com/in/alexstekl",
  email: "alxstekl@gmail.com",
  about: `Specializing in label and creative operations, with a passion for delivering impactful releases and designing effective workflows for the modern music industry. Comfortable working across both operational and technical teams to help bring the right tools and processes to life.`,
}

export type Tag = "marketing" | "pr" | "creative" | "ar" | "mgmt" | "label" | "ops" | "partnerships"

export interface Role {
  title: string
  start: string
  end: string
  duration: string
}

export interface Document {
  label: string
  src: string
}

export interface ExperienceEntry {
  id: string
  company: string
  url?: string
  preview?: string
  employmentType: string
  location: string
  roles: Role[]
  description: string
  bullets: string[]
  tags: Tag[]
  images?: string[]
  documents?: Document[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "prairy",
    company: "PRAIRY",
    url: "https://www.prairy.xyz",
    preview: "/previews/prairy.jpg",
    employmentType: "contract_full_time",
    location: "remote",
    roles: [
      { title: "label_ops_specialist",   start: "sep_2025", end: "present",  duration: "9_mos" },
      { title: "creative_coordinator",   start: "sep_2024", end: "sep_2025", duration: "1_yr_1_mo" },
    ],
    description: "",
    bullets: [
      "Owned the end-to-end release workflow — from finalizing audio and design assets through distribution — serving as primary point of contact across Stem, SoundOn, and Label Engine.",
      "Built internal tooling including a release scheduling tracker and a web app that generates playlist pitches and creative assets (Spotify canvases, YouTube art tracks) from release data via API.",
      "Managed external contractors for video editing and design; provided creative direction and ensured on-time delivery against release timelines.",
      "Coordinated creative asset delivery across artists, the internal team, and distribution partners ahead of release deadlines.",
      "Creative assets produced using a combination of generative AI tools and Photoshop — cover art, display pictures, and visual identity work.",
    ],
    tags: ["creative", "ops", "label"],
    images: [
      "/work/prairy/1778858175550-cold_boss_blues_nicole_cover.png",
      "/work/prairy/1778858201698-carlyle_bad_company.png",
      "/work/prairy/1779302091309-cupid_nyxon_cover.png",
      "/work/prairy/1779988760240-late_monday_pretty_girl_cover.png",
      "/work/prairy/1780524682740-enzo_ray_bday_girl_cover.png",
      "/work/prairy/brittaniboomdp 5.2.png",
      "/work/prairy/butterflies v2.png",
      "/work/prairy/carlyle finally free cover.png",
      "/work/prairy/carlyle lost and found1.png",
      "/work/prairy/cassie villa left on read cover v2.png",
      "/work/prairy/gone girl nyxon.png",
      "/work/prairy/had nothing yungdre.png",
      "/work/prairy/iwroteasongforudp.png",
      "/work/prairy/iwroteasongforudp1.png",
      "/work/prairy/lullaby cover 1.1 copy.png",
      "/work/prairy/machine gun cover idea2.png",
      "/work/prairy/machine gun cover idea3.png",
      "/work/prairy/nicole breeze dp 1.png",
      "/work/prairy/nyxon spin cover.png",
      "/work/prairy/nyxonreddresscover.png",
      "/work/prairy/silence after the crash track list black.png",
      "/work/prairy/sophinatonight1.png",
      "/work/prairy/study sloane dp 2.png",
      "/work/prairy/victoriassecret3.png",
      "/work/prairy/vyxie 13 reasons cover1.2 copy.png",
      "/work/prairy/waiting cover nicole breeze.png",
      "/work/prairy/yung dre right moves.png",
      "/work/prairy/2026-06-09 13.07.19.jpg",
      "/work/prairy/photo_2026-06-09 13.08.08.jpeg",
    ],
  },
  {
    id: "surely-work",
    company: "SURELY_WORK",
    url: "https://www.surelywork.com",
    preview: "/previews/surely-work.jpg",
    employmentType: "contract_part_time",
    location: "remote",
    roles: [
      { title: "marketing_&&_partnerships_manager", start: "jun_2023", end: "oct_2025", duration: "2_yrs_4_mos" },
    ],
    description: "Global creative network and jobs board for the entertainment industry.",
    bullets: [
      "Grew Instagram following and helped scale the platform to over 10,000 users through targeted content strategy.",
      "Established and maintained partnerships with agencies, labels, and production companies across the creative industry.",
      "Managed ongoing relationships with influential community members to drive collaboration and retention.",
    ],
    tags: ["marketing", "partnerships"],
  },
  {
    id: "orienteer",
    company: "ORIENTEER",
    url: "https://orienteer.us",
    preview: "/previews/orienteer.jpg",
    employmentType: "internship",
    location: "remote",
    roles: [
      { title: "publicity_intern", start: "jan_2024", end: "jun_2024", duration: "6_mos" },
    ],
    description: "",
    bullets: [
      "Processed interview requests for notable artists including Kaytranada, Tyler The Creator, and Omar Apollo.",
      "Authored press releases to announce tours and releases for artists such as Empress Of, Freddie Gibbs, Matt Champion, Teezo Touchdown, and more.",
      "Coordinated press outreach and maintained media contact databases.",
    ],
    tags: ["pr", "ops"],
    documents: [
      { label: "empress_of_–_pr_feb_2024", src: "/docs/Empress Of PR Feb 21 (1).pdf" },
      { label: "freddie_gibbs_–_la_tenata_show", src: "/docs/Freddie Gibbs LA Tenata Show (2).pdf" },
      { label: "matt_champion_–_pr_jun_2024", src: "/docs/Matt Champion PR Wed Jun 12.pdf" },
      { label: "superfan_–_75_germany_pr", src: "/docs/Superfan _75 Germany_ PR.pdf" },
      { label: "teezo_touchdown_–_third_coast_mv", src: "/docs/Teezo Touchdown __ _Third Coast_ Music video.pdf" },
    ],
  },
  {
    id: "wener-mgmt",
    company: "WENER_MGMT",
    url: "https://wenermgmt.com",
    preview: "/previews/wener-mgmt.jpg",
    employmentType: "on_call",
    location: "vancouver_bc · hybrid",
    roles: [
      { title: "assistant", start: "aug_2023", end: "nov_2023", duration: "4_mos" },
    ],
    description: "Artist Management & Talent Buying company.",
    bullets: [
      "Assisted with admin and communications across artist management and talent buying operations.",
    ],
    tags: ["mgmt", "ops"],
  },
  {
    id: "unbelievably-spectacular",
    company: "UNBELIEVABLY_SPECTACULAR",
    url: "https://unbelievablyspectacular.com/home",
    preview: "/previews/unbelievably-spectacular.jpg",
    employmentType: "contract_part_time",
    location: "remote",
    roles: [
      { title: "a&r_+_label_manager", start: "aug_2023", end: "oct_2023", duration: "3_mos" },
    ],
    description: "",
    bullets: [
      "Coordinated North American and European tours for dj poolboi, DJ Planet Express, and Chris Luno.",
      "Handled A&R administration and talent booking logistics.",
    ],
    tags: ["ar", "label"],
  },
]
