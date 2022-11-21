import Link from "next/link";

// Time
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const PostCard = (post) => {

    // <time dateTime={post.date} className="block mt-4 mb-1 text-xs font-medium text-neutral-900">
    //   {format(parseISO(post.date), "LLLL d, yyyy")}
    // </time> 

    return ( 
      <Link href={post.url}>
        <div className="hover:cursor-pointer hover:brightness-95">
          {post.image ? (
            <img src={`/images/${post.image}`} alt="project-profile" className="card-lg"/>
            ) : (
            <div className="w-full h-64 bg-slate-200 animate-pulse"/>
          )}
          <div className="flex-row">
            <h3 className="mt-4 mb-1">{post.title}</h3>
            <ReactTimeAgo date={post.date} locale="en-US"/>
          </div>
        </div>
      </Link>
    );
    
}
export default PostCard;