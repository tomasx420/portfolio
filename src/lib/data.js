import img_db from "$lib/assets/oudit/db.png";
import oudit1 from "$lib/assets/oudit/oudit1.png";
import oudit2 from "$lib/assets/oudit/oudit2.png";
import oudit3 from "$lib/assets/oudit/oudit3.png";
import fitconnect1 from "$lib/assets/fitconnect/fitconnect1.png";
import fitconnect2 from "$lib/assets/fitconnect/fitconnect2.png";
import fitconnect3 from "$lib/assets/fitconnect/fitconnect3.png";
import fitconnect4 from "$lib/assets/fitconnect/fitconnect4.png";
import ds1 from "$lib/assets/ds/ds1.png";
import ds2 from "$lib/assets/ds/ds2.png";
import ds3 from "$lib/assets/ds/ds3.png";
import ds4 from "$lib/assets/ds/ds4.png";
import vision1 from "$lib/assets/visionaudio/vision1.png";
import vision2 from "$lib/assets/visionaudio/vision2.png";
import vision3 from "$lib/assets/visionaudio/vision3.png";
import vision4 from "$lib/assets/visionaudio/vision4.png";
import ic1 from "$lib/assets/ic/ic1.png";
import ic2 from "$lib/assets/ic/ic2.png";
import ic3 from "$lib/assets/ic/ic3.png";

