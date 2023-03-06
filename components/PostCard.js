import Link from "next/link";
import Image from 'next/image'
// Time
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const PostCard = (post) => {

    // <time dateTime={post.date} className="block mt-4 mb-1 text-xs font-medium text-neutral-900">
    //   {format(parseISO(post.date), "LLLL d, yyyy")}
    // </time> 

    console.log(post)

    return ( 
      <Link href={post.url}>
        <div className="card ">
          {post.image ? (
             <Image src={`/images/${post.image}`} alt="project profile" height={400} width={600}/>
            ) : (
            <div className="w-full h-48 bg-slate-200 animate-pulse"/>
          )}
          {/* <div className="bg-blue-100 block p-2 rounded-ld">{post.category}</div> */}
          <div className="flex-row">
            <h3 className="mt-4 mb-1 text-neutral-900">{post.title}</h3>
            <ReactTimeAgo date={post.date} locale="en-US"/>
          </div>
        </div>
      </Link>
    );
    
}
export default PostCard;