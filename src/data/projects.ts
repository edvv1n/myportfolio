export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: string;
  coverTitle: string;
  accent: string;
  screenshot?: string;
  status?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Human-Centered Computing Foundation",
    description: "Migrated an eight-page WordPress website to React with a headless blog, validated API forms, and reusable page components. Ongoing maintenance keeps the foundation’s content current.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Headless CMS"],
    link: "https://hccf.onmy.cloud/",
    category: "Foundation website",
    coverTitle: "HCCF",
    accent: "#0b6570",
    screenshot: "/projects/hccf.jpg",
  },
  {
    title: "BingeBox",
    description: "A movie discovery experience with TMDB-powered movie details and trailers, signup and movie request flows, and Jellyfin access. Currently in development.",
    tags: ["TMDB API", "WordPress", "Jellyfin"],
    link: (import.meta.env.VITE_BINGEBOX_URL ?? "https://q4gwl87n-5173.uks1.devtunnels.ms/").trim() || undefined,
    status: "In development",
    linkLabel: "View preview",
    category: "Entertainment platform",
    coverTitle: "BingeBox",
    accent: "#8c3d25",
    screenshot: "/projects/bingebox.jpg",
  },
  {
    title: "Cohesion Africa",
    description: "Built a youth football platform with tournament registration, blogs, and galleries. Automated ticket IDs and confirmation emails connect each applicant with the organizing team.",
    tags: ["React", "Tailwind CSS", "Registration", "SMTP"],
    link: "https://cohesionafrica.com/",
    category: "Football & community",
    coverTitle: "Cohesion Africa",
    accent: "#294d76",
    screenshot: "/projects/cohesion.jpg",
  },
  {
    title: "Womenful Voice (WordPress)",
    description: "Rebuilt and migrated the nonprofit’s 14-page Wix website to WordPress and Elementor to reduce hosting costs. Added blog management and contact forms, and trained staff to manage content.",
    tags: ["WordPress", "Elementor", "Contact Form 7", "CMS migration"],
    link: "https://womenfulvoice.org/",
    category: "Nonprofit / WordPress rebuild",
    coverTitle: "Womenful Voice",
    accent: "#874491",
    screenshot: "/projects/womenful-wordpress.jpg",
  },
  {
    title: "Womenful Voice (Wix)",
    description: "The organization’s original Wix website, built to present its programs and community outreach. This earlier version laid the foundation for the later WordPress migration.",
    tags: ["Wix", "CMS", "Nonprofit"],
    link: "https://smjean.wixsite.com/mysite?rc=test-site",
    category: "Nonprofit / original website",
    coverTitle: "Womenful Voice",
    accent: "#874491",
    status: "Earlier version",
    screenshot: "/projects/womenful-wix.jpg",
  },
  {
    title: "Global Women Cultural Exchange",
    description: "A WordPress website bringing together the organization’s mission, programs, and opportunities to get involved, supporting cultural exchange and connection among women.",
    tags: ["WordPress", "Elementor", "Nonprofit"],
    link: "https://globalwomenculturalexchange.org/",
    category: "Community & cultural exchange",
    coverTitle: "GWCE",
    accent: "#64508c",
    screenshot: "/projects/gwce.jpg",
  },
  {
    title: "Senska Portfolio",
    description: "A personal brand website that brings together leadership, ventures, and services through a responsive React interface, modular components, and subtle animation.",
    tags: ["React", "Framer Motion", "JavaScript"],
    link: "https://senska.vercel.app/",
    category: "Personal brand website",
    coverTitle: "Senska",
    accent: "#576031",
    screenshot: "/projects/senska.jpg",
  },
  {
    title: "WeatherED",
    description: "A responsive weather application using OpenWeatherMap for location-based forecasts, with video backgrounds that change to reflect live weather conditions.",
    tags: ["Next.js", "TypeScript", "OpenWeatherMap"],
    link: "https://weather-app-nine-mu-65.vercel.app",
    category: "Weather application",
    coverTitle: "WeatherED",
    accent: "#316186",
    screenshot: "/projects/weathered.jpg",
  },
];