export const aboutMeSections = {
    intro: `
      My name is Tomas and I’m a 21-year-old student from Lithuania, currently in my third year
      studying Information and Communication Technologies at HZ University in the
      Netherlands. I’d describe myself as confident, humorous, and always open to
      new experiences. I moved to the Netherlands not only for the education but
      also to immerse myself in the culture and meet new people. My passion for
      technology drives me to constantly push boundaries and explore the creative
      side of programming and web design.
    `,
    hobbies: `
      I have a variety of hobbies that help me balance my creative and active
      sides. I regularly go to the gym to stay fit and clear my mind, but I also
      enjoy sports like football, volleyball, and padel, although I play them less
      frequently. Beyond sports, I love producing music, designing sounds, editing
      videos, and building websites. Going for walks is another way I like to
      unwind, allowing me to relax and gather my thoughts. And when I’m not being
      active or creative, you’ll often find me diving into books or learning about
      business.
    `,
    motivation: `
      My journey into programming began when I was still in high school. I started
      playing around with coding just for fun, learning bits and pieces here and
      there. When the pandemic hit, I had more time to dive deeper into it and
      realized how much I enjoyed it. This led me to choose ICT as my field of
      study. The fast-paced, ever-evolving nature of the tech industry excites
      me—it’s challenging but rewarding to stay on top of the latest developments,
      and I thrive in an environment where adaptation is key.
    `,
  };
    export const skillCategories = [
    {
        name: "Programming Languages",
        skills: [
            {
                name: "JavaScript",
                icon: "fa-brands fa-js-square",
                description:
                    "Build dynamic web apps using modern JavaScript, integrate APIs, GPS, and maps.",
                years: "2 years",
            },
            {
                name: "TypeScript",
                icon: "fa-solid fa-code",
                description:
                    "Develop games and scalable apps using TypeScript and object-oriented programming principles.",
                years: "1 years",
            },
            {
                name: "Python",
                icon: "fa-brands fa-python",
                description:
                    "Conduct data analysis and create complex visualizations using Python, with knowledge in machine learning projects.",
                years: "1 year",
            },
            {
                name: "HTML/CSS",
                icon: "fa-brands fa-html5",
                description:
                    "Design responsive, accessible web layouts using HTML, CSS, and Tailwind, with a strong focus on UI/UX.",
                years: "3 years",
            },
        ],
    },
    {
        name: "Frameworks & Libraries",
        skills: [
            {
                name: "Svelte",
                icon: "fa-solid fa-layer-group",
                description:
                    "Build reactive web applications with Svelte, optimized for user experience.",
                years: "1 years",
            },
            {
                name: "Next.js",
                icon: "fa-solid fa-layer-group",
                description:
                    "Build applications using Next.js to efficiently handle API requests and data fetching.",
                years: "Few Months",
            },
            {
                name: "Laravel",
                icon: "fa-solid fa-layer-group",
                description:
                    "Build full-stack websites using Laravel's monolithic architecture and manage databases.",
                years: "1 year",
            },
        ],
    },
    {
        name: "DevOps & Tools",
        skills: [
            {
                name: "Git",
                icon: "fa-solid fa-code-branch",
                description: "Version control with Git, manage repositories, workflows, and set up CI/CD pipelines using GitHub Actions.",
                years: "2 years",
            },
            {
                name: "Docker",
                icon: "fa-brands fa-docker",
                description:
                    "Containerize websites and databases, deployg and manage containers for efficient hosting.",
                years: "0.5 year",
            },
        ],
    },
    {
        name: "Web Platforms",
        skills: [
            {
                name: "WordPress",
                icon: "fa-solid fa-newspaper",
                description:
                    "Create simple WordPress sites with custom themes and basic functionality.",
                years: "Few months",
            },
            {
                name: "Shopify",
                icon: "fa-solid fa-shopping-cart",
                description:
                    "Build and customize Shopify stores, integrate apps to sell digital products.",
                years: "0.5 years",
            },
        ],
    },
    {
        name: "Design & Multimedia",
        skills: [
            {
                name: "Graphic Design",
                icon: "fa-solid fa-paint-brush",
                description:
                    "Design logos, UI elements, and branding assets using Figma and Adobe tools.",
                years: "2+ years",
            },
            {
                name: "UX Design",
                icon: "fa-brands fa-figma",
                description:
                    "Create wireframes and interactive prototypes, applying UX principles while improving usability.",
                years: "1 year",
            },
            {
                name: "Video Editing",
                icon: "fa-solid fa-film",
                description:
                    "Edit videos with complex transitions and effects, using software like After Effects and Premiere Pro.",
                years: "7+ years",
            },
            {
                name: "Photo Editing",
                icon: "fa-solid fa-camera",
                description:
                    "Edit and enhance photos for digital use, including cover art and product images.",
                years: "4+ years",
            },
        ],
    }
];
export const projects = [
    {
        name: "OuDit - Audit Management System",
        type: "university",
        description: `The OuDit project is a web-based audit management system developed for Outokumpu Stainless in Terneuzen. The system centralizes the entire audit process within the organization, which was previously disjointed and scattered across paper forms and custom apps. It facilitates audit planning, the creation of checklists, audit reporting, and tracking actions resulting from audits.`,
        learnings: `A key part of this project was learning how to effectively communicate with non-technical clients and integrating tools like PowerBI.`,
        developed: `I contributed to the database design, created a filter and search system for the audits from scratch, and developed pages for managing teams, departments, and types. I also played a key role in improving the UX design of the website`,
        technologies: ["Laravel", "MySQL", "Bulma", "Chart.js", "PowerBI"],
        images: [
            {
                src: oudit1,
                caption: "OuDit dashboard with audit schedule and data visualizations",
            },
            {
                src: oudit2,
                caption: "Audit list page with search, filters, and status tracking",
            },
            {
                src: oudit3,
                caption:
                    "View of 5S audit type, showing questions with options to edit the audit type and its questions",
            },
            { src: img_db, caption: "Database design for managing audit data" },
        ],
    },

    {
        name: "FitConnect - Student Exercise Network",
        type: "university",
        description: `I learned how to implement GPS integration and optimize for mobile responsiveness. I also gained experience in conducting user testing to refine the UX and create feedback loops. Additionally, I learned how to develop, adjust, and make microservices, how to design APIs, and how to set up a CI/CD pipeline.`,
        learnings: `I learned how to implement GPS integration and optimize for mobile responsiveness. I also gained experience in conducting user testing to refine the UX and create feedback loops. Also, I learned how to set up a CI/CD pipeline.`,
        developed: `I primarily worked on integrating the map with GPS functionality and ensuring the app was responsive across various devices. Additionally, I worked on developing several microservices to support the app's functionalities.`,
        technologies: [
            "SvelteKit",
            "Next.js",
            "Supabase",
            "Tailwind",
            "Docker",
            "GitHub Actions, Figma",
        ],
        images: [
            {
                src: fitconnect3,
                caption:
                    "Map view where users can host and join nearby matches, with live event markers displayed",
            },
            {
                src: fitconnect4,
                caption:
                    "Join event page showing participants, event details, and directions to the match location",
            },
            {
                src: fitconnect1,
                caption:
                    "High-fidelity wireframes of the app, showcasing various user flows",
            },
            {
                src: fitconnect2,
                caption:
                    "Component diagram, showing the API Gateway and its connections to various microservices",
            },
        ],
    },

    {
        name: "AI Visitor Forecasting Project",
        type: "university",
        description:
            "This project aimed to forecast visitor numbers to nature reserves in Zeeland. The goal was to help local authorities balance tourism with conservation by providing data-driven insights into visitor patterns. By using historical data and factors like weather and public holidays, the forecasts enabled better resource allocation to protect natural environments while improving visitor experiences.",
        learnings:
            "This project laid a foundation for my data science skills, giving me practical experience with machine learning models like Random Forest and SARIMAX. It was my first deep dive into data analysis, teaching me how to integrate datasets and analyze external influences like weather on visitor behavior. It also built my confidence in making data-driven decisions.",
        developed:
            "I applied pre-built machine learning models, integrated weather and holiday datasets, and developed visualizations to assess model performance using metrics like MAE and R-squared. I was responsible for ensuring forecasts were accurate and actionable.",
        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "SARIMAX",
            "Random Forest",
        ],
        images: [
            {
                src: ds1,
                caption:
                    "Heatmap of Hourly visitor counts at De Manteling, showing peak visitation times",
            },
            {
                src: ds2,
                caption:
                    "Radial plot showing the average visitor numbers for each day of the week",
            },
            {
                src: ds3,
                caption:
                    "SARIMAX model forecast of visits: training data vs. actual and forecasted visits",
            },
            {
                src: ds4,
                caption: "Distribution of residuals from the SARIMAX model evaluation",
            },
        ],
    },
    {
        name: "Visionaudio.net - E-Commerce for Producers",
        type: "personal",
        description:
            "visionaudio.net is an e-commerce platform made for music producers, offering a range of products like, sample packs, multi-kits, presets and more. The site aims to provide producers with high-quality resources to enhance their music production workflow. With plans for future expansions, the platform is designed to scale and introduce more producer-focused products.",
        learnings:
            "This project helped me gain valuable experience overcoming Shopify's customization challenges with limited documentation and resources. It also introduced me to SEO optimization and it honed my skills in performance optimization and I got to apply my UI/UX/Graphic design experience.",
        developed:
            "I designed and developed the entire platform from scratch. This included customizing a Shopify theme with Liquid, HTML, and CSS, integrating a JavaScript libraries, and overcoming platform limitations with creative solutions to optimize performance and user experience.",
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
        images: [
            {
                src: vision1,
                caption: "Product page of one of the websites kits",
            },
            {
                src: vision2,
                caption: "Display of different sections of one of the product pages",
            },
            {
                src: vision3,
                caption: "Index page of visionaudio.net",
            },
            {
                src: vision4,
                caption: "Mobile view of one of the product pages",
            },
        ],
        liveDemo: "https://visionaudio.net",
    },
    {
        name: "Internet Covers - E-Commerce for Cover Art",
        type: "personal",
        description:
            "Internet Covers is an e-commerce website designed for selling cover art primarily targeted at music producers and artists. The platform aims to provide high-quality cover designs while allowing users to easily get custom artwork for their music.",
        learnings:
            "This was my first project using Shopify, and diving into a new system with its own tools was a bit of a challenge at first but I gained valuable insights along the way. The project opened my eyes to website performance optimization and highlighted the importance of designing a site that turns visitors into customers. I also explored the logistics of running an e-commerce business, like how to delegate tasks to other designers when needed.",
        developed:
            "I built the entire website by customizing a Shopify theme with Liquid, HTML, and CSS. The project involved integrating essential features while addressing platform limitations with creative problem-solving. Although the site is currently on hold, I have plans to improve it and fully commit to its future.",
        technologies: ["Shopify", "Liquid", "HTML", "CSS"],
        images: [
            {
                src: ic1,
                caption: "Homepage showcasing various artwork",
            },
            {
                src: ic2,
                caption: "Cover art service options",
            },
            {
                src: ic3,
                caption: "Product page of the classic tier",
            },
        ],
    },
];
