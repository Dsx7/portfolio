export const portfolioData = {
    personal: {
        name: "Al Helal Mohammod Bayijid",
        photo: "/hero.webp",
        resumeUrl: "https://drive.google.com/file/d/1_ZwvdCgBUxXwkEHiEiitkhR6EMi0xbFk/view?usp=sharing",
        email: "thebayijid@gmail.com",
        phone: "+8801798116848",
        social: {
            github: "https://github.com/Dsx7",
            linkedin: "https://www.linkedin.com/in/bayazid603/",
            facebook: "https://www.facebook.com/Bayijid",
        },
        about: {
            introduction: "I build clean, responsive, and user-friendly web interfaces using React and Tailwind CSS, while exploring the MERN stack to create full-stack applications.",
            intro: "I build clean, responsive, and user-friendly web interfaces using React and Tailwind CSS, while exploring the MERN stack to create full-stack applications.",
        }
    },

    // --- THIS IS THE KEY PART TO FIX "NOTHING SHOWING" ---
    skills: {
        frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js", "Redux", "Framer Motion"],
        backend: ["Node.js", "Express", "MongoDB", "Firebase", "REST API"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Chrome DevTools"]
    },
    // -----------------------------------------------------

    education: [{
            degree: "Complete Web Development",
            institution: "Programming Hero",
            year: "2025 June to Until Now",
            details: "Learn Web Development."
        },
        {
            degree: "Graphic Design, Level- 3",
            institution: "NATIONAL SKILLS DEVELOPMENT AUTHORITY (NSDA)",
            year: "2024 Dec to 2025 March",
            details: "Competent with Level-3."
        },
        {
            degree: "Diploma In Agriculture",
            institution: "Shahidul Bulbul Karigori College, Kamarkhana, Sirajganj",
            year: "2020-2024",
            details: "Complete with 3.77 out of 4.00."
        },
        {
            degree: "SSC",
            institution: "Technical School & College, Sirajganj",
            year: "2018-2020",
            details: "Complete SSC With A."
        },
    ],
    // experience: [{
    //     role: "Frontend Developer",
    //     company: "Tech Solutions",
    //     duration: "2023 - Present",
    //     description: "Building responsive web applications using React and Tailwind."
    // }],
    projects: [{
            id: "1",
            name: "FinanceFlow",
            image: "https://i.ibb.co.com/4gPm9MtX/finance.png",
            sshortDesc: "A smart personal finance tracker with visual analytics and secure transaction management.",

            fullDesc: "FinanceFlow empowers users to take control of their financial health. It provides an intuitive interface for tracking daily income and expenses, visualizing spending habits through interactive charts, and managing personal budgets securely with real-time insights.",

            features: [
                "Interactive Dashboard with Real-time Balance Updates",
                "Visual Expense Reports (Pie & Bar Charts)",
                "Secure Authentication (Firebase & JWT)",
                "Advanced Transaction Filtering & Sorting",
                "Responsive Dark & Light Mode UI"
            ],
            stack: ["React", "Tailwind", "Node.js", "MongoDB", "Firebase"],
            liveLink: "https://financeflow-lovat.vercel.app/",
            repoLink: "https://github.com/Dsx7/financeflow",
            // --- NEW FIELDS REQUIRED ---
            challenges: "Implementing secure API communication using JWT and Axios Interceptors was a significant hurdle. Synchronizing the frontend state with the backend while ensuring that unauthorized users could not bypass protected routes required precise middleware configuration.",
            futurePlans: "I aim to integrate an AI-driven financial advisor to analyze spending habits and offer personalized saving tips. Additionally, I plan to add a feature for exporting financial reports to PDF and Excel formats for better record-keeping."
        },
        {
            id: "2",
            name: "Local Chef Bazaar",
            image: "https://i.ibb.co.com/27jQTvbJ/image.webp",
            "shortDesc": "A prototype for LocalChefBazaar, a MERN-based marketplace connecting home cooks with customers for homemade meals. Currently features a static front-end landing page with a detailed project plan but minimal functional implementation.",
            "fullDesc": "LocalChefBazaar is a conceptual full-stack web application designed as a three-sided marketplace for homemade meals, built with the MERN (MongoDB, Express.js, React, Node.js) stack. The project consists of a React frontend client deployed on Vercel and a Node.js/Express backend server repository. While the live site presents a static marketing page with placeholder content, the accompanying GitHub documentation outlines an ambitious plan for role-based dashboards (Admin, Chef, Customer), meal management, an ordering system with Stripe payments, and user reviews. The significant gap between the detailed feature documentation and the single-commit, skeletal codebase indicates the project is in a very early planning and prototyping phase.",
            "features": [
                "Static, Responsive Landing Page: A modern front-end built with React and Tailwind CSS, showcasing the platform's intended value proposition.",
                "Comprehensive Project Blueprint: A well-structured README detailing a complete feature set including authentication, meal CRUD operations, order processing, and interactive dashboards.",
                "Role-Based Access Design: Planned system for three distinct user roles (Customer, Chef, Admin) with specific permissions and views.",
                "Planned Payment & Management Systems: Architectural plans for Stripe integration and data management using MongoDB."
            ],
            stack: ["React", "Tailwind", "Firebase", "Node.js"],
            liveLink: "https://ph-11-client.vercel.app/",
            repoLink: "https://github.com/Dsx7/PH-11-Client",
            // --- NEW FIELDS REQUIRED ---
            "challenges": "Major gap between detailed documentation and actual implementation. The live site is a static frontend with broken features and placeholder content, lacking a functional backend, database, or authentication system.",
            "futurePlans": "Execute the documented plan by: 1) Building the backend API and database, 2) Implementing authentication and core features (meals, orders, dashboards), and 3) Integrating payments and populating the site with real content."
        },
        {
            id: "3",
            name: "BhootCam - The Ultimate Paranormal Streaming Platform",
            image: "https://i.ibb.co.com/VYWMTTRw/next.webp",
            shortDesc: "A full-stack MERN streaming platform designed as a cinematic digital library for paranormal audio stories, featuring a Netflix-style UI and robust content management.",

            fullDesc: "BhootCam is a modern, immersive web application built to transform how horror enthusiasts access audio content. Moving away from traditional static file lists, this project utilizes the MERN stack (MongoDB, Express, React, Node.js) to deliver a responsive, app-like experience. The platform features server-side pagination for scalability, Firebase authentication for security, and complex MongoDB aggregation pipelines to power an analytical admin dashboard. The frontend is crafted with Tailwind CSS to ensure a high-performance, visually stunning interface with glassmorphism effects and skeleton loading states.",

            features: [
                "Cinematic UI/UX: A fully responsive interface featuring a dynamic hero slider, horizontal trending scrolls, and glassmorphism design elements.",
                "Optimized Performance: Implements server-side pagination, skeleton loaders, and efficient API queries to handle thousands of episodes without lag.",
                "Role-Based Access Control (RBAC): Secure authentication via Firebase with custom middleware to separate 'Admin' privileges (CRUD, Analytics) from 'User' features (Wishlist).",
                "Admin Dashboard & Analytics: Real-time visualization of platform data, including total views and category distribution using MongoDB aggregation pipelines.",
                "Advanced Search & Filtering: A robust search engine that allows users to filter by category, search by keywords, and sorts results by date automatically."
            ],
            stack: [
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase Auth",
                "Vercel"
            ],
            liveLink: "https://bhoot-cam-next.vercel.app",
            repoLink: "https://github.com/Dsx7/Bhoot.cam-next",
            // --- NEW FIELDS REQUIRED ---
            challenges: "One significant challenge was managing data consistency and sorting for the archive. Initially, dates stored as strings caused incorrect chronological ordering in the 'Latest Episodes' section. I resolved this by enforcing strict type casting in the backend to ensure all dates are stored as BSON Date objects, enabling precise sorting. Additionally, I optimized the API payload size by refactoring the 'Explore' page from client-side slicing to server-side limit/skip pagination, significantly reducing initial load time.",

            futurePlans: "I plan to implement a user comment and rating system to foster community interaction. Additionally, I aim to convert the application into a Progressive Web App (PWA) to allow for offline listening and background playback on mobile devices."
        },
        {
            id: "4",
            name: "Photo Card Generator",
            image: "https://i.ibb.co.com/SXyMRpk2/pcg.png",
            shortDesc: "A web-based tool to generate viral, professional news-style photo cards instantly from your browser.",

            fullDesc: "Photo Card Generator is a lightweight web application designed to create realistic news photo cards similar to those used by popular television channels and news outlets. Ideal for content creators, meme-makers, and social media enthusiasts, the tool allows users to overlay custom headlines, sub-headlines, and ticker texts onto famous news templates (like Jamuna TV, Somoy TV, and BTV) without any rendering delay.",

            features: [
                "Instant Real-time Generation: Users can see updates to their cards immediately as they type or modify settings.",
                "Multiple Famous Templates: Includes pre-designed styles for Jamuna TV, Somoy TV, BTV, NTV, and Amader Desh.",
                "Flexible Image Uploads: Supports drag-and-drop or standard file uploads for background images.",
                "Custom Text Controls: Easily editable fields for headlines, sub-headlines, and scrolling ticker-style text.",
                "Fully Responsive Design: Optimized for both desktop and mobile devices to allow creation on the go."
            ],
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://photo-card-generator.pages.dev/",
            repoLink: "https://github.com/Dsx7/Photo-Card-Generator",
            // --- NEW FIELDS REQUIRED ---
            challenges: "One of the primary technical challenges involved ensuring that custom text scales correctly across different template layouts while maintaining the visual authenticity of the original news brands. Additionally, implementing a seamless, real-time preview that handles various image aspect ratios without distorting the final output required precise CSS and DOM manipulation.",

            futurePlans: "The project aims to expand its library by adding more international and local news channel templates. Future updates may also include advanced text styling options, additional graphical overlays (like 'Breaking News' badges), and the ability to export cards directly to social media platforms."
        },
    ]
};