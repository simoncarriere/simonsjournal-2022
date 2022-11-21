import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
// Components
import PostCard from "components/PostCard";
import EntryActions from '../../components/EntryActions'


export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}


const PostLayout = ({ post }: { post: Post }) => {

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto mt-16"> 
        <img src={`/images/${post.image}`} className="object-cover rounded-lg"/>

        {/* Main Section */}
        <div className="mt-24 mb-44">


          {/* <div className="col-span-4 col-start-3 prose"> */}
          <h1 className="my-8 leading-snug">{post.title}</h1>
          <div className="flex items-center justify-between w-full pb-4 border-b border-neutral-300">
            <time dateTime={post.date} className="text-mono">
              Posted {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <EntryActions />
          </div>
          {/* MDX */}
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
          </div>


          {/* <div className="col-start-8 ">
            <button className="sticky btn-icon-secondary top-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </button>
            <button className="sticky btn-icon-secondary top-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </button>
            <button className="sticky btn-icon-secondary top-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </button>
          </div> */}
          
        </div>

        {/* Resource Table */}
        <div className="mt-24">
          <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
            <h6 className="col-span-2">Collaborators</h6>
            <h6 className="col-span-4 col-start-3">Simon</h6>
          </div>
          <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
            <h6 className="col-span-2">Acknowledgments</h6>
            <h6 className="col-span-4 col-start-3">For valuable feedback and discussions we’d like to thank William Saunders, Elizabeth Barnes, Richard Ngo, Steven Bills, Ryan Lowe, Steven Adler, Gretchen Krueger, Dan Mossing, Leo Gao, Sam Altman, and Ilya Sutskever.</h6>
          </div>
          <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
            <h6 className="col-span-2">Filed in</h6>
            <h6 className="col-span-4 col-start-3">{post.category}</h6>
          </div>
        </div>


        {/* <div className="relative mb-24">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-neutral-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 text-sm bg-slate-100 text-neutral-500">Similar</span>
          </div>
        </div> */}


       
      </article>
      <div className="mt-10">
          {allPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
    </>
  );
};

export default PostLayout;
