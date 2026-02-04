export type Mode = "huddle" | "hobbyhub";

export type Community = {
  id: string;
  slug: string;
  name: string;
  description: string;
  tag: string;
  tagType: "City" | "Interest";
  memberCount: string;
  mode: Mode;
  accent: string;
  banner: string;
};

export type Post = {
  id: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  timestamp: number;
  tags: string[];
  isNew?: boolean;
};

export type Highlight = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  author: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  status: string;
};

export type TrendingPost = {
  id: string;
  title: string;
  community: string;
  metric: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  accent: string;
};

export type TopicSpotlight = {
  id: string;
  title: string;
  description: string;
  tag: string;
  accent: string;
};

export const modeCopy = {
  huddle: {
    label: "Huddle",
    subtitle: "Your digital town square",
    description:
      "Local updates, recommendations, and real-world connections.",
  },
  hobbyhub: {
    label: "HobbyHub",
    subtitle: "Find your people, share what you love",
    description:
      "Niche communities built around passions and shared curiosity.",
  },
} as const;

// Mock data: communities
const huddleCommunities: Community[] = [
  {
    id: "hud-1",
    slug: "north-park-exchange",
    name: "North Park Exchange",
    description: "Neighborhood tips, local gems, and weekend plans.",
    tag: "San Diego",
    tagType: "City",
    memberCount: "12.4k",
    mode: "huddle",
    accent: "from-sky-500 to-indigo-500",
    banner: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    id: "hud-2",
    slug: "flatiron-families",
    name: "Flatiron Families",
    description: "Parent swaps, school updates, and playground meetups.",
    tag: "New York City",
    tagType: "City",
    memberCount: "9.1k",
    mode: "huddle",
    accent: "from-emerald-500 to-teal-500",
    banner: "from-emerald-500 via-teal-500 to-sky-500",
  },
  {
    id: "hud-3",
    slug: "riverfront-runners",
    name: "Riverfront Runners",
    description: "Group runs, route picks, and post-run brunches.",
    tag: "Chicago",
    tagType: "City",
    memberCount: "6.8k",
    mode: "huddle",
    accent: "from-orange-500 to-amber-500",
    banner: "from-orange-500 via-amber-500 to-yellow-400",
  },
  {
    id: "hud-4",
    slug: "sunset-market",
    name: "Sunset Market",
    description: "Buy/sell, weekly deals, and neighborhood finds.",
    tag: "Austin",
    tagType: "City",
    memberCount: "4.3k",
    mode: "huddle",
    accent: "from-rose-500 to-pink-500",
    banner: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    id: "hud-5",
    slug: "lakeside-living",
    name: "Lakeside Living",
    description: "Dock updates, boat shares, and lake cleanups.",
    tag: "Seattle",
    tagType: "City",
    memberCount: "5.5k",
    mode: "huddle",
    accent: "from-cyan-500 to-blue-500",
    banner: "from-cyan-500 via-sky-500 to-blue-500",
  },
  {
    id: "hud-6",
    slug: "old-town-makers",
    name: "Old Town Makers",
    description: "Local makers, pop-ups, and skill swaps.",
    tag: "Portland",
    tagType: "City",
    memberCount: "3.2k",
    mode: "huddle",
    accent: "from-violet-500 to-purple-500",
    banner: "from-violet-500 via-purple-500 to-indigo-500",
  },
];

