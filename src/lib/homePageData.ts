export const homePageData = {
  name: "Samuel Leyva",
  principalData:
    "I am a university student focused on developing my skills as a Full Stack developer. I have worked on academic and personal projects using languages such as C, Java, Go, JavaScript, and Kotlin (Compose and XML), as well as web frameworks like Vue.js. I enjoy learning new technologies, adapting quickly, and collaborating with others. I am looking for an opportunity to apply my knowledge in a professional environment and continue growing as a software developer.",
  roles: ["Web design", "API build", "App design"],
};

export type TechCategory =
  "all" | "languages" | "frameworks" | "tools" | "design";

interface TechItemSkeleton {
  name: string;
  category: TechCategory;
  description: string;
  iconName: string;
  proficiency: number;
  color: string;
}

interface TechItem extends TechItemSkeleton {
  index: number;
}

const TechStackList: TechItemSkeleton[] = [
  // Languages
  {
    name: "C",
    category: "languages",
    description: "My foundation — the language where it all started",
    iconName: "linux",
    proficiency: 100,
    color: "from-blue-400/20 to-blue-600/20",
  },
  {
    name: "C++",
    category: "languages",
    description:
      "Extends my C foundations applying object-oriented programming",
    iconName: "linux",
    proficiency: 80,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "Java",
    category: "languages",
    description:
      "One of my favorites — I feel very comfortable building applications here",
    iconName: "linux",
    proficiency: 90,
    color: "from-orange-400/20 to-red-400/20",
  },
  {
    name: "TypeScript",
    category: "languages",
    description: "My preference for web development",
    iconName: "linux",
    proficiency: 95,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "JavaScript",
    category: "languages",
    description: "My foundation for web development",
    iconName: "linux",
    proficiency: 90,
    color: "from-yellow-400/20 to-yellow-500/20",
  },
  {
    name: "Go",
    category: "languages",
    description:
      "My favorite for CLI tools and backend — love its syntax and creative feel",
    iconName: "linux",
    proficiency: 85,
    color: "from-cyan-400/20 to-cyan-500/20",
  },
  {
    name: "Clojure",
    category: "languages",
    description:
      "During my internship in Nubank i learned all about Clojure and working with it, i loved functional programming!",
    iconName: "linux",
    proficiency: 95,
    color: "from-teal-400",
  },
  {
    name: "Kotlin",
    category: "languages",
    description:
      "My mobile dev foundation — prefer Compose, but comfortable with traditional XML too",
    iconName: "linux",
    proficiency: 80,
    color: "from-purple-400/20 to-violet-500/20",
  },
  {
    name: "Python",
    category: "languages",
    description:
      "General purpose — scripts for automation and foundational projects",
    iconName: "linux",
    proficiency: 60,
    color: "from-yellow-400/20 to-green-400/20",
  },
  {
    name: "C#",
    category: "languages",
    description: "Used for Windows desktop application development",
    iconName: "linux",
    proficiency: 65,
    color: "from-purple-500/20 to-pink-400/20",
  },
  // Frameworks
  {
    name: "Vue.js",
    category: "frameworks",
    description: "Built several web projects here",
    iconName: "linux",
    proficiency: 80,
    color: "from-green-400/20 to-emerald-500/20",
  },
  {
    name: "React",
    category: "frameworks",
    description:
      "My preferred library for building components — very familiar and comfortable",
    iconName: "linux",
    proficiency: 85,
    color: "from-cyan-400/20 to-blue-400/20",
  },
  {
    name: "Flutter",
    category: "frameworks",
    description:
      "Interesting framework — built some apps, looking forward to going deeper",
    iconName: "linux",
    proficiency: 60,
    color: "from-blue-400/20 to-sky-400/20",
  },
  {
    name: "Node.js",
    category: "frameworks",
    description: "Built several backend apps and REST APIs with it",
    iconName: "linux",
    proficiency: 80,
    color: "from-green-500/20 to-green-600/20",
  },
  {
    name: "Spring Boot",
    category: "frameworks",
    description: "Developed complex API backends — great for microservices",
    iconName: "linux",
    proficiency: 75,
    color: "from-green-400/20 to-lime-400/20",
  },
  {
    name: "Next.js",
    category: "frameworks",
    description:
      "My continuation of React — building modern web apps, started 6 months ago and loving it",
    iconName: "linux",
    proficiency: 80,
    color: "from-neutral-400/20 to-neutral-600/20",
  },
  {
    name: "Expo",
    category: "frameworks",
    description:
      "I learned to work with expo as a framework to develop apps that work both in android and in web",
    iconName: "expo",
    proficiency: 75,
    color: "from-neutral-400/20 to-neutral-600/20",
  },
  // Tools
  {
    name: "Git",
    category: "tools",
    description: "Part of my daily workflow",
    iconName: "linux",
    proficiency: 85,
    color: "from-orange-400/20 to-red-400/20",
  },
  {
    name: "SQL Databases",
    category: "tools",
    description:
      "PostgreSQL and MySQL for serious projects and university work",
    iconName: "linux",
    proficiency: 80,
    color: "from-blue-400/20 to-sky-500/20",
  },
  {
    name: "NoSQL Databases",
    category: "tools",
    description: "Built MongoDB databases for mobile applications",
    iconName: "linux",
    proficiency: 60,
    color: "from-green-400/20 to-emerald-400/20",
  },
  {
    name: "Google Cloud",
    category: "tools",
    description: "Certified in the fundamentals",
    iconName: "linux",
    proficiency: 65,
    color: "from-blue-400/20 to-yellow-400/20",
  },
  {
    name: "Azure",
    category: "tools",
    description: "Developed basic Azure projects",
    iconName: "linux",
    proficiency: 45,
    color: "from-sky-400/20 to-blue-500/20",
  },
  {
    name: "Linux Shell",
    category: "tools",
    description: "Essential for my growth as a developer",
    iconName: "linux",
    proficiency: 80,
    color: "from-yellow-400/20 to-amber-400/20",
  },
  {
    name: "Docker",
    category: "tools",
    description: "Built containerized projects for consistent deployments",
    iconName: "linux",
    proficiency: 80,
    color: "from-blue-400/20 to-blue-500/20",
  },
  // Design
  {
    name: "Adobe Photoshop",
    category: "design",
    description: "Image editing and graphic design",
    iconName: "linux",
    proficiency: 95,
    color: "from-blue-500/20 to-indigo-600/20",
  },
  {
    name: "Adobe Illustrator",
    category: "design",
    description: "Vector graphics and illustration",
    iconName: "linux",
    proficiency: 90,
    color: "from-orange-400/20 to-yellow-500/20",
  },
  {
    name: "Blender",
    category: "design",
    description: "3D modeling and rendering",
    iconName: "linux",
    proficiency: 80,
    color: "from-orange-400/20 to-amber-500/20",
  },
  {
    name: "Maya",
    category: "design",
    description: "3D animation and modeling",
    iconName: "linux",
    proficiency: 80,
    color: "from-teal-400/20 to-cyan-500/20",
  },
  {
    name: "Adobe InDesign",
    category: "design",
    description: "Layout and editorial design",
    iconName: "linux",
    proficiency: 80,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "3DS Max",
    category: "design",
    description: "3D modeling and visualization",
    iconName: "linux",
    proficiency: 70,
    color: "from-blue-400/20 to-violet-400/20",
  },
  {
    name: "Figma",
    category: "design",
    description: "UI/UX design and prototyping",
    iconName: "linux",
    proficiency: 75,
    color: "from-purple-400/20 to-pink-400/20",
  },
];

export const getTechItems: () => TechItem[] = () =>
  TechStackList.map((item, index) => {
    return {
      ...item,
      index: index,
    };
  });
