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
    desc: "Where async teams plan and get things done together",
    href: "https://bivi.io",
    img: "/images/product-7.png",
  },
  {
    title: "Supersaas - Race to MVP",
    desc: "A collection of boilerplates to fast-track your next SAAS project.",
    href: "https://hellosupersaas.com",
    img: "/images/product-6.png",
  },
];

export default function Home({ posts }) {
  const [active, setActive] = useState("all");

  return (
    <main>
      {/* Heading */}
      <header className="flex mt-12 xl:items-center xl:justify-between md:mt-16 xl:mt-0">
        <div className="mx-auto mt-4 lg:mx-0">
          <div className="max-w-md pr-1 mx-auto text-center lg:text-left 2xl:max-w-xl lg:m-0">
            <h1 className="leading-tight ">
              Purpose driven full stack developer & product strategist
            </h1>
            <h2 className="mt-3 leading-relaxed text-gray-400 sm:mt-4 xl:mt-4">
              Looking to join a startup on a bold mission. <br /> Based in
              Montreal, available anywhere.
            </h2>
          </div>
          <div className="mt-12 xl:max-w-2xl">
            <div className="flex items-center my-auto">
              <h2 className="mr-4">Currently Building</h2>
              <Link href="/now">
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
              </Link>
            </div>
            {/* Projects */}
            <div className="justify-between w-full gap-6 mt-6 lg:gap-6 xl:pr-16 sm:flex 2xl:mt-6">
              {projects.map((project) => (
                <a
                  href={project.href}
                  className="w-full basis-1/2 card xl:w-60 2xl:w-64"
                >
                  <div className="">
                    <Image src={project.img} height={400} width={600} />
                  </div>
                  <div className="">
                    <h3 className="block my-1 2xl:my-2">{project.title}</h3>
                    <p className="mb-8 text-sm leading-6 text-gray-400 sm:mb-0">
                      {project.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden object-fill py-8 pl-12 xl:block basis-1/2">
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
            <Link href="/posts">
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
            </Link>
          </div>
        </div>
        <Filters posts={posts} active={active} setActive={setActive} />

        <motion.div
          className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5"
          // animate={{ opacity: active ? 1 : 0 }}
        >
          {active === "all"
            ? posts
                .map((post, idx) => <PostCard key={idx} {...post} />)
                .reverse()
            : posts
                .filter((post) => post.category === active)
                .map((post, idx) => <PostCard key={idx} {...post} />)
                .reverse()}
        </motion.div>
      </div>
      {/* CTA */}
      {/* <CTA /> */}
    </main>
  );
}