const hobbyHubCommunities: Community[] = [
  {
    id: "hob-1",
    slug: "analog-photography",
    name: "Analog Photography",
    description: "Film stocks, darkroom tricks, and camera swaps.",
    tag: "Photography",
    tagType: "Interest",
    memberCount: "18.7k",
    mode: "hobbyhub",
    accent: "from-fuchsia-500 to-pink-500",
    banner: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    id: "hob-2",
    slug: "home-espresso",
    name: "Home Espresso Lab",
    description: "Shots, grinders, and latte art experiments.",
    tag: "Coffee",
    tagType: "Interest",
    memberCount: "14.2k",
    mode: "hobbyhub",
    accent: "from-amber-500 to-orange-500",
    banner: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    id: "hob-3",
    slug: "indie-game-builders",
    name: "Indie Game Builders",
    description: "Playtests, pixel art, and launch feedback.",
    tag: "Game Dev",
    tagType: "Interest",
    memberCount: "22.9k",
    mode: "hobbyhub",
    accent: "from-indigo-500 to-blue-500",
    banner: "from-indigo-500 via-blue-500 to-sky-500",
  },
  {
    id: "hob-4",
    slug: "trail-ultra",
    name: "Trail and Ultra",
    description: "Training plans, gear swaps, and race stories.",
    tag: "Trail Running",
    tagType: "Interest",
    memberCount: "11.3k",
    mode: "hobbyhub",
    accent: "from-emerald-500 to-green-500",
    banner: "from-emerald-500 via-green-500 to-lime-400",
  },
  {
    id: "hob-5",
    slug: "vinyl-select",
    name: "Vinyl Select",
    description: "Crate digs, listening parties, and rare finds.",
    tag: "Music",
    tagType: "Interest",
    memberCount: "7.6k",
    mode: "hobbyhub",
    accent: "from-purple-500 to-violet-500",
    banner: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: "hob-6",
    slug: "micro-gardens",
    name: "Micro Gardens",
    description: "Balcony builds, plant clinics, and seed swaps.",
    tag: "Gardening",
    tagType: "Interest",
    memberCount: "5.8k",
    mode: "hobbyhub",
    accent: "from-teal-500 to-cyan-500",
    banner: "from-teal-500 via-cyan-500 to-sky-500",
  },
];

