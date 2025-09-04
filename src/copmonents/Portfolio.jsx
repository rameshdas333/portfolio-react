import Slider from "react-slick";
import Container from "./Container";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrows from "./NextArrow";
import PrevArrows from "./PrevArrow";
import portfolio from "../assets/portfolio.jpg";
import ecommerce from "../assets/ecommerce.png"
import innovate from "../assets/inovate_project.png"


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "React, Tailwind, HTML",
      img: portfolio,
      live: "https://portfolio-react-q8yr.vercel.app/",
      github: "https://portfolio-react-aos3.vercel.app/portfolio"
    },
    {
      id: 2,
      title: "Ecommerce Website",
      desc: "React + Redux + Tailwind + Firebase",
      img: ecommerce,
      live: "https://portfolio.com",
      github: "https://github.com/rameshdas333/ecommerce-cit"
    },
    {
      id: 3,
      title: "Innovate Projects",
      desc: "React + TailwindCSS",
      img: innovate,
      live: "https://blog-app.com",
      github: "https://github.com/rameshdas333/Inovate-projects-react"
    },
    {
      id: 4,
      title: "E-commerce App",
      desc: "React + Firebase",
      img: portfolio,
      live: "https://ecommerce.com",
      github: "https://github.com/username/ecommerce-app"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,  
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows />,
     responsive: [
    {
      breakpoint: 1280, // large laptop/desktop
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024, // small laptop
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768, // tablet
      settings: {
        slidesToShow: 1,  
      }
    },
    {
      breakpoint: 320, // mobile
      settings: {
        slidesToShow: 1,  
      }
    }
  ]
  };

  return (
    <div className="bg-[#FFF8F3] relative">
      <Container>
        <Navbar />
        <div className="pt-20   slider-container">
          <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
          
  
           <Slider {...settings}>
            {projects.map(project => (
              <div key={project.id} className="px-3">
                <div className="bg-black p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-52 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:underline"
                    >
                      Live
                    </a>
                    <a
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
       
        </div>
      </Container>
    </div>
  );
}
