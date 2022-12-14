import { useState } from "react";
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
      <header className="flex items-center justify-center max-h-screen mt-8 mb-24 lg:mt-0">
        <div className=" lg:basis-3/5">
          <div className="max-w-lg pr-1 m-auto text-center lg:text-left lg:m-0">
            <h1 className="leading-tight">Purpose driven React developer & product strategist</h1>
            <h2 className="mt-6 text-xl leading-relaxed text-neutral-500">Looking to join a startup on a bold mission. <br/> Montreal is home, available anywhere.</h2>
          </div>
          <div className="max-w-2xl mt-8 xl:mt-12">
            <div className="flex items-center my-auto">
              <h2 className="mr-4">Currently Building</h2>
              <button className="btn-icon-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            {/* Projects */}
            <div className="flex flex-col w-full pr-16 mt-4 xl:flex-row 2xl:mt-6 space-between">
              <div className="flex mr-4 xl:block basis-1/2 hover:cursor-pointer">
                <img src="/images/prj-1.png" className="img-sm"/>
                <div className="ml-4 xl:ml-2">
                  <h3 className="block mt-4 mb-1">The Indiehacker Bootcamp</h3>
                  <h4 className="text-base text-neutral-500">A month long course to learn how to design, build a SASS</h4>
                </div>
              </div>
              <div className="flex mt-4 mr-4 xl:block basis-1/2 hover:cursor-pointer xl:mt-0">
                <img src="/images/prj-2.png" className="img-sm"/>
                <div className="ml-4 xl:ml-2">
                  <h3 className="block mt-4 mb-1">Interactive Design Guide Builder</h3>
                  <h4 className="text-base text-neutral-500">Create a personalized boiler plate design system</h4>                
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="hidden py-8 pl-12 lg:block basis-2/5 lg:basis-1/2">
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