// Mock data: community posts
const communityPosts: Record<Mode, Record<string, Post[]>> = {
  huddle: {
    "north-park-exchange": [
      {
        id: "np-1",
        author: "Lena Ortiz",
        content:
          "Anyone know a quiet cafe with outlets near 30th? Need a two-hour study spot.",
        likes: 18,
        comments: 6,
        shares: 2,
        createdAt: "2h ago",
        timestamp: 1738704000000,
        tags: ["Local Tips", "Neighborhood"],
      },
      {
        id: "np-2",
        author: "Grant Hill",
        content:
          "Saturday farmers market moved to the park parking lot - more vendors this week!",
        likes: 42,
        comments: 12,
        shares: 6,
        createdAt: "5h ago",
        timestamp: 1738693200000,
        tags: ["Events", "Food"],
      },
      {
        id: "np-3",
        author: "Jia Park",
        content:
          "Lost gray husky near Juniper and Grim. DM me if you see him.",
        likes: 76,
        comments: 19,
        shares: 11,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Alerts", "Neighbors"],
      },
    ],
    "flatiron-families": [
      {
        id: "ff-1",
        author: "Sasha Reed",
        content:
          "Looking for a babysitter share on Thursdays - any interest?",
        likes: 24,
        comments: 9,
        shares: 4,
        createdAt: "3h ago",
        timestamp: 1738700400000,
        tags: ["Families", "Help"],
      },
      {
        id: "ff-2",
        author: "Maya Lowell",
        content:
          "PS 340 is hosting an open house next week. Anyone going?",
        likes: 16,
        comments: 7,
        shares: 3,
        createdAt: "9h ago",
        timestamp: 1738686000000,
        tags: ["Schools", "Events"],
      },
      {
        id: "ff-3",
        author: "Zoe Patel",
        content:
          "Sharing our kid-friendly brunch map - new spots added!",
        likes: 33,
        comments: 4,
        shares: 5,
        createdAt: "2d ago",
        timestamp: 1738531200000,
        tags: ["Food", "Recommendations"],
      },
    ],
    "riverfront-runners": [
      {
        id: "rr-1",
        author: "Caleb Nguyen",
        content:
          "Tempo run tomorrow at 6am - 5 miles along the river. Who's in?",
        likes: 29,
        comments: 10,
        shares: 3,
        createdAt: "1h ago",
        timestamp: 1738707600000,
        tags: ["Runs", "Training"],
      },
      {
        id: "rr-2",
        author: "Nora Bailey",
        content:
          "Great new hydration station at mile 3.5 by the bridge.",
        likes: 13,
        comments: 2,
        shares: 1,
        createdAt: "7h ago",
        timestamp: 1738690000000,
        tags: ["Routes", "Tips"],
      },
      {
        id: "rr-3",
        author: "Omar Wells",
        content:
          "Anyone training for the lakefront half? Sharing my plan.",
        likes: 21,
        comments: 8,
        shares: 4,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Training", "Events"],
      },
    ],
    "sunset-market": [
      {
        id: "sm-1",
        author: "Rae Kim",
        content:
          "Selling a barely used bike rack - pickup near South Congress.",
        likes: 11,
        comments: 3,
        shares: 2,
        createdAt: "4h ago",
        timestamp: 1738696800000,
        tags: ["Market", "For Sale"],
      },
      {
        id: "sm-2",
        author: "Tyler Shaw",
        content:
          "Anyone have a recommendation for a local mover?",
        likes: 9,
        comments: 5,
        shares: 1,
        createdAt: "8h ago",
        timestamp: 1738689600000,
        tags: ["Help", "Recommendations"],
      },
      {
        id: "sm-3",
        author: "Iris Bell",
        content:
          "Found a great deal on patio plants at the co-op today.",
        likes: 27,
        comments: 6,
        shares: 3,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Deals", "Home"],
      },
    ],
    "lakeside-living": [
      {
        id: "ll-1",
        author: "Andre Miles",
        content:
          "Morning paddle meetup this Sunday - all skill levels welcome.",
        likes: 17,
        comments: 3,
        shares: 2,
        createdAt: "6h ago",
        timestamp: 1738690800000,
        tags: ["Events", "Outdoors"],
      },
      {
        id: "ll-2",
        author: "Paula Sun",
        content:
          "Dock repair recommendations? Looking for someone insured.",
        likes: 8,
        comments: 2,
        shares: 1,
        createdAt: "11h ago",
        timestamp: 1738680600000,
        tags: ["Help", "Home"],
      },
      {
        id: "ll-3",
        author: "Chris Vega",
        content:
          "Lake clean-up recap: 18 bags collected! Next one in two weeks.",
        likes: 49,
        comments: 14,
        shares: 9,
        createdAt: "2d ago",
        timestamp: 1738531200000,
        tags: ["Community", "Outdoors"],
      },
    ],
    "old-town-makers": [
      {
        id: "om-1",
        author: "Becca Morgan",
        content:
          "Hosting a beginner ceramics swap next Friday - RSVP if interested.",
        likes: 34,
        comments: 6,
        shares: 5,
        createdAt: "5h ago",
        timestamp: 1738693200000,
        tags: ["Events", "Makers"],
      },
      {
        id: "om-2",
        author: "Dylan Russo",
        content:
          "Need help sourcing reclaimed wood for a small desk build.",
        likes: 12,
        comments: 4,
        shares: 2,
        createdAt: "9h ago",
        timestamp: 1738686000000,
        tags: ["Supplies", "Help"],
      },
      {
        id: "om-3",
        author: "Anya Rossi",
        content:
          "Pop-up market schedule is live - 24 makers confirmed.",
        likes: 27,
        comments: 8,
        shares: 6,
        createdAt: "2d ago",
        timestamp: 1738531200000,
        tags: ["Market", "Events"],
      },
    ],
  },
  hobbyhub: {
    "analog-photography": [
      {
        id: "ap-1",
        author: "Noah Kerr",
        content:
          "Testing Portra 400 vs Gold 200 in low light - sharing scans.",
        likes: 57,
        comments: 15,
        shares: 10,
        createdAt: "2h ago",
        timestamp: 1738704000000,
        tags: ["Film", "Scanning"],
      },
      {
        id: "ap-2",
        author: "Mina Cho",
        content:
          "Anyone tried cross-processing Ektachrome lately?",
        likes: 26,
        comments: 7,
        shares: 2,
        createdAt: "6h ago",
        timestamp: 1738690800000,
        tags: ["Experiment", "Film"],
      },
      {
        id: "ap-3",
        author: "Harper Knox",
        content:
          "Darkroom tips: keeping prints consistent across sessions.",
        likes: 44,
        comments: 9,
        shares: 6,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Darkroom", "Workflow"],
      },
    ],
    "home-espresso": [
      {
        id: "he-1",
        author: "Priya Das",
        content:
          "Dialed in a 1:2.1 ratio today. Shots are syrupy!",
        likes: 38,
        comments: 12,
        shares: 4,
        createdAt: "3h ago",
        timestamp: 1738700400000,
        tags: ["Recipes", "Dial In"],
      },
      {
        id: "he-2",
        author: "Leo Carter",
        content:
          "Best budget grinder under $200? Need suggestions.",
        likes: 21,
        comments: 9,
        shares: 3,
        createdAt: "5h ago",
        timestamp: 1738696800000,
        tags: ["Gear", "Questions"],
      },
      {
        id: "he-3",
        author: "Sofia Green",
        content:
          "Oat milk microfoam hack: add 10 seconds of preheat.",
        likes: 31,
        comments: 4,
        shares: 5,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Milk", "Tips"],
      },
    ],
    "indie-game-builders": [
      {
        id: "ig-1",
        author: "Evan Lee",
        content:
          "Looking for playtesters for a cozy city-builder demo.",
        likes: 66,
        comments: 18,
        shares: 12,
        createdAt: "1h ago",
        timestamp: 1738707600000,
        tags: ["Playtest", "Feedback"],
      },
      {
        id: "ig-2",
        author: "Rina Patel",
        content:
          "Composer recommendations for 16-bit inspired soundtracks?",
        likes: 29,
        comments: 6,
        shares: 4,
        createdAt: "8h ago",
        timestamp: 1738689600000,
        tags: ["Audio", "Hiring"],
      },
      {
        id: "ig-3",
        author: "Owen Pike",
        content:
          "Sharing a roadmap template for early access launches.",
        likes: 41,
        comments: 11,
        shares: 7,
        createdAt: "2d ago",
        timestamp: 1738531200000,
        tags: ["Launch", "Templates"],
      },
    ],
    "trail-ultra": [
      {
        id: "tu-1",
        author: "Liam Okafor",
        content:
          "Best vest for a 50k? I'm debating between two options.",
        likes: 22,
        comments: 8,
        shares: 2,
        createdAt: "4h ago",
        timestamp: 1738696800000,
        tags: ["Gear", "Questions"],
      },
      {
        id: "tu-2",
        author: "Sara Kim",
        content:
          "Hill repeats workout that actually feels fun. Posting plan.",
        likes: 19,
        comments: 3,
        shares: 2,
        createdAt: "9h ago",
        timestamp: 1738686000000,
        tags: ["Training", "Workout"],
      },
      {
        id: "tu-3",
        author: "Max Hernandez",
        content:
          "Race recap: foggy ridgeline, PR by 12 minutes.",
        likes: 54,
        comments: 13,
        shares: 8,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Race", "Stories"],
      },
    ],
    "vinyl-select": [
      {
        id: "vs-1",
        author: "Claire Rios",
        content:
          "Organizing by mood vs genre - anyone else do this?",
        likes: 25,
        comments: 5,
        shares: 3,
        createdAt: "2h ago",
        timestamp: 1738704000000,
        tags: ["Collection", "Discussion"],
      },
      {
        id: "vs-2",
        author: "Devon Park",
        content:
          "Found an original pressing of Rumours - still buzzing.",
        likes: 47,
        comments: 10,
        shares: 7,
        createdAt: "7h ago",
        timestamp: 1738690000000,
        tags: ["Finds", "Records"],
      },
      {
        id: "vs-3",
        author: "Lola White",
        content:
          "Needle care tips? My highs are getting fuzzy.",
        likes: 18,
        comments: 4,
        shares: 2,
        createdAt: "1d ago",
        timestamp: 1738617600000,
        tags: ["Gear", "Help"],
      },
    ],
    "micro-gardens": [
      {
        id: "mg-1",
        author: "Toby James",
        content:
          "Sharing a balcony drip irrigation setup under $30.",
        likes: 33,
        comments: 9,
        shares: 6,
        createdAt: "3h ago",
        timestamp: 1738700400000,
        tags: ["DIY", "Tips"],
      },
      {
        id: "mg-2",
        author: "Hana Sato",
        content:
          "Best herbs for low-light windowsills?",
        likes: 14,
        comments: 3,
        shares: 2,
        createdAt: "6h ago",
        timestamp: 1738690800000,
        tags: ["Plants", "Questions"],
      },
      {
        id: "mg-3",
        author: "Marcus Rye",
        content:
          "Time-lapse of my micro greenhouse build - worth sharing.",
        likes: 29,
        comments: 6,
        shares: 5,
        createdAt: "2d ago",
        timestamp: 1738531200000,
        tags: ["DIY", "Progress"],
      },
    ],
  },
};

