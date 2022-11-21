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

          <h1 className="my-8 leading-snug">{post.title}</h1>
          <div className="flex items-center justify-between w-full pb-4 border-b border-neutral-300">
            <time dateTime={post.date} className="text-mono">
              Posted {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            {/* <EntryActions /> */}
          </div>
          {/* MDX */}
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
          </div>

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
      </article>
      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {allPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
      </div>
    </>
  );
};

export default PostLayout;
