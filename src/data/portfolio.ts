interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  detailsUrl: string;
  tags: string[];
  socialLinks?: SocialLinks;
  feature?: {
    headline: string;
    facts: { value: string; label: string }[];
  };
}

interface PortfolioCategory {
  id: string;
  label: string;
  items: PortfolioItem[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "web-dev",
    label: "Web & App Development",
    items: [
      {
        id: 8,
        title: "SmartDrop Smart Locker Platform",
        description:
          "SmartDrop helps merchants reduce failed deliveries by letting customers collect parcels from secure neighbourhood lockers using OTP access, SMS collection flows, and 24/7 pickup availability.",
        image: "/previews/smartdrop.jpg",
        liveUrl: "https://smartdrop.africa/",
        detailsUrl: "/projects/smartdrop",
        tags: ["Smart Lockers", "Logistics", "IoT", "Web Development"],
        feature: {
          headline: "A smarter way to deliver.",
          facts: [
            { value: "24/7", label: "Parcel pickup" },
            { value: "OTP", label: "Secure access" },
          ],
        },
      },
      {
        id: 9,
        title: "AgriFlock360 Admin Panel Web Application",
        description:
          "A complete administration dashboard for managing the AgriFlock360 ecosystem, including farms, deployments, firmware, support, hardware inventory, farmer products, insights, revenue, alerts, and platform settings.",
        image: "/previews/agriflock-admin.jpg",
        detailsUrl: "/projects/agriflock360-admin",
        tags: ["Admin Panel", "AgriTech", "Dashboard", "Operations"],
      },
      {
        id: 1,
        title: "AgriFlock360 Platform Website & Mobile Application",
        description:
          "Comprehensive AI-powered poultry management ecosystem featuring custom IoT hardware and software. Our team handled the complete hardware development cycle: PCB design and schematic creation, Gerber file generation, and international fabrication coordination with manufacturers in China. Post-fabrication, we conducted rigorous testing and assembly verification of the smart brooder chips. The platform includes a mobile application with advanced offline functionality for seamless operation in low-connectivity areas, real-time environmental monitoring, automated climate control, and solar-powered IoT sensors. The system integrates AI-driven analytics to optimize poultry health and productivity for smallholder farmers across Africa.",
        image: "/previews/agriflock-platform.png",
        liveUrl: "https://www.agriflock360.com/",
        detailsUrl: "/projects/agriflock360",
        tags: [
          "AgriTech",
          "Mobile App",
          "IoT",
          "PCB Design",
          "AI Analytics",
          "Hardware Development",
        ],
      },
      {
        id: 2,
        title: "TRUKFLOW Logistics Website & Mobile Application",
        description:
          "A fully developed logistics website and mobile app ecosystem for TRUKFLOW, East Africa's smart logistics system, featuring driver marketplace onboarding, goods movement workflows, and secure smart locker delivery options.",
        image: "/previews/trukflow.jpg",
        liveUrl: "https://www.trukflow.com/",
        detailsUrl: "/projects/truk-logistics",
        tags: ["Logistics", "Web Development", "Mobile App", "Smart Lockers"],
      },
      {
        id: 3,
        title: "TRUKFLOW Admin Panel Web Application",
        description:
          "A fully developed responsive and intuitive admin dashboard delivering real-time insights into the TRUKFLOW mobile app's key metrics and user behavior.",
        image: "/Admin Panel.jpg",
        liveUrl: "https://truk-admin-panel.netlify.app/",
        detailsUrl: "/projects/truk-admin",
        tags: ["Web Development", "Web App", "Enterprise"],
      },
      {
        id: 4,
        title: "Comprehensive Church Website",
        description:
          "A modern, dynamic website showcasing church programs, enhanced with integrated audio recordings and a seamlessly embedded YouTube channel.",
        image: "/previews/church.jpg",
        liveUrl: "https://www.deliverancechurchinternationalnyansiongo.org",
        detailsUrl: "/projects/church-website",
        tags: ["Church Management", "Audio Streaming", "Ministry Tools"],
      },
      {
        id: 5,
        title: "HealthTech Mobile App",
        description:
          "Revolutionary healthcare app connecting patients with doctors, featuring telemedicine and health tracking.",
        image: "/portfolio-health-africa.jpg",
        liveUrl: "https://healthtech-demo.com",
        detailsUrl: "/projects/healthtech",
        tags: ["Healthcare", "Mobile App", "Telemedicine"],
      },
      {
        id: 6,
        title: "FinTech Dashboard",
        description:
          "Comprehensive financial dashboard with real-time analytics, portfolio tracking, and investment insights.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        liveUrl: "https://fintech-demo.com",
        detailsUrl: "/projects/fintech",
        tags: ["FinTech", "Dashboard", "Analytics"],
      },
      {
        id: 7,
        title: "Educational Platform",
        description:
          "Interactive learning management system with video streaming, progress tracking, and collaborative tools.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        liveUrl: "https://eduplatform-demo.com",
        detailsUrl: "/projects/educational-platform",
        tags: ["Education", "LMS", "Video Streaming"],
      },
    ],
  },
  {
    id: "design-marketing",
    label: "Design & Marketing",
    items: [
      {
        id: 1,
        title:
          "Deliverance Church International Nyansiongo - Social Media Management",
        description:
          "Comprehensive social media management across Facebook, Instagram, and X (Twitter). We create engaging content, manage community interactions, and build an active online presence to connect the church with its congregation and wider community.",
        image: "/previews/church.jpg",
        liveUrl: "https://www.facebook.com/DCINyansiongo",
        detailsUrl: "/projects/church-website",
        tags: ["Social Media", "Content Creation", "Community Management"],
        socialLinks: {
          facebook: "https://www.facebook.com/DCINyansiongo",
          instagram: "https://www.instagram.com/dcinyansiongo",
          x: "https://x.com/dcinyansiongo",
        },
      },
      {
        id: 2,
        title: "TRUKFLOW - Social Media Management",
        description:
          "Full-service social media management for the TRUKFLOW logistics platform. We handle content strategy, brand storytelling, and engagement across major platforms to drive brand awareness and user acquisition.",
        image: "/previews/trukflow.jpg",
        liveUrl: "https://www.trukflow.com/",
        detailsUrl: "/projects/truk-logistics",
        tags: ["Social Media", "Brand Strategy", "Digital Marketing"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=61577130358564",
          linkedin: "https://www.linkedin.com/company/truk-ltd",
          instagram: "https://www.instagram.com/truk_ltd",
          x: "https://x.com/trukltd",
          tiktok: "https://www.tiktok.com/@truk_ltd",
        },
      },
      {
        id: 3,
        title: "AgriFlock 360 - Social Media Management",
        description:
          "Strategic social media management for AgriFlock 360's AI-powered poultry platform. We create educational content, showcase product features, and engage with farmers and agricultural stakeholders across LinkedIn, Facebook, Instagram, X, and TikTok.",
        image: "/previews/agriflock-platform.png",
        liveUrl: "https://www.linkedin.com/company/agriflock-360",
        detailsUrl: "/projects/agriflock360",
        tags: ["Social Media", "AgriTech Marketing", "Content Strategy"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=61584028213600",
          linkedin: "https://www.linkedin.com/company/agriflock-360",
          x: "https://x.com/agriflock360",
          instagram: "https://www.instagram.com/agriflock_360",
          tiktok: "https://www.tiktok.com/@agriflock_360",
        },
      },
      {
        id: 4,
        title: "M'Global Farm - Social Media Management",
        description:
          "Complete social media presence management for M'Global Farm. We develop and execute content calendars, engage with the farming community, and promote sustainable agricultural practices across LinkedIn, Facebook, Instagram, X, and TikTok.",
        image: "/M_Global_Farm_Logo.png",
        liveUrl: "https://www.facebook.com/profile.php?id=100068009874336",
        detailsUrl: "#",
        tags: ["Social Media", "Agriculture", "Brand Building"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=100068009874336",
          instagram: "https://www.instagram.com/m_global_farm",
          x: "https://x.com/m_global_farm",
        },
      },
    ],
  },
  {
    id: "system-design",
    label: "System Design & Deployment",
    items: [],
  },
  {
    id: "it-consulting",
    label: "IT Consulting & Tech Support",
    items: [],
  },
];
