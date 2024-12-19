import React from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
     <div className="w-full lg:w-1/4">
       {/* คลิกที่รูปภาพแล้วไปยังเว็บไซต์ */}
       <a href={project.link} target="_blank" rel="noopener noreferrer">
         <img
           src={project.image}
           width={150}
           height={150}
           alt={project.title}
           className="mb-6 rounded cursor-pointer"
         />
       </a>
     </div>
     <div className="w-full max-w-xl lg:w-3/4">
       {/* คลิกที่ชื่อโปรเจกต์แล้วไปยังเว็บไซต์ */}
       <a href={project.link} target="_blank" rel="noopener noreferrer">
         <h6 className="mb-2 font-semibold text-blue-500 hover:underline">
           {project.title}
         </h6>
       </a>
       <p className="mb-4 text-neutral-400">{project.description}</p>
       {/* แสดงเทคโนโลยี */}
       {project.technologies.map((tech, index) => (
         <span
           key={index}
           className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
         >
           {tech}
         </span>
       ))}
     </div>
   </div>
   
        ))}
      </div>
    </div>
  );
};

export default Project;
