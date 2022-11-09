import Link from "next/link";
import {format, parseISO } from "date-fns";


// const PostCard = (post) => {
//     return ( 
//       <Link href={post.url}>
//         <div className="flex my-12 hover:cursor-pointer hover:opacity-90  pb-6">
//           {/* <img src="./images/prj-1.png" alt="project-profile" className="object-cover rounded-lg h-28 w-28"/> */}
//             <time dateTime={post.date} className="block mb-2 text-xs w-28 text-neutral-500">
//               {format(parseISO(post.date), "LLLL d, yyyy")}
//             </time>
//           <div className="flex-1 h-full my-auto ml-8">
//             <h2>{post.title}</h2>
//             <ul className="flex mt-4">
//               <li className="tag">React</li>
//               <li className="tag">Framer</li>
//               <li className="tag">Mapbox</li>
//             </ul>
//             {/* <div
//               className="mt-2 text-neutral-700"
//               dangerouslySetInnerHTML={{ __html: post.body.html }}
//             /> */}
//             {/* <ul>
//               {post.tags.map((i) => {
//                 <li className="tag">{i}</li>
//               })}
//             </ul> */}
//         </div>
//             <p className="tracking-wide text-slate-500">273 Views</p>
//             {/* <p>273 Views</p> */}
//         </div>
//       </Link>
//      );
//   }
const PostCard = (post) => {
    return ( 
      <Link href={post.url}>
        <div className="hover:cursor-pointer hover:filter-brightness-95 bg-slate-200 rounded-lg animate-pulse w-full h-64">
          {/* <img src="./images/entry-2.png" alt="project-profile" className=""/> */}
          {/* <div className=""> */}
            {/* <time dateTime={post.date} className="block mb-2 text-xs text-neutral-500">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <h2>{post.title}</h2> */}
            {/* <div
              className="mt-2 text-neutral-500"
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            /> */}
            {/* <ul>
              {post.tags.map((i) => {
                <li className="tag">{i}</li>
              })}
            </ul> */}
        {/* </div> */}
        </div>
      </Link>
     );
  }
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