// Mock data: community highlights
const communityHighlights: Record<Mode, Record<string, Highlight[]>> = {
  huddle: {
    "north-park-exchange": [
      {
        id: "h-np-1",
        title: "Weekend Market",
        subtitle: "35 new vendors",
        cover: "from-sky-500 via-blue-500 to-indigo-500",
        author: "Lena Ortiz",
      },
      {
        id: "h-np-2",
        title: "Pet Alert",
        subtitle: "Husky found",
        cover: "from-rose-500 via-pink-500 to-fuchsia-500",
        author: "Jia Park",
      },
      {
        id: "h-np-3",
        title: "Cafe Roundup",
        subtitle: "Top 5 spots",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Grant Hill",
      },
      {
        id: "h-np-4",
        title: "Night Ride",
        subtitle: "7pm meetup",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Cam Diaz",
      },
    ],
    "flatiron-families": [
      {
        id: "h-ff-1",
        title: "Playground Plan",
        subtitle: "Saturday crew",
        cover: "from-emerald-500 via-teal-500 to-sky-500",
        author: "Sasha Reed",
      },
      {
        id: "h-ff-2",
        title: "Open House",
        subtitle: "PS 340",
        cover: "from-sky-500 via-blue-500 to-indigo-500",
        author: "Maya Lowell",
      },
      {
        id: "h-ff-3",
        title: "Brunch Map",
        subtitle: "New spots",
        cover: "from-rose-500 via-pink-500 to-fuchsia-500",
        author: "Zoe Patel",
      },
      {
        id: "h-ff-4",
        title: "After School",
        subtitle: "Study pods",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Jamie Cole",
      },
    ],
    "riverfront-runners": [
      {
        id: "h-rr-1",
        title: "Tempo Crew",
        subtitle: "6am pace",
        cover: "from-cyan-500 via-sky-500 to-blue-500",
        author: "Caleb Nguyen",
      },
      {
        id: "h-rr-2",
        title: "Race Prep",
        subtitle: "Half marathon",
        cover: "from-emerald-500 via-lime-500 to-yellow-400",
        author: "Omar Wells",
      },
      {
        id: "h-rr-3",
        title: "Gear Swap",
        subtitle: "New drops",
        cover: "from-violet-500 via-purple-500 to-indigo-500",
        author: "Nora Bailey",
      },
    ],
    "sunset-market": [
      {
        id: "h-sm-1",
        title: "Deal Alert",
        subtitle: "Patio finds",
        cover: "from-rose-500 via-pink-500 to-fuchsia-500",
        author: "Iris Bell",
      },
      {
        id: "h-sm-2",
        title: "Move Help",
        subtitle: "Recs needed",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Tyler Shaw",
      },
      {
        id: "h-sm-3",
        title: "Bike Gear",
        subtitle: "New listing",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Rae Kim",
      },
    ],
    "lakeside-living": [
      {
        id: "h-ll-1",
        title: "Lake Cleanup",
        subtitle: "18 bags",
        cover: "from-cyan-500 via-blue-500 to-indigo-500",
        author: "Chris Vega",
      },
      {
        id: "h-ll-2",
        title: "Paddle Crew",
        subtitle: "Sunday",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Andre Miles",
      },
      {
        id: "h-ll-3",
        title: "Dock Fix",
        subtitle: "Trusted pros",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Paula Sun",
      },
    ],
    "old-town-makers": [
      {
        id: "h-om-1",
        title: "Maker Night",
        subtitle: "Ceramics swap",
        cover: "from-violet-500 via-purple-500 to-indigo-500",
        author: "Becca Morgan",
      },
      {
        id: "h-om-2",
        title: "Wood Help",
        subtitle: "Reclaimed",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Dylan Russo",
      },
      {
        id: "h-om-3",
        title: "Market Day",
        subtitle: "24 booths",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Anya Rossi",
      },
    ],
  },
  hobbyhub: {
    "analog-photography": [
      {
        id: "h-ap-1",
        title: "Film Drop",
        subtitle: "Portra tips",
        cover: "from-fuchsia-500 via-pink-500 to-rose-500",
        author: "Noah Kerr",
      },
      {
        id: "h-ap-2",
        title: "Scan Lab",
        subtitle: "Home setup",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Mina Cho",
      },
      {
        id: "h-ap-3",
        title: "Darkroom",
        subtitle: "Print tricks",
        cover: "from-sky-500 via-blue-500 to-indigo-500",
        author: "Harper Knox",
      },
    ],
    "home-espresso": [
      {
        id: "h-he-1",
        title: "Dial In",
        subtitle: "Ratio guide",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Priya Das",
      },
      {
        id: "h-he-2",
        title: "Latte Art",
        subtitle: "New pour",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Sofia Green",
      },
      {
        id: "h-he-3",
        title: "Gear Talk",
        subtitle: "Grinders",
        cover: "from-slate-500 via-slate-600 to-slate-800",
        author: "Leo Carter",
      },
    ],
    "indie-game-builders": [
      {
        id: "h-ig-1",
        title: "Playtest",
        subtitle: "Cozy demo",
        cover: "from-indigo-500 via-blue-500 to-sky-500",
        author: "Evan Lee",
      },
      {
        id: "h-ig-2",
        title: "Soundtrack",
        subtitle: "16-bit",
        cover: "from-fuchsia-500 via-pink-500 to-rose-500",
        author: "Rina Patel",
      },
      {
        id: "h-ig-3",
        title: "Launch",
        subtitle: "Roadmap",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Owen Pike",
      },
    ],
    "trail-ultra": [
      {
        id: "h-tu-1",
        title: "Trail Gear",
        subtitle: "Vest picks",
        cover: "from-emerald-500 via-green-500 to-lime-400",
        author: "Liam Okafor",
      },
      {
        id: "h-tu-2",
        title: "Hill Day",
        subtitle: "Workout",
        cover: "from-sky-500 via-blue-500 to-indigo-500",
        author: "Sara Kim",
      },
      {
        id: "h-tu-3",
        title: "Race Recap",
        subtitle: "Fog run",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Max Hernandez",
      },
    ],
    "vinyl-select": [
      {
        id: "h-vs-1",
        title: "Mood Stacks",
        subtitle: "Shelf tour",
        cover: "from-purple-500 via-violet-500 to-indigo-500",
        author: "Claire Rios",
      },
      {
        id: "h-vs-2",
        title: "Rare Find",
        subtitle: "Rumours",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Devon Park",
      },
      {
        id: "h-vs-3",
        title: "Needle Care",
        subtitle: "Tips",
        cover: "from-emerald-500 via-teal-500 to-cyan-500",
        author: "Lola White",
      },
    ],
    "micro-gardens": [
      {
        id: "h-mg-1",
        title: "Balcony",
        subtitle: "Irrigation",
        cover: "from-teal-500 via-cyan-500 to-sky-500",
        author: "Toby James",
      },
      {
        id: "h-mg-2",
        title: "Herb Lab",
        subtitle: "Low light",
        cover: "from-emerald-500 via-green-500 to-lime-400",
        author: "Hana Sato",
      },
      {
        id: "h-mg-3",
        title: "Greenhouse",
        subtitle: "Time-lapse",
        cover: "from-amber-500 via-orange-500 to-rose-500",
        author: "Marcus Rye",
      },
    ],
  },
};

