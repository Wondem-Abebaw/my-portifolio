import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={300}
          height={200}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-500 hover:underline"
        >
          Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
