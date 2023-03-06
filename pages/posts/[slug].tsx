import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
// Components
import PostCard from "../../components/PostCard";
import Button from '../../components/Button'

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

      <article className="mx-auto pt-44"> 

        <div className="flex">
          <div className=" flex-1 flex flex-col gap-3">
            <time dateTime={post.date}>
               Posted {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <h1 className="leading-snug text-4xl max-w-xl">{post.title}</h1>
            {post.links ? (
                <div className="flex gap-2">
                  {post.links.map(link => (
                    <Button link={link.url} title={link.title}/>      
                  ))}
                </div>
              ) : null }
          </div>
          <div className="flex-1">
            <img src={`/images/${post.image}`} className="object-cover rounded-lg"/>
          </div>
        </div>
          
        <div className="mt-24 mb-44 border-t border-neutral-300">
          {/* Main Section */}
          <div className="relative">
            <div>
              <div className=" ">
                <div className="
                    prose
                    prose-a:link 
                    prose-h3:font-thin prose-h3:text-xl prose-h3:mt-16 prose-h3:mb-8
                    prose-p:text-xl prose-p:text-gray-600 prose-p:leading-9
                    prose-li:text-gray-600
                ">
                  {/* MDX */}
                  <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
                </div>
              </div>
              {/* Resource Table */}
              {/* <div className="mt-24 ">
                  <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
                    <h6 className="col-span-2 ">Collaborators</h6>
                    <h5 className="col-span-4 col-start-3">Simon</h5>
                  </div>
                  <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
                    <h6 className="col-span-2">Acknowledgments</h6>
                    <h5 className="col-span-4 col-start-3">For valuable feedback and discussions we’d like to thank William Saunders, Elizabeth Barnes, Richard Ngo, Steven Bills, Ryan Lowe, Steven Adler, Gretchen Krueger, Dan Mossing, Leo Gao, Sam Altman, and Ilya Sutskever.</h5>
                  </div>
                  <div className="grid grid-cols-8 gap-4 py-6 border-t border-slate-200 text-neutral-500">
                    <h6 className="col-span-2">Filed in</h6>
                    <h5 className="col-span-4 col-start-3">{post.category}</h5>
                  </div>
              </div>     */}
            </div>



            {/* Related Entries */}
            <div className="border-t border-slate-200 mt-24 pt-24">
              <div className="flex items-center justify-between my-auto">
                <h2 className="mr-4">Related Entries</h2>
                <button className="flex items-center justify-center gap-2 btn-icon-secondary">
                  See All
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
              <div className=" grid gap-8 mt-8 xl:max-w-sm sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:block">
                {allPosts
                  // .filter(i => (i.title !== post.title && i.category === post.category))
                  .filter(i => (i.title !== post.title))
                  .map((post, idx) => (
                    <PostCard key={idx} {...post} />
                ))}
              </div>
            </div>



          </div>
        </div>

      </article>
    </>
  );
};

export default PostLayout;