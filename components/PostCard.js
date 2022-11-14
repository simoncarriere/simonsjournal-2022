import Link from "next/link";
import {format, parseISO } from "date-fns";

const PostCard = (post) => {
    return ( 
      <Link href={post.url}>
        <div className="rounded-lg hover:cursor-pointer hover:brightness-95">
        
          
          {post.image ? (
            <img src={`./images/${post.image}`} alt="project-profile" className="object-cover w-full h-64 bg-green-300"/>
            ) : (
            <div className="w-full h-64 bg-slate-200 animate-pulse"/>
          )}
          <div>
            <time dateTime={post.date} className="block mt-4 mb-1 text-xs text-neutral-500">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <h3 className=" text-slate-900">{post.title}</h3>
          </div>

        </div>
      </Link>
     );
  }

  // HORIZONTAL ALTERNATIVE
// const PostCard = (post) => {
//     return ( 
//       <Link href={post.url}>
//         <div className="flex my-6 hover:cursor-pointer hover:opacity-90">
//           <img src="./images/prj-1.png" alt="project-profile" className="object-cover rounded-lg h-28 w-28"/>
//           <div className="h-full my-auto ml-8 ">
//             <time dateTime={post.date} className="block mb-2 text-xs text-neutral-500">
//               {format(parseISO(post.date), "LLLL d, yyyy")}
//             </time>
//             <h2>{post.title}</h2>
//             {/* <div
//               className="mt-2 text-neutral-500"
//               dangerouslySetInnerHTML={{ __html: post.body.html }}
//             /> */}
//             {/* <ul>
//               {post.tags.map((i) => {
//                 <li className="tag">{i}</li>
//               })}
//             </ul> */}
//         </div>
//         </div>
//       </Link>
//      );
//   }
   
  export default PostCard;