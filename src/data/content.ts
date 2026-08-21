export const profile = {
  name: "alex_stekl",
  role: "creative_operations & project_management",
  linkedin: "https://linkedin.com/in/alexstekl",
  email: "alxstekl@gmail.com",
  about: `I work at the intersection of creative, operations, and technology - building workflows, delivering projects, and helping teams move faster without losing quality. Background spans project management, creative production, marketing, and internal tooling. I'm drawn to the gap between how things work and how they could.`,
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
  location?: string
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
    roles: [
      { title: "label ops specialist",   start: "feb_2026", end: "present",  duration: "6_mos" },
      { title: "creative manager",       start: "sep_2025", end: "feb_2026", duration: "6_mos" },
      { title: "marketing coordinator",  start: "sep_2024", end: "sep_2025", duration: "1_yr_1_mo" },
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
      "/work/prairy/1778858201698-carlyle_bad_company.jpg",
      "/work/prairy/1779302091309-cupid_nyxon_cover.jpg",
      "/work/prairy/1779988760240-late_monday_pretty_girl_cover.jpg",
      "/work/prairy/2026-06-09 13.07.19.jpg",
      "/work/prairy/butterflies v2.jpg",
      "/work/prairy/carlyle rewind 1.jpg",
      "/work/prairy/cassie villa left on read cover v2.jpg",
      "/work/prairy/gone girl nyxon.jpg",
      "/work/prairy/idc about ur boyfriend.jpg",
      "/work/prairy/iwroteasongforudp1.jpg",
      "/work/prairy/lullaby cover 1.1 copy.jpg",
      "/work/prairy/machine gun cover idea2.jpg",
      "/work/prairy/nyxon spin cover.jpg",
      "/work/prairy/photo_2026-06-09 13.08.08.jpeg",
      "/work/prairy/victoriassecret3.jpg",
      "/work/prairy/vyxie one high 1.2 copy.jpg",
      "/work/prairy/x_pill_cover_1 2.jpg",
      "/work/prairy/yung dre right moves.jpg",
    ],
  },
  {
    id: "surely-work",
    company: "SURELY_WORK",
    url: "https://www.surelywork.com",
    preview: "/previews/surely-work.jpg",
    roles: [
      { title: "marketing & partnerships manager", start: "jun_2023", end: "oct_2025", duration: "2_yrs_4_mos" },
    ],
    description: "Global creative network and jobs board for the entertainment industry.",
    bullets: [
      "Supported platform growth to 10,000+ users through coordinated content strategy and community initiatives.",
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
    roles: [
      { title: "publicity intern", start: "jan_2024", end: "jun_2024", duration: "6_mos" },
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
    location: "vancouver_bc",
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
    roles: [
      { title: "a&r + label coordinator", start: "aug_2023", end: "oct_2023", duration: "3_mos" },
    ],
    description: "",
    bullets: [
      "Coordinated North American and European tours for dj poolboi, DJ Planet Express, and Chris Luno.",
      "Handled A&R administration and talent booking logistics.",
    ],
    tags: ["ar", "label"],
  },
]

export interface Project {
  id: string
  name: string
  stack: string[]
  description: string
}

export const projects: Project[] = [
  {
    id: "release-pipeline-tracker",
    name: "release_pipeline_tracker",
    stack: ["claude code", "telegram"],
    description: "Internal release management tool for tracking upcoming releases and asset readiness across a multi-artist roster. Integrated with Telegram to notify the team of missing assets and approaching release dates.",
  },
  {
    id: "release-pitch-tool",
    name: "release_pitch_tool",
    stack: ["claude code", "spotify api", "anthropic api", "telegram"],
    description: "Automated Spotify editorial pitch generator connected to the release pipeline, Spotify artist data, and Anthropic API. Pitches are auto-generated from release metadata and artist context, with Telegram alerts if submissions are pending ahead of deadlines.",
  },
  {
    id: "release-asset-creator",
    name: "release_asset_creator",
    stack: ["claude code", "ffmpeg"],
    description: "Extension of the pitch tool that pulls audio and cover art via API and automatically generates Spotify Canvas, YouTube art tracks, and social clips ready for posting.",
  },
]
