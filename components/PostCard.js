import Link from "next/link";
import {format, parseISO } from "date-fns";


const PostCard = (post) => {
    return ( 
        <div className="mb-8">
        <h2 className="text-xl">
          <Link href={post.url}>
            <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
          </Link>
        </h2>
        <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
     );
  }
   
  export default PostCard;