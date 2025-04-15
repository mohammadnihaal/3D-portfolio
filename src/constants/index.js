const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 4, suffix: "+", label: "Months of Experience, in AWS Cloud" },
    { value: 3, suffix: "+", label: "Global Certifications" },
    { value: 4, suffix: "+", label: "Completed Projects" },
    { value: 78, suffix: "%", label: "CGPA" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "AWS Cloud",
        modelPath: "/models/aws_logo.glb",
        scale: 0.35,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Linux",
        modelPath: "/models/tux.glb",
        scale: 0.04,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
];

const expCards = [
    {
        review: "I completed the AWS re/Start program, where I successfully finished all Knowledge Checks (KCs) and hands-on labs within the scheduled time." +
            " Throughout the program, I gained practical experience working with core AWS services and developed a strong foundation in cloud concepts, security, networking, and deployment." +
            " Additionally, I received comprehensive training for the AWS Certified Cloud Practitioner exam.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "AWS Re/Start Trinee",
        date: "January 2025 - April 2025",
        responsibilities: [
            "Managed AWS infrastructure including EC2, S3, RDS, and IAM, ensuring security and performance.",
            "Configured VPC networking with subnets, route tables, security groups, and load balancers.",
            "Monitored and troubleshot cloud resources using CloudWatch, CloudTrail, and AWS Config.",
            "Worked with MySQL and DynamoDB, performing database management and optimization.",
        ],
    },
    {
        review: "I completed a virtual Cybersecurity Internship led by IBM professionals, where I gained a strong understanding of cybersecurity fundamentals." +
            " During the internship, I also earned a Cybersecurity Certification through IBM SkillBuild. After the program concluded," +
            " I applied my knowledge by developing two mini projects—one on Steganography and another on building a Keylogger—further enhancing my practical skills in the field.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Cyber Security Intern",
        date: "May 2024 - july 2024",
        responsibilities: [
            " Developed and tested steganography techniques in Python, enhancing data security by securely encoding and decoding hidden data within images.",
            "Utilized cybersecurity tools on Kali Linux to conduct vulnerability assessments, identifying and addressing critical security flaws.",
            "learned the fundamentals of cybersecurity, including encryption, authentication, and network security.",
        ],
    },

];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/mohammad-nihaal-a2a530232",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "github",
        url: "https://github.com/mohammadnihaal",
        imgPath: "/images/git.svg",
    },
    {
        name: "youtube",
        url: "https://www.youtube.com/@ShagsBro",
        imgPath: "/images/youtube.svg",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};