import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import { allPosts } from "contentlayer/generated";
// Libraries
import { compareDesc} from "date-fns";
import { motion } from "framer-motion";
// Components
import Filters from '../components/Filters'
import PostCard from '../components/PostCard'
import CTA from '../components/cta'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }) {

  const [active, setActive] = useState('all')

  return (
    <main>

      {/* Heading */}
      <header className="flex items-center justify-center mt-14">
        <div className=" lg:basis-3/5">
          <div className="max-w-md 2xl:max-w-xl pr-1 text-center lg:text-left lg:m-0">
            <h1 className="leading-tight">Purpose driven full stack developer & product strategist</h1>
            <h2 className="mt-6 leading-relaxed text-gray-400">Looking to join a startup on a bold mission. <br/> Based in Montreal, available anywhere.</h2>
          </div>
          <div className="max-w-2xl mt-8 xl:mt-12">
            <div className="flex items-center my-auto">
              <h2 className="mr-4">Currently Building</h2>
              <Link href="/now">
                <button className="btn-icon-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </Link>
            </div>
            {/* Projects */}
            <div className="flex flex-col w-full pr-16 mt-4 xl:flex-row 2xl:mt-6 space-between">
              <a href="http://hellosupersaas.com" className="flex mr-4 xl:block basis-1/2 card">
                <div className="img-sm">
                  {/* <Image src="/images/prj-1.png" height={400} width={600}/> */}
                  <Image src="/images/product-6.png " height={400} width={600}/>
                </div>
                <div className="ml-4 xl:ml-2">
                  <h3 className="block mt-2 mb-2">Supersaas - Race to MVP</h3>
                  <p className="text-sm leading-6 text-gray-400">A collection of boilerplates to fasttrack your next SAAS project</p>
                </div>
              </a>
              <div className="card flex mt-4 mr-4 xl:block basis-1/2  xl:mt-0">
                <Image src="/images/product-7.png" height={400} width={600}/>
                <div className="ml-4 xl:ml-2">
                  <h3 className="block my-2">Bivi - Multiplayer Task App</h3>
                  <p className="text-sm leading-6 text-gray-400">Where async teams plan and get things done together</p>                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block basis-2/5 lg:basis-1/2 object-fill pl-12">
          <Image src="/images/simon.jpeg" height={2000} width={1600} className="rounded-lg "/>
        </div>
      </header>

      {/* Journal Entries */}
      <div className="my-32">
        <div className="flex justify-between w-full items-middle">
          <div className="flex items-center my-auto mb-8"> 
            <h2 className="mr-4">Journal Entries</h2>
            <Link href="/posts">
              <button className="btn-icon-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <Filters posts={posts} active={active} setActive={setActive}/>
    
          <motion.div 
            className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-"
            // animate={{ opacity: active ? 1 : 0 }}
          >
          {active === 'all' ? (
            posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            )).reverse()
          ) : (
            posts.filter(post => post.category === active).map((post, idx) => (
              <PostCard key={idx} {...post} />
            )).reverse()
          )}
          </motion.div>
   
      </div>
      {/* CTA */}
      {/* <CTA /> */}
    </main>
  );
}