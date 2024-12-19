import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png"
import project3 from "../assets/projects/project-3.png"

export const HERO_CONTENT = `As a recent graduate of the Generation Bootcamp, I am a junior software developer equipped
with strong technical skills in web development. I am looking for new challenges where I can
apply my knowledge and continue learning and growing.
`;

export const ABOUT_TEXT = `Hello, my name is Burhan. I graduated from Srinakharinwirot University with a degree in Logistics Engineering. I have an interest and experience in developing web applications, both front-end and back-end. I am proficient in JavaScript, HTML, CSS, Node.js, and React.js, and have experience working with MySQL and MongoDB databases.

Since graduating, I have continued to pursue my interest in programming by self-studying during my free time. However, I feel that I still have room for improvement, which is why I decided to join the Generation Bootcamp to further develop my skills. My interest in this field was sparked by working on mini-projects related to programming; I felt a great sense of satisfaction when the programs I created could be put to practical use.`


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://tea-blend.vercel.app/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "MongoDB"],
  },
  {
    title: "Weather-app",
    link: "https://weather-app-phi-liart-72.vercel.app/",    
    image: project2,
    description:
      "A weather application developed using HTML, CSS, and React that provides real-time weather information, including temperature, humidity, wind speed, ",
    technologies: ["HTML", "CSS", "React", ],
  },
  {
    title: "Portfolio-web",
    link: "https://my-web-portfolio-xi.vercel.app/",    
    image: project3,
    description:
      "A sleek, responsive portfolio web application showcasing various projects and skills. This portfolio highlights web development expertise, with a focus on clean design and easy navigation. It serves as an interactive resume, allowing visitors to explore the projects, technologies used, and contact details.",
    technologies: ["HTML", "Tailwind", "React", ],
  },
 
];

export const CONTACT = {
  address: "Yala,Thailand ",
  phoneNo: "+66 8037 972 68",
  email: "burahan206@gmail.com",
};
