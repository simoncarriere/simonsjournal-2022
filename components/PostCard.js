import Link from "next/link";
import {format, parseISO } from "date-fns";


const PostCard = (post) => {
    return ( 
      <Link href={post.url}>
        <div className="flex hover:cursor-pointer hover:opacity-90 my-6">
          <img src="./images/prj-1.png" alt="project-profile" className="h-28 w-28 object-cover rounded-lg"/>
          <div className=" h-full my-auto ml-8">
            <h2>{post.title}</h2>
            {/* <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time> */}
            {/* <div
              className="text-neutral-500 mt-2"
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            /> */}
            {/* <ul>
              {post.tags.map((i) => {
                <li className="tag">{i}</li>
              })}
            </ul> */}
        </div>
        </div>
      </Link>
     );
  }
   
  export default PostCard;