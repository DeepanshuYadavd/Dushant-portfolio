export interface Project {
  id: string;
  type: 'reel' | 'youtube';
  url: string;
  title: string;
  category: string;
  thumbnail?: string;
}

export const REELS: Project[] = [
  {
    id: "DWoRz5yAb3x",
    type: "reel",
    url: "https://www.instagram.com/reel/DWoRz5yAb3x/",
    title: "Urban Rhythm",
    category: "Cinematic Reel",
    thumbnail: "https://images.unsplash.com/photo-1514525253361-bee8a48790c3?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "DWV13GfjRsQ",
    type: "reel",
    url: "https://www.instagram.com/reel/DWV13GfjRsQ/",
    title: "Street Soul",
    category: "Short Narrative",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "DWfzRRSDNFH",
    type: "reel",
    url: "https://www.instagram.com/reel/DWfzRRSDNFH/",
    title: "Neon Pulse",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "DWbQyDnCFOo",
    type: "reel",
    url: "https://www.instagram.com/reel/DWbQyDnCFOo/",
    title: "Vibrant City",
    category: "Travel Reel",
    thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2644&auto=format&fit=crop",
  },
  {
    id: "DP6EUxUgggr",
    type: "reel",
    url: "https://www.instagram.com/reel/DP6EUxUgggr/",
    title: "Motion Flow",
    category: "Brand Story",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "DNSWIuuM-A-",
    type: "reel",
    url: "https://www.instagram.com/reel/DNSWIuuM-A-/",
    title: "Cinematic Journey",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
  },
  {
    id: "DUGEzlrjE39",
    type: "reel",
    url: "https://www.instagram.com/reel/DUGEzlrjE39/",
    title: "Atmosphere",
    category: "Visual Art",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "DUz8nBIjKD1",
    type: "reel",
    url: "https://www.instagram.com/reel/DUz8nBIjKD1/",
    title: "Essence of Life",
    category: "Personal Project",
    thumbnail: "https://images.unsplash.com/photo-1500462859194-885860a11707?q=80&w=2576&auto=format&fit=crop",
  },
];

export const YOUTUBE_VIDEOS: Project[] = [
  {
    id: "ZAoyhfPsnIM",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZAoyhfPsnIM",
    title: "Cinematic Narrative I",
    category: "Short Film",
  },
  {
    id: "4igfc1CBgv4",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=4igfc1CBgv4",
    title: "Visual Storytelling II",
    category: "Commercial",
  },
  {
    id: "aE1_wZjvSJA",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=aE1_wZjvSJA",
    title: "Urban Motion III",
    category: "Music Video",
  },
  {
    id: "96hWhBhmrTc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=96hWhBhmrTc",
    title: "Brand Essence IV",
    category: "Brand Story",
  },
  {
    id: "1YKPl_tPBFg",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=1YKPl_tPBFg",
    title: "Creative Flow V",
    category: "Experimental",
  },
  {
    id: "oepWJNgEGhY",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=oepWJNgEGhY",
    title: "Cinematic Journey VI",
    category: "Documentary",
  },
  {
    id: "KI_ZmHarflM",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KI_ZmHarflM",
    title: "Visual Art VII",
    category: "Art Film",
  },
  {
    id: "LszVi541cKI",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=LszVi541cKI",
    title: "Motion Graphics VIII",
    category: "Creative Direction",
  },
  {
    id: "hleUhouzpvo",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=hleUhouzpvo",
    title: "Studio Session IX",
    category: "Behind the Scenes",
  },
  {
    id: "6orjqIxq-V8",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=6orjqIxq-V8",
    title: "Performance X",
    category: "Music Video",
  },
  {
    id: "ZENaEY4riQc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZENaEY4riQc",
    title: "Cinematic Reel XI",
    category: "Showreel",
  },
];

