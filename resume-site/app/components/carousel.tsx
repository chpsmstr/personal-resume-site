import Link from "next/link";
import Slide from "./slide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";

export default function Carousel() {
  return (
    <Swiper
    modules={[Pagination, Navigation, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={true}
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Slide 
            title="Insurance Review and Inspection System"
            duration="Sept 2024 – Apr 2025"
            description="UBC Capstone Project. Developed a web application for reviewing and comparing insurance documents. Created custom authentication, handled REST API development and fullstack implementation, created unit tests, and a CI Pipeline with GitHub Actions. Handled deployment to linux server with Docker and nginx."
            image="/images/iris.png"
            technologies={[
              "React",
              "Javascript",
              "Tailwind CSS",
              "Node.js",
              "MySQL",
              "Docker",
              "GitHub Actions",
              "Nginx",
              "Go | Gin",
              "Microservices",
              "REST APIs",
            ]}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slide
          title="HEAT Robotics 2025"
          duration="Sept 2024 – Apr 2025"
          description="Vice President, Software Team. Created ROS2 nodes to send and receive Mavlink data packets over radio. Set up bash install scripts to streamline development process for other developers. Wrote detailed documentation for future developer reference. Form and Function 3rd Place MassRobotics 2025."
          image="/images/EMBR.jpg"
          technologies={[
            "Python",
            "Linux",
            "ROS2",
            "Mavlink",
            "Bash",
            "Documentation",
          ]}
          readMore="https://www.linkedin.com/pulse/form-function-robotics-challenge-2025-winners-massrobotics-pxnoc/?trackingId=RaAGLfCVMSyLJMOljIZnhQ%3D%3D"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slide
          title="iGEM Wiki 2022"
          duration="2022"
          description="My first ever web development project. Developed a wiki for the UBCO iGEM team to showcase their project. Written in mostly vanilla HTML, CSS, and JS. The team won a Gold Medal for the best Wiki at the 2022 iGEM Grand Jamboree in Paris."
          image="/images/igem.webp"
          technologies={["HTML", "CSS", "JavaScript"]}
          readMore="https://news.ok.ubc.ca/2023/07/10/undergraduate-students-think-big-with-living-light-bulb/"
          viewSite="https://2022.igem.wiki/ubc-okanagan/"
        />
      </SwiperSlide>

      {/* <SwiperSlide>
        <Slide
          title="Phordy"
          duration="2022 May"
          description="4D Game built using Unity and C# for BC Hacks 2022. "
          image="images/bchacks.webp"
          technologies={["Unity", "C#"]}
        />
      </SwiperSlide> */}
    </Swiper>
  );
}
