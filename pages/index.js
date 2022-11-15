import { useState } from "react";
import { allPosts, Post } from "contentlayer/generated";
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
    <main className="mx-8 sm:mx-16 lg:mx-20 xl:mx-32">

      {/* Heading */}
      <header className="flex items-center justify-center max-h-screen pt-48 lg:pt-0">
        <div className=" lg:basis-1/2">
          <div className="pr-1 lg:max-w-lg">
            <h1 className="leading-tight">Purpose driven React developer & product strategist</h1>
            <h4 className="mt-6 text-xl leading-relaxed text-neutral-500">Looking to join a startup on a bold mission. <br/> Montreal is home, available anywhere.</h4>
          </div>
          <div className="max-w-2xl mt-16">
            <div className="flex items-center my-auto">
              <h2 className="mr-4">Currently Building</h2>
              <button className="btn-icon-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            {/* Projects */}
            <div className="flex flex-col w-full pr-24 mt-6 xl:flex-row 2xl:mt-8 space-between">
              <div className="flex mr-4 xl:block basis-1/2 hover:cursor-pointer ">
                <img src="/images/prj-1.png" className="object-cover h-20 rounded-lg hover:brightness-95 w-28 xl:h-36 2xl:h-44 xl:w-full"/>
                {/* <div className="h-full my-auto ml-4 xl:ml-0">
                  <h5 className="text-base xl:mt-4 xl:mb-1">Interactive Design Guide Builder</h5>
                  <p className="text-neutral-500">Create a personalized boiler plate design system</p>
                </div> */}
                <div>
                  <time  className="block mt-4 mb-1 text-xs font-medium text-neutral-500">
                    {/* {format(parseISO(post.date), "LLLL d, yyyy")}  */} 10 January, 2020
                  </time>
                  <h3 className=" text-neutral-900">Create a personalized boiler plate design system</h3>
                </div>
              </div>
              <div className="flex mt-4 mr-4 xl:block basis-1/2 hover:cursor-pointer xl:mt-0">
                <img src="/images/prj-2.png" className="object-cover h-20 rounded-lg hover:brightness-95 w-28 xl:h-36 2xl:h-44 xl:w-full"/>
                
                <div>
                  <time  className="block mt-4 mb-1 text-xs font-medium text-neutral-900">
                    {/* {format(parseISO(post.date), "LLLL d, yyyy")} */}10 Febuary, 2021
                  </time>
                  <h3 className=" text-neutral-500">Create a personalized boiler plate design system</h3>
                </div>
                
                {/* <div className="h-full my-auto ml-4 xl:ml-0">
                  <h5 className="text-base xl:mt-4 xl:mb-1 3xl:text-lg">Interactive Design Guide Builder</h5>
                  <p className="text-neutral-500">Create a personalized boiler plate design system</p>
                </div> */}
              </div>
            </div>


          </div>
        </div>
        <div className="hidden py-8 pl-12 lg:block basis-1/2">
          <img src="images/simon.jpeg" className="rounded-2xl"/>
        </div>
      </header>

      {/* Journal Entries */}
      <div className="my-12">
        <div className="flex justify-between w-full items-middle">
          <div className="flex items-center my-auto mb-4"> 
            <h2 className="mr-4">Index</h2>
            <button className="btn-icon-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        <Filters posts={posts} active={active} setActive={setActive}/>
    
          <motion.div 
            className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            // animate={{ opacity: active ? 1 : 0 }}
          >
          {active === 'all' ? (
            posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))
          ) : (
            posts.filter(post => post.category === active).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))
          )}
          </motion.div>
   
      </div>
      {/* CTA */}
    </main>
  );
}