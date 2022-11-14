import {Fragment, useState} from 'react'
import {Transition} from '@headlessui/react'
import { PlayIcon } from '@heroicons/react/24/solid'

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

    const query = rawQuery.toLowerCase().replace(/^[#>]?/, '')

    const filteredPost = (rawQuery) === '#' ? allPosts: query === '' || rawQuery.startsWith('>') ? [] : allPosts.filter((post) =>  (
        post.title.toLowerCase().includes(query))
    )

    const filteredActions =
        rawQuery === '>'
        ? users
        : query === '' || rawQuery.startsWith('#')
        ? []
        : users.filter((user) => user.name.toLowerCase().includes(query))


    return ( 
        <div className="relative z-10 flex flex-col mx-16">

            {/* Search Bar */}
            <div className="z-10 w-full transition">
                <input
                    type="text"
                    placeholder="Search through projects, code snippets & journal entries"
                    name="search"
                    id="search"
                    value={rawQuery}
                    onClick={() => setHasFocus(true)}
                    // onBlur={() => setHasFocus(false)}
                    onChange={(e) => setRawQuery(e.target.value)}
                    className="block w-full h-16 px-8 pr-12 transition border-none rounded-md shadow-sm placeholder:text-slate-500 bg-slate-200 focus:bg-slate-100 focus:border-2 focus:border-slate-900 focus:placeholder:text-slate-700 focus:ring-0 focus:rounded-b-none"  
                />
                <div className="absolute h-16 inset-y-0 right-0 flex py-3 pr-2.5 ">
                    <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 ">
                    {/* ⌘ Cmd + K */}
                    /
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
                onClick={() => setHasFocus(false)}
            >
                <div className="fixed inset-0 transition-opacity bg-opacity-50 cursor-pointer z-2 bg-neutral-900" />
            </Transition>
            
            {/* Expended search results */}
            { hasFocus ? (
                <div className="absolute z-10 w-full transition border-t bg-slate-100 rounded-b-md top-16 border-slate-200">
                    
                    {/* INITIAL STATE */}
                    {rawQuery.length > 0 ? ( 
                        null
                     ) : (
                        <div>
                            <div className='m-8'>
                                <h5 className='text-slate-500'>Quick Actions</h5>
                                <ul className='flex my-4'>
                                    <li className='tag'>Compose Email</li>
                                    <li className='tag'>Schedule a Call</li>
                                    <li className='tag'>Sign Up Newsletter</li>
                                    <li className='tag'>Download Resume</li>
                                    <li className='tag'>Send Feedback</li>
                                    <li className='tag'>Challenge me</li>
                                </ul>
                            </div>

                            <div className='pt-4 mx-8'>
                                <h5 className='text-slate-500'>Announcements</h5>
                                <div className='flex mt-4'>
                                    <div className='flex flex-col justify-between w-2/3 px-8 py-8 mb-8 bg-green-100 rounded-md'>  
                                        <h2 className='pb-2 text-2xl text-green-700 border-b border-green-300'>30 Days of SASS <span className='text-green-500'>(Releasing Early 2023)</span></h2>        
                                        <ul className='my-4 text-green-500'>
                                            <li>The indiehackers bootcamp, a walkthrough to starting and growing your digital product</li>
                                            <li>- Build a market ready digital platform with Figma, React, Supabase & Stripe</li>
                                            <li>- 1 on 1 mentorship and 6 months technical support</li>
                                            <li>- Interviews and behind the scenes with successfull Indiehackers</li>
                                        </ul>
                                        <div className='flex'>
                                            <button className='px-4 py-2 transition bg-green-700 rounded-md w-44 hover:opacity-80 text-slate-100'>Early Access<span className='ml-2 text-green-300'>$100</span></button>
                                            <button className='flex items-center justify-center w-32 px-4 py-2 ml-4 text-green-700 transition border border-green-300 rounded-md hover:opacity-80'><PlayIcon className='w-4 h-4 mr-2 text-green-700'/><p>Preview</p></button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-1/3 px-8 py-8 mx-4 mb-8 rounded-md bg-slate-200'>
                                        <h2 className='pb-2 text-2xl border-b text-slate-700 border-slate-300'>Stats</h2>    
                                        <ul className='my-4'>
                                            <li className='flex'>
                                                <p className='w-36 text-slate-500'>All Time Views</p>
                                                <p className='text-slate-700'>827</p>
                                            </li>
                                            <li className='flex'>
                                                <p className='w-36 text-slate-500'>Twitter Followers</p>
                                                <p className='text-slate-700'>230</p>
                                            </li>
                                            <li className='flex'>
                                                <p className='w-36 text-slate-500'>Github Stars</p>
                                                <p className='text-slate-700'>27</p>
                                            </li>
                                        </ul>
                                        {/* <button className='w-40 px-4 py-2 transition rounded-md hover:opacity-80 bg-slate-800 text-slate-100'>Get an Estimate</button> */}
                                    </div>
                                    {/* <div className='flex flex-col justify-between w-1/3 px-8 py-8 mx-4 mb-8 rounded-md bg-slate-300'>
                                        <h2 className='text-2xl text-slate-700'>Start a Project</h2>    
                                        <p className='text-slate-500 '>Get an estimated timeline and budget for your project</p>
                                        <button className='w-40 px-4 py-2 transition rounded-md hover:opacity-80 bg-slate-800 text-slate-100'>Get an Estimate</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        // allPosts.map(post => <p key={post._id}>{post.title}</p>)
                    )}

                    {/* HELP SECTION */}
                    {rawQuery === '?' && (
                        <div className="px-6 text-center py-14 sm:px-14">
                            {/* <LifebuoyIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" /> */}
                            <h5 className="mt-4 text-xl text-neutral-900">Welcome to my Command Bar!</h5>
                            <p className="max-w-2xl mx-auto my-4 text-lg text-neutral-500">
                                Ever since <a className="link" href="https://superhuman.com">Superhuman</a> and <a className="link" href="https://www.alfredapp.com">Alfred</a> showed us the power of sophisticated search bars,
                                I've wanted to create my own. You can currently use this tool to quickly search across the journal and perform a few limited actions. 
                                I'll soon be introducing <a className="link" href="https://algolia.com">Algolia</a> for global search accross the journal and additional features. 
                            </p>
                            <a href="https://github.com/simoncarriere/simonsjournal-2022/issues" target="_blank">
                                <button className="w-40 px-4 py-2 mt-4 transition rounded-md bg-slate-200 text-slate-500 hover:opacity-80">
                                    Report Issue
                                </button>
                            </a>
                        </div>
                    )}


                    {filteredPost.length > 0 ? (
                        <div className='m-8'>
                            <h5 className='text-slate-500'>{filteredPost.length} Search Results for "{rawQuery}"" in Projects</h5>
                            {filteredPost.map((post) => (
                                <div key={post._id} value={post.title} className='flex items-center my-4 cursor-default select-none text-slate-700 hover:opacity-80'>
                                    <Link href={post.url}>
                                        <div className='flex items-center justify-center cursor-pointer'>
                                            <p className='text-lg text-slate-800'>{post.title}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        null
                        // <div className='m-8'>
                        //     <h5 className='text-slate-500'>No Search Results for "{rawQuery}"" in Projects</h5>
                        // </div>
                    )}

                    
                    {filteredActions.length > 0 && (
                        <div className='m-8'>
                            <h5 className='text-slate-500'>{filteredActions.length} Search Result for "{rawQuery}" in Actions</h5>
                            {filteredActions.map((user) => (
                                <div key={user.id} value={user.name} className='flex items-center my-4 cursor-default select-none text-slate-700 hover:opacity-80'>
                                    <p className='text-lg text-slate-800'>{user.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
        

                    {/*  Keys Shortcuts */}
                    <div className="flex flex-wrap items-center justify-center w-full px-4 py-4 text-sm border-t bg-slate-100 rounded-b-md border-slate-200 text-slate-700">
                        Type{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                            rawQuery.startsWith('#') ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            #
                        </kbd>{' '}
                        <span className="sm:hidden">for entries,</span>
                        <span className="hidden sm:inline">to search journal,</span>
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border  font-semibold sm:mx-2',
                            rawQuery.startsWith('>') ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            &gt;
                        </kbd>{' '}
                        for a list of actions, and{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                            rawQuery === '?' ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-700'
                            )}
                        >
                            ?
                        </kbd>{' '}
                        to learn more.
                    </div>
                </div>
            ) : null}
        </div>

     );
}
 
export default Searchbar;