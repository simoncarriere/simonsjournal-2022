
import { compareDesc} from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import CTA from '../components/cta'
import PostCard from '../components/PostCard'


export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}


export default function Home({ posts }) {


  return (
    <main className="mx-32">
      
      <header className="flex items-center justify-center min-h-screen">
        <div className=" basis-1/2">
          <div className="max-w-lg">
            <h1>Purpose driven React developer & product strategist</h1>
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

            <div className="flex w-full mt-8 space-between">
              
              <div className="mr-4 basis-1/2">
                <img src="/images/prj-1.png" className="w-full"/>
                <h5 className="mt-4 mb-2">Interactive Design Guide Builder</h5>
                <p className="text-neutral-500">Create a personalized boiler plate design system</p>
              </div>

              <div className="mr-4 basis-1/2">
                <img src="/images/prj-2.png" className="w-full"/>
                <h5 className="mt-4 mb-2">Interactive Design Guide Builder</h5>
                <p className="text-neutral-500">Create a personalized boiler plate design system</p>
              </div>

            </div>
            
          </div>
        
        </div>
        <div className="p-4 basis-1/2">
          <img src="images/simon.jpeg" className="rounded-2xl"/>
        </div>
      </header>
      <CTA />
      {/* {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))} */}
    </main>
  );
}
