import Link from "next/link";
import Image from "next/image";
// Time
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

const PostCard = (post) => {
  // <time dateTime={post.date} className="block mt-4 mb-1 text-xs font-medium text-neutral-900">
  //   {format(parseISO(post.date), "LLLL d, yyyy")}
  // </time>

  console.log(post);

  return (
    <Link href={post.url}>
      <div className="animate ">
        {post.image ? (
          <Image
            src={`/images/${post.image}`}
            alt="project profile"
            height={400}
            width={600}
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-48 bg-slate-200 animate-pulse" />
        )}
        {/* <div className="block p-2 bg-blue-100 rounded-ld">{post.category}</div> */}
        <div className="flex-row">
          <h3 className="mt-4 mb-1 text-neutral-900">{post.title}</h3>
          <ReactTimeAgo date={post.date} locale="en-US" />
        </div>
      </div>
    </Link>
  );
};
export default PostCard;

// return (
//   <div className="flex flex-col gap-4 p-5 border shadow-sm animate space-between bg-slate-100 border-slate-200 hover:bg-slate-50 rounded-2xl">
//     <Link href={post.url}>
//       <div className="">
//         <div>
//           <p className="text-sm text-gray-500 max-w-72 sm:mb-0">
//             <ReactTimeAgo date={post.date} locale="en-US" />
//           </p>
//           <h3 className="block mt-1 text-sm">{post.title}</h3>
//         </div>
//         {/* <div className="flex-row">
//           <h3 className="mt-4 mb-1 text-neutral-900">{post.title}</h3>
//         </div> */}
//         {post.image ? (
//           <div className="flex-1">
//             <Image
//               alt="journal cover"
//               src={`/images/${post.image}`}
//               height={250}
//               width={400}
//               className="object-cover rounded-lg"
//             />
//           </div>
//         ) : (
//           <div className="w-full h-48 bg-slate-200 animate-pulse" />
//         )}
//         {/* <div className="block p-2 bg-blue-100 rounded-ld">{post.category}</div> */}
//       </div>
//     </Link>
//   </div>
// );