// Mock data: events (Huddle only)
const communityEvents: Record<string, Event[]> = {
  "north-park-exchange": [
    {
      id: "ev-np-1",
      title: "North Park Night Market",
      date: "Feb 9 - 6:00 PM",
      location: "30th Street Plaza",
      status: "Open RSVP",
    },
    {
      id: "ev-np-2",
      title: "Cafe Crawl",
      date: "Feb 12 - 10:00 AM",
      location: "University Ave",
      status: "12 spots left",
    },
  ],
  "flatiron-families": [
    {
      id: "ev-ff-1",
      title: "Family Picnic",
      date: "Feb 10 - 11:00 AM",
      location: "Madison Square Park",
      status: "Open RSVP",
    },
    {
      id: "ev-ff-2",
      title: "School Tour",
      date: "Feb 14 - 4:30 PM",
      location: "PS 340",
      status: "Waitlist",
    },
  ],
  "riverfront-runners": [
    {
      id: "ev-rr-1",
      title: "Sunrise Tempo Run",
      date: "Feb 6 - 6:00 AM",
      location: "Riverfront Trail",
      status: "Open RSVP",
    },
    {
      id: "ev-rr-2",
      title: "Half Marathon Clinic",
      date: "Feb 13 - 7:00 PM",
      location: "Track House",
      status: "12 spots left",
    },
  ],
  "sunset-market": [
    {
      id: "ev-sm-1",
      title: "Swap Night",
      date: "Feb 8 - 7:30 PM",
      location: "South Congress",
      status: "Open RSVP",
    },
  ],
  "lakeside-living": [
    {
      id: "ev-ll-1",
      title: "Lake Cleanup",
      date: "Feb 15 - 9:00 AM",
      location: "Dock 3",
      status: "Volunteer",
    },
  ],
  "old-town-makers": [
    {
      id: "ev-om-1",
      title: "Maker Pop-up",
      date: "Feb 11 - 5:30 PM",
      location: "Old Town Hall",
      status: "Open RSVP",
    },
  ],
};

