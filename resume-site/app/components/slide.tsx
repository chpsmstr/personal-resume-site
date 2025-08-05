import Link from "next/link";
import Image from "next/image";

export default function Slide({
  title,
  duration,
  description,
  image,
  technologies,
  readMore,
  repoLink,
  viewSite,
}: {
  title: string;
  duration?: string;
  description: string;
  image: string;
  technologies?: string[];
  readMore?: string;
  repoLink?: string;
  viewSite?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
      <div className="slide-image">
        <Image src={image} alt={title} width={500} height={500} style={{objectFit: "contain"}} className="w-full h-auto rounded-lg" />
      </div>
      <div className="slide-content justify-center ">
        <h3 className="font-bold mb-2 text-lg md:text-2xl">{title} | {duration}</h3>
        <p className="mb-4 text-sm md:text-2xl">{description}</p>
        {technologies && (
          <div className="technologies mb-4 flex flex-wrap">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-purple-800 text-white p-1 rounded-sm m-1 text-sm md:text-lg">
                #{tech}
              </span>
            ))}
          </div>
        )}
        {readMore && (
          <Link
            href={readMore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        )}
        {repoLink && (
          <Link
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-4"
          >
            View Repository
          </Link>
        )}
        {viewSite && (
          <Link
            href={viewSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-4"
          >
            View Site
          </Link>
        )}
      </div>
    </div>
  );
}
