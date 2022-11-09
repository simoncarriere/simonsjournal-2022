
import { compareDesc} from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import CTA from '../components/cta'
import PostCard from '../components/PostCard'
import Filters2 from '../components/Filters2'
// import Filters from '../components/Filters'


export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}


export default function Home({ posts }) {


  return (
    <main className="mx-8 sm:mx-16 lg:mx20 xl:mx-32">

      {/* ----- HEADING ----- */}
      <header className="flex items-center justify-center pt-48 lg:pt-0 lg:min-h-screen">
        <div className=" lg:basis-1/2">
          <div className="pr-1 lg:max-w-lg">
            <h1 className="leading-tight">Purpose driven React developer & product strategist</h1>
            <h4 className="mt-6">Looking to join a startup on a bold mission. <br/> Montreal is home, available anywhere.</h4>
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

   

            {/* ----- PROJECTS ----- */}
            <div className="flex flex-col w-full mt-4 xl:flex-row 2xl:mt-8 space-between pr-24">
              
              <div className="flex mr-4 xl:block basis-1/2 hover:cursor-pointer hover:opacity-90">
                <img src="/images/prj-1.png" className="object-cover h-20 rounded-lg w-28  xl:h-32 2xl:h-44  xl:w-full"/>
                <div className="h-full my-auto ml-4 xl:ml-0">
                  <h5 className="xl:mt-4 xl:mb-2">Interactive Design Guide Builder</h5>
                  <p className="text-neutral-500">Create a personalized boiler plate design system</p>
                </div>
              </div>
              
              <div className="flex mt-4 mr-4 xl:block basis-1/2 hover:cursor-pointer hover:opacity-90 xl:mt-0">
                <img src="/images/prj-2.png" className="object-cover h-20 rounded-lg w-28 xl:h-16 2xl:h-44 xl:w-full"/>
                <div className="h-full my-auto ml-4 xl:ml-0">
                  <h5 className="xl:mt-4 xl:mb-2">Interactive Design Guide Builder</h5>
                  <p className="text-neutral-500">Create a personalized boiler plate design system</p>
                </div>
              </div>

            </div>
            
          </div>
        
        </div>
        <div className="hidden py-8 pl-12 lg:block basis-1/2 ">
          <img src="images/simon.jpeg" className="rounded-2xl"/>
        </div>
      </header>

      {/* ----- Journal Entries : Code snippets, walkthrough, opinions & case studies ----- */}
      <div className="my-12">
        <div className="flex justify-between w-full items-middle">
          <div className="flex items-center mb-4"> 
            <h2 className="mr-4">Journal Entries</h2>
            <button className="btn-icon-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
          <Filters2/>
        </div>
        <div className="mt-10">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>

      {/* ----- CALL TO ACTION ----- */}
      <CTA />
    </main>
  );
}