// Mock data: trending posts
const trendingPosts: Record<Mode, TrendingPost[]> = {
  huddle: [
    {
      id: "t-h-1",
      title: "Best local movers list",
      community: "Sunset Market",
      metric: "148 comments",
    },
    {
      id: "t-h-2",
      title: "Farmers market vendor map",
      community: "North Park Exchange",
      metric: "98 likes",
    },
    {
      id: "t-h-3",
      title: "Half marathon training plan",
      community: "Riverfront Runners",
      metric: "64 shares",
    },
  ],
  hobbyhub: [
    {
      id: "t-hb-1",
      title: "Favorite film stocks for winter",
      community: "Analog Photography",
      metric: "212 likes",
    },
    {
      id: "t-hb-2",
      title: "Best grinder under $200",
      community: "Home Espresso Lab",
      metric: "127 comments",
    },
    {
      id: "t-hb-3",
      title: "Early access launch checklist",
      community: "Indie Game Builders",
      metric: "74 shares",
    },
  ],
};

// Mock data: active members
const activeMembers: Record<Mode, Member[]> = {
  huddle: [
    {
      id: "m-h-1",
      name: "Lena Ortiz",
      role: "Organizer",
      accent: "from-sky-500 to-indigo-500",
    },
    {
      id: "m-h-2",
      name: "Grant Hill",
      role: "Connector",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      id: "m-h-3",
      name: "Jia Park",
      role: "Helper",
      accent: "from-rose-500 to-pink-500",
    },
    {
      id: "m-h-4",
      name: "Caleb Nguyen",
      role: "Coach",
      accent: "from-amber-500 to-orange-500",
    },
    {
      id: "m-h-5",
      name: "Nora Bailey",
      role: "Guide",
      accent: "from-cyan-500 to-blue-500",
    },
  ],
  hobbyhub: [
    {
      id: "m-hb-1",
      name: "Noah Kerr",
      role: "Creator",
      accent: "from-fuchsia-500 to-pink-500",
    },
    {
      id: "m-hb-2",
      name: "Priya Das",
      role: "Barista",
      accent: "from-amber-500 to-orange-500",
    },
    {
      id: "m-hb-3",
      name: "Evan Lee",
      role: "Builder",
      accent: "from-indigo-500 to-blue-500",
    },
    {
      id: "m-hb-4",
      name: "Max Hernandez",
      role: "Runner",
      accent: "from-emerald-500 to-green-500",
    },
    {
      id: "m-hb-5",
      name: "Claire Rios",
      role: "Collector",
      accent: "from-purple-500 to-violet-500",
    },
  ],
};

