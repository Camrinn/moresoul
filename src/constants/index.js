import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Services",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo enhancing",
  "Video editing",
  "Seamless Process",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Professional content creation can captivate your audience and strengthen your brand's presence.";

export const collabContent = [
  {
    id: "0",
    title: "Increase Engagement",
    text: collabText,
  },
  {
    id: "1",
    title: "Elevate Quality",
  },
  {
    id: "2",
    title: "Expand Reach",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    color:'white',
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Essential Soul",
    description: "Ideal for artists looking for a straightforward, high-quality music video",
    price: "200",
    features: [
      "Filming: Up to 4 hours of on-location filming",
      "Basic Editing: Includes color correction and cuts",
      "1 Revision: Small adjustments after the first draft",
    ],
  },
  {
    id: "1",
    title: "Creative Soul",
    description: "Perfect for artists wanting a more creative touch and engaging content.",
    price: "350",
    features: [
      "Filming: Up to 8 hours of on-location filming",
      "Advanced Editing: Includes color grading, special effects, transitions",
      'Storyboarding and Concept Consultation',
      "2 Revisions/2 Locations",
    ],
  },
  {
    id: "2",
    title: "Soul Star Package",
    description: "For those seeking a full production and promotional support to stand out",
    price: '500',
    features: [
      "Filming: Full-day shoot with multiple locations",
      "Premium Editing: Includes VFX, advanced motion graphics, and dynamic transitions",
      "Custom Promo Package: Social media teasers, behind-the-scenes footage",
      'Promotion Assistance: Help with YouTube SEO and social media strategy',
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Create Effortlessly, Perform Powerfully",
    text: "Let us turn your sound into a cinematic experience that resonates with your audience.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Capture Every Beat",
    text: "From concept to completion, we create music videos that move with your rhythm and style.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Share Your Sound Globally",
    text: "We help you promote and share your music video across platforms, ensuring your art reaches the world.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Unleash Your Creativity Globally",
    text: "We amplify your voice, ensuring your music video connects with audiences across the world.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Bring Your Music to Life",
    text: "Let us transform your sound into a dynamic visual masterpiece that captivates your audience.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Ignite Your Imagination",
    text: "From initial spark to final cut, we create music videos that match the energy and vision of your sound.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/",
  },
  {
    id: "1",
    title: "X",
    iconUrl: twitter,
    url: "https://x.com/home",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/moresoulrecords/?igsh=MWNnMGs4bDN3NGY4MQ%3D%3D",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];