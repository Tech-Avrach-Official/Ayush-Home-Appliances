import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const blogs = [
  {
    id: 1,
    title: "RO Service in Indore",
    slug: "/ro-service-in-indore",
    description:
      "Get reliable RO service in Indore for better water quality, smooth performance and long-lasting appliance care.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788852203/f3b423d2-a7d6-421a-b479-372285dcee4c_lbabfk.png",
    category: "RO Services",
  },
  {
    id: 2,
    title: "Water Purifier Service in Indore",
    slug: "/water-purifier-service-in-indore",
    description:
      "Keep your water purifier clean, efficient and reliable with professional servicing for your home.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853123/4415cde2-25bc-4b45-aa53-8b4deaf0c117_rx8s78.png",
    category: "Water Purifier",
  },
  {
    id: 3,
    title: "Water Purifier Repair in Indore",
    slug: "/water-purifier-repair-in-indore",
    description:
      "Expert water purifier repair in Indore for filter, water flow, leakage and other common appliance issues.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853599/b626fa47-5008-484d-b1de-8c7516cc87c4_of5jax.png",
    category: "Water Purifier",
  },
  {
    id: 4,
    title: "RO Installation in Indore",
    slug: "/ro-installation-in-indore",
    description:
      "Get professional RO installation in Indore with proper setup, connections and performance checks.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853895/91a99979-6469-4788-bf02-77ca70f28dbd_usyasr.png",
    category: "RO Services",
  },
  {
    id: 5,
    title: "Kitchen Chimney Service in Indore",
    slug: "/kitchen-chimney-service-in-indore",
    description:
      "Professional kitchen chimney service to maintain efficient suction, cleaner filters and better kitchen ventilation.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854297/280917d8-49b1-4f96-89cd-a94d64f28ab0_d8jj0u.png",
    category: "Chimney Services",
  },
  {
    id: 6,
    title: "Kitchen Chimney Repair in Indore",
    slug: "/kitchen-chimney-repair-in-indore",
    description:
      "Reliable kitchen chimney repair in Indore for common issues including suction, motor and electrical problems.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854511/a8a9ff23-7880-4cab-b3d3-a703592d486a_amh0dg.png",
    category: "Chimney Services",
  },
  {
    id: 8,
    title: "Kitchen Chimney Cleaning in Indore",
    slug: "/kitchen-chimney-cleaning-in-indore",
    description:
      "Professional chimney cleaning services to remove grease and buildup and help your kitchen chimney perform better.",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854701/19b71d8b-ed4c-4c04-87c9-a21c98e41655_hxkyrd.png",
    category: "Chimney Services",
  },
];

const Blog = () => {
  return (
 <>
 <Navbar/>
    <section className="w-full bg-white px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.slug}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="w-full aspect-[5/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">

                {/* Category */}
                <p className="text-[11px] font-bold tracking-[0.15em] text-blue-600 uppercase mb-2">
                  {blog.category}
                </p>

                {/* Title */}
                <h2 className="
                  text-lg
                  md:text-xl
                  font-extrabold
                  leading-tight
                  text-blue-950
                  group-hover:text-blue-600
                  transition-colors
                ">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                ">
                  {blog.description}
                </p>

                {/* Read More */}
                <div className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-blue-600
                ">
                  Read More
                  <ArrowRight
                    className="
                      w-4 h-4
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
 </>
  );
};

export default Blog;