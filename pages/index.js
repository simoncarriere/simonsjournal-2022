import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
// Libraries
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";
// Components
import Filters from "../components/Filters";
import PostCard from "../components/PostCard";
import CTA from "../components/cta";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const projects = [
  {
    title: "Bivi - Multiplayer Task App",
    desc: "Where ambitious async teams get thing done together.",
    href: "https://bivi.io",
    // img: "/images/product-7.png",
    img: "/images/bivi4.png",
    logo: "/images/bivi-icon.png",
  },
  {
    title: "Supersaas - Race to MVP",
    desc: "A collection of boilerplates to fast-track your next SAAS project.",
    href: "https://hellosupersaas.com",
    img: "/images/hellosupersaas.png",
    // img: "/images/product-6.png",
    logo: "/images/supersaas-icon.png",
  },
];

export default function Home({ posts }) {
  const [active, setActive] = useState("all");

  return (
    <main>
      {/* Heading */}
      <header className="flex pt-4 xl:items-center xl:justify-between">
        <div className="mx-auto mt-8 xl:basis-2/3 lg:mt-12 md:mx-0">
          <div className="max-w-md pr-1 mx-auto text-center md:max-w-lg md:text-left 2xl:max-w-xl md:m-0">
            <h1 className="leading-tight ">
              Purpose driven full stack developer & product strategist
            </h1>
            <h2 className="mt-3 leading-relaxed text-gray-400 sm:mt-4 xl:mt-4">
              Looking to join a startup on a bold mission. <br /> Based in
              Montreal, available anywhere.
            </h2>
          </div>
          <div className="mt-12 ">
            {/* xl:max-w-2xl */}
            <div className="flex items-center my-auto">
              <h2 className="mr-4">Currently Building</h2>
              <span>
                <button className="btn-icon-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </span>
            </div>
            {/* Projects */}
            <div className="flex flex-col w-full gap-4 mt-6 sm:flex-col md:flex-row xl:pr-16 2xl:mt-6">
              {projects.map((project) => (
                <a
                  href={project.href}
                  className="flex flex-col gap-4 p-5 border shadow-sm animate space-between bg-slate-100 border-slate-200 hover:bg-slate-50 rounded-2xl"
                >
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="w-10 group">
                      <Image
                        src={project.logo}
                        height={40}
                        width={40}
                        className="rounded-lg xl:object-contain group"
                      />
                      <span className="absolute z-10 px-2 py-1 ml-1 text-xs transition-all ease-in-out scale-0 rounded opacity-0 top-7 left-18 duration-400 bg-slate-900/80 text-slate-100 group-hover:scale-100 group-hover:opacity-100">
                        {project.href}
                      </span>
                    </div>
                    <div>
                      <h3 className="block pb-1 text-sm">{project.title}</h3>
                      <p className="h-12 mb-8 text-sm text-gray-500 max-w-72 sm:mb-0">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                  <div className="items-start self-start justify-start flex-1 ">
                    <Image
                      src={project.img}
                      height={200}
                      width={400}
                      className="items-start self-start justify-start object-cover object-top rounded-lg"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden object-fill mt-8 ml-4 basis-1/2 xl:block">
          <Image
            src="/images/simon.jpeg"
            height={2000}
            width={1600}
            className="rounded-lg "
          />
        </div>
      </header>

      {/* Journal Entries */}
      <div className="my-32">
        <div className="flex justify-between w-full items-middle">
          <div className="flex items-center my-auto mb-8">
            <h2 className="mr-4">Journal Entries</h2>
            <span>
              <button className="btn-icon-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <Filters posts={posts} active={active} setActive={setActive} />

        <motion.div
          className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5"
          // animate={{ opacity: active ? 1 : 0 }}
        >
          {
            active === "all"
              ? posts.map((post, idx) => <PostCard key={idx} {...post} />)
              : // .reverse()
                posts
                  .filter((post) => post.category === active)
                  .map((post, idx) => <PostCard key={idx} {...post} />)
            // .reverse()
          }
        </motion.div>
      </div>
      {/* CTA */}
      {/* <CTA /> */}
    </main>
  );
}
