import {useState} from 'react'
import { allPosts } from "contentlayer/generated";
import { compareDesc} from "date-fns";

import Filters from '../../components/Filters'
import PostCard from '../../components/PostCard'

export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
    return { props: { posts } };
  }
  
const Posts = ({ posts }) => {

    const [active, setActive] = useState('all')
    return ( 
        <div className='w-full my-24'>
            <div className='mx-auto text-center'>
                <h1>Journal Entries</h1>
                <h2 className="mt-6 leading-relaxed text-gray-400">
                 Browse trough my previous projects, code experiments and personal essays
                </h2>
                <input />
            </div>
      
            
            <Filters posts={posts} active={active} setActive={setActive}/>

            <div className="grid gap-8 mt-8  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
                {active === 'all' ? (
                    posts.map((post, idx) => (
                    <PostCard key={idx} {...post} />
                    )).reverse()
                ) : (
                    posts.filter(post => post.category === active).map((post, idx) => (
                    <PostCard key={idx} {...post} />
                    )).reverse()
                )}
            </div>
      
        </div>
     );
}
 
export default Posts;