// Mock data: topic spotlights (HobbyHub only)
const topicSpotlights: TopicSpotlight[] = [
  {
    id: "ts-1",
    title: "Analog Portrait Week",
    description: "Daily prompts and critique swaps.",
    tag: "Photography",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "ts-2",
    title: "Indie Launch Sprint",
    description: "Share milestones and marketing tips.",
    tag: "Game Dev",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "ts-3",
    title: "Espresso Dial In",
    description: "Help each other perfect shot ratios.",
    tag: "Coffee",
    accent: "from-amber-500 to-orange-500",
  },
];

// Mock data: home feed preview
const homeFeedPosts: Record<Mode, Post[]> = {
  huddle: [
    {
      id: "home-h-1",
      author: "Lena Ortiz",
      content: "Morning update: cafe crawl route is locked. See you at 9am.",
      likes: 42,
      comments: 10,
      shares: 4,
      createdAt: "30m ago",
      timestamp: 1738708800000,
      tags: ["Events"],
    },
    {
      id: "home-h-2",
      author: "Chris Vega",
      content: "Lake cleanup crew hit 22 bags today. Thank you volunteers.",
      likes: 68,
      comments: 12,
      shares: 8,
      createdAt: "2h ago",
      timestamp: 1738704000000,
      tags: ["Community"],
    },
    {
      id: "home-h-3",
      author: "Rae Kim",
      content: "Posting new listings tonight. Drop what you are looking for.",
      likes: 23,
      comments: 7,
      shares: 2,
      createdAt: "4h ago",
      timestamp: 1738696800000,
      tags: ["Market"],
    },
  ],
  hobbyhub: [
    {
      id: "home-hb-1",
      author: "Noah Kerr",
      content: "Drop your favorite film presets. I will compile a sheet.",
      likes: 74,
      comments: 19,
      shares: 12,
      createdAt: "1h ago",
      timestamp: 1738707600000,
      tags: ["Film"],
    },
    {
      id: "home-hb-2",
      author: "Priya Das",
      content: "New espresso logs in the group doc. Taste notes included.",
      likes: 39,
      comments: 11,
      shares: 5,
      createdAt: "3h ago",
      timestamp: 1738700400000,
      tags: ["Coffee"],
    },
    {
      id: "home-hb-3",
      author: "Evan Lee",
      content: "Need feedback on a new pixel art UI kit. Sharing link soon.",
      likes: 51,
      comments: 14,
      shares: 9,
      createdAt: "6h ago",
      timestamp: 1738690800000,
      tags: ["Game Dev"],
    },
  ],
};

