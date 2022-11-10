import {Fragment, useState} from 'react'
import {  Transition } from '@headlessui/react'

import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
  
const users = [
 {
    id: 1,
    name: 'Leslie Alexander',
    url: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Searchbar = () => {

    const [hasFocus, setHasFocus] = useState(false);
    const [rawQuery, setRawQuery] = useState('')


    const query = rawQuery.toLowerCase().replace(/^[#>]/, '')

    console.log(allPosts)

    const filteredPost = (rawQuery) === '#' ? allPosts: query === '' || rawQuery.startsWith('>') ? [] : allPosts.filter((post) =>  (
        post.title.toLowerCase().includes(query))
    )

    const filteredUsers =
        rawQuery === '>'
        ? users
        : query === '' || rawQuery.startsWith('#')
        ? []
        : users.filter((user) => user.name.toLowerCase().includes(query))


    return ( 
        <div className="relative z-10 flex flex-col mx-16">

            {/* Search Bar */}
            <div className="z-10 w-full">
                <input
                    type="text"
                    placeholder="Search through projects, code snippets & journal entries"
                    name="search"
                    id="search"
                    value={rawQuery}
                    onClick={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    onChange={(e) => setRawQuery(e.target.value)}
                    className="block w-full h-16 px-4 pr-12 transition border-none rounded-md shadow-sm placeholder:text-slate-500 bg-slate-200 focus:bg-slate-100 focus:border-2 focus:border-slate-900 focus:placeholder:text-slate-700 focus:ring-0 focus:rounded-b-none"  
                />
                {/* Cmd K */}
                <div className="absolute h-16 inset-y-0 right-0 flex py-3 pr-2.5 ">
                    <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 ">
                    ⌘ Cmd + K
                    </kbd>
                </div>
            </div>

            {/* Darken */}
            <Transition
                show={hasFocus}
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 transition-opacity bg-opacity-50 z-2 bg-neutral-900" />
            </Transition>
            
            {/* Expended search results */}
            { hasFocus ? (
                <>
                  
                <div className="absolute z-10 w-full border bg-slate-200 rounded-b-md border-slate-300 top-16">
                    



                    {rawQuery.length > 0 ? ( 
                        null
                     ) : (
                        null
                        // allPosts.map(post => <p key={post._id}>{post.title}</p>)
                    )}

                    {rawQuery === '?' && (
                        <div className="px-6 text-center py-14 sm:px-14">
                            {/* <LifebuoyIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" /> */}
                            <h5 className="mt-4 text-neutral-900">Help with searching</h5>
                            <p className="max-w-2xl mx-auto mt-2 text-neutral-700">
                                Use this tool to quickly search for users and projects across our entire platform. You can also
                                use the search modifiers found in the footer below to limit the results to just users or projects.
                            </p>
                        </div>
                    )}

                    
                    {filteredPost.length > 0 && (
                        filteredPost.map((post) => (
                            <div 
                                key={post._id} 
                                value={post.title}
                                className='flex items-center px-4 py-4 cursor-default select-none text-slate-700 hover:bg-green-100'
                            >
                                <Link href={post.url}>
                                    <a className='flex'>
                                    <p className="flex-auto ml-3 truncate">{post.title}</p>
                                    <p className="flex-auto ml-3 truncate">{post._id}</p>

                                    </a>
                                </Link>
                            </div>
                        ))
                    )}
                    {filteredUsers.length > 0 && (
                        filteredUsers.map((user) => (
                            <div 
                                key={user.id} 
                                value={user.name}
                                className='flex items-center px-4 py-2 cursor-default select-none text-slate-700'
                            >
                                <p className="flex-auto ml-3 truncate">{user.name}</p>
                            </div>
                        ))
                    )}


                    {/*  Keys Shortcuts */}
                    <div className="flex flex-wrap items-center justify-center w-full px-4 py-4 text-sm border-t bg-slate-100 rounded-b-md border-slate-300 text-slate-700">
                        Type{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                            rawQuery.startsWith('#') ? 'bg-green-700 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            #
                        </kbd>{' '}
                        <span className="sm:hidden">for entries,</span>
                        <span className="hidden sm:inline">to filter entries,</span>
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border  font-semibold sm:mx-2',
                            rawQuery.startsWith('>') ? 'bg-green-700 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            &gt;
                        </kbd>{' '}
                        for commands, and{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                            rawQuery === '?' ? 'bg-green-700 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            ?
                        </kbd>{' '}
                        for help.
                    </div>
                </div>
                </>
            ) : null}
        </div>

     );
}
 
export default Searchbar;