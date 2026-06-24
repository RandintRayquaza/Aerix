import {
  BarChart3,
  Layers3,
  Link2,
  MonitorSmartphone,
  Palette,
  Share2,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  DiscordIcon,
  InstagramIcon,
  LinkedInIcon,
  MoreIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/brand-icons";

export const navItems = ["Product", "Features", "Analytics", "Examples"];

export const proofItems = ["No code required", "Live in under 2 minutes", "Profile, media, and links"];

export const features = [
  {
    title: "All your links",
    copy: "Organize links, content, and socials in one public profile.",
    icon: Link2,
  },
  {
    title: "Beautiful profiles",
    copy: "Use visual profile sections and themes that match your identity.",
    icon: Sparkles,
  },
  {
    title: "Advanced analytics",
    copy: "Review views, clicks, audience devices, and top links.",
    icon: BarChart3,
  },
  {
    title: "Fast and reliable",
    copy: "Designed for lightweight, shareable creator pages.",
    icon: Zap,
  },
];

export const builderNotes = [
  "Add links, videos, images, and contact sections",
  "Reorder the profile without touching code",
  "Preview the public page while editing",
];

export const analyticsNotes = [
  "Track profile views, unique visitors, and link clicks",
  "Review device breakdown and traffic sources",
  "See which links and content get the most attention",
];

export const workflowItems = [
  {
    title: "Create",
    copy: "Start with profile, contact, and link blocks.",
    icon: Layers3,
  },
  {
    title: "Customize",
    copy: "Adjust theme, button style, and media presentation.",
    icon: Palette,
  },
  {
    title: "Publish",
    copy: "Share one clean profile across social platforms.",
    icon: Share2,
  },
  {
    title: "Measure",
    copy: "Use analytics to understand what visitors open.",
    icon: MonitorSmartphone,
  },
];

export const socialItems = [
  {
    label: "Instagram",
    icon: InstagramIcon,
    tone: "bg-white text-white",   // uses internal gradient SVG
  },
  {
    label: "YouTube",
    icon: YouTubeIcon,
    tone: "bg-white text-white",   // uses internal red fill SVG
  },
  {
    label: "X",
    icon: XIcon,
    tone: "bg-[#0f1419] text-white",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    tone: "bg-[#5865f2] text-white",
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    tone: "bg-[#0a66c2] text-white",
  },
  {
    label: "TikTok",
    icon: TikTokIcon,
    tone: "bg-[#010101] text-white",
  },
  {
    label: "Threads",
    icon: ThreadsIcon,
    tone: "bg-[#101010] text-white",
  },
  {
    label: "More",
    icon: MoreIcon,
    tone: "bg-elevated text-ink border border-border",
  },
];

