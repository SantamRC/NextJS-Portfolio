import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Santam",
  lastName: "Roy Choudhury",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "santamdev404@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Bengali"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SantamRC",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/src00/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Santam, a software engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> products and innovate creativity.cd 
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Santam — I build smooth UIs, wire up powerful backends, and love bringing ideas to life. Whether it’s a slick React Native app or a full-stack web platform, I move fast, ship clean, and keep the user at the center. Just me, code, and a caffeine-fueled roadmap.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        timeframe: "November, 2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>Built scalable backend systems using Python (Django) and GoLang; reduced API response times by 30% through advanced caching, optimized queries, and async processing.</>,
          <>Designed microservices architectures with Docker and Kubernetes, boosting fault isolation, scalability, and deployment efficiency.</>,
          <>Automated CI/CD pipelines with GitHub Actions, Jenkins, Gradle, and Fastlane; reduced deployment times and manual effort by 60%.</>,
          <>Developed high-performance cross-platform mobile apps (Android/iOS) using React Native, integrating native modules, Kotlin-based SDKs, and secure flows.</>,
          <>Implemented secure authentication systems including OAuth 2.0, JWT, SSO; protected web/mobile routes using React Router and platform-specific techniques.</>,
          <>Built custom Android SDKs for payments, SSO, and authentication; ensured secure data transmission via SSL pinning, ProGuard, R8, and iOS ATS policies.</>,
          <>Delivered responsive React.js frontends, integrating REST APIs with lazy loading, code splitting, and Emotion (CSS-in-JS) for enhanced UX.</>,
          <>Utilized Redux, Context API, and TypeScript to build modular, reusable, and performant components with clean architecture and SOLID principles.</>,
          <>Integrated RESTful APIs, GraphQL, and WebSockets, enabling real-time communication and reducing server polling.</>,
          <>Leveraged PostgreSQL, MongoDB, and Redis, fine-tuning indexes and queries for optimal data access and system responsiveness.</>,
          <>Achieved 85%+ test coverage through robust automated testing using Jest, Detox, Mocha, Jasmine, and promoted Test-Driven Development (TDD) practices.</>,
          <>Optimized mobile performance using lazy loading, native animation drivers, and memory profiling, reducing Android load times by 30%.</>,
          <>Utilized Webpack and ParcelJS for advanced bundling and build optimizations in both web and mobile dev workflows.</>,
          <>Led system monitoring and incident response using Prometheus, Grafana, and ELK Stack, reducing downtime by 30% and improving root cause analysis.</>,
          <>Collaborated in Agile teams with backend devs, designers, QA, and PMs, actively participating in architecture/code reviews, sprints, and peer programming.</>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "National Institute of Technology, Durgapur, India",
        description: <>Studied Computer Engineering</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