// TODO: Replace with API calls once a backend exists.
export function getCommunities(mode: Mode): Community[] {
  return mode === "huddle" ? huddleCommunities : hobbyHubCommunities;
}

// TODO: Replace with API calls once a backend exists.
export function getCommunityBySlug(mode: Mode, slug: string): Community | null {
  return getCommunities(mode).find((community) => community.slug === slug) ?? null;
}

// TODO: Replace with API calls once a backend exists.
export function getPostsForCommunity(mode: Mode, slug: string): Post[] {
  return communityPosts[mode]?.[slug] ?? [];
}

// TODO: Replace with API calls once a backend exists.
export function getHighlights(mode: Mode, slug: string): Highlight[] {
  return communityHighlights[mode]?.[slug] ?? [];
}

// TODO: Replace with API calls once a backend exists.
export function getEventsForCommunity(mode: Mode, slug: string): Event[] {
  if (mode !== "huddle") return [];
  return communityEvents[slug] ?? [];
}

// TODO: Replace with API calls once a backend exists.
export function getUpcomingEvents(mode: Mode): Event[] {
  if (mode !== "huddle") return [];
  return Object.values(communityEvents).flat().slice(0, 3);
}

// TODO: Replace with API calls once a backend exists.
export function getTrendingPosts(mode: Mode): TrendingPost[] {
  return trendingPosts[mode];
}

// TODO: Replace with API calls once a backend exists.
export function getActiveMembers(mode: Mode): Member[] {
  return activeMembers[mode];
}

// TODO: Replace with API calls once a backend exists.
export function getTopicSpotlights(mode: Mode): TopicSpotlight[] {
  return mode === "hobbyhub" ? topicSpotlights : [];
}

// TODO: Replace with API calls once a backend exists.
export function getSuggestedCommunities(mode: Mode): Community[] {
  return getCommunities(mode).slice(0, 3);
}

// TODO: Replace with API calls once a backend exists.
export function getHomeFeedPosts(mode: Mode): Post[] {
  return homeFeedPosts[mode];
}

// TODO: Replace with API calls once a backend exists.
export function getTagFilters(mode: Mode, slug: string): string[] {
  if (mode !== "hobbyhub") return [];
  const posts = getPostsForCommunity(mode, slug);
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}
