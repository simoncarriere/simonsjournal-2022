import { useState, Fragment, useEffect, useRef } from "react";
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ExclamationTriangleIcon, FolderIcon, LifebuoyIcon } from '@heroicons/react/24/outline'



const projects = [
    { id: 1, name: 'Workflow Inc. / Website Redesign', category: 'Projects', url: '#' },
    // More projects...
]
  
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


const Searchbar2 = () => {

    const [searchValue, setSearchValue] = useState('')
    const [hasFocus, setHasFocus] = useState(false);
    const [displayCmd, setDisplayCmd] = useState(false)
    const [rawQuery, setRawQuery] = useState('')
    const inputRef = useRef();



    console.log(inputRef)


    useEffect(() => {
        if (hasFocus){
            setDisplayCmd(true)
            inputRef.current.focus();
        } else {
            inputRef.current.blur();
            
            setDisplayCmd(false)
        }
    },  [hasFocus])
    
    // const toggleCmd = () => {
    //     setHasFocus(!hasFocus)
    // }

    const query = rawQuery.toLowerCase().replace(/^[#>]/, '')

    const filteredProjects =
        rawQuery === '#'
        ? projects
        : query === '' || rawQuery.startsWith('>')
        ? []
        : projects.filter((project) => project.name.toLowerCase().includes(query))

    const filteredUsers =
        rawQuery === '>'
        ? users
        : query === '' || rawQuery.startsWith('#')
        ? []
        : users.filter((user) => user.name.toLowerCase().includes(query))


    return ( 
        <Combobox onChange={(item) => (window.location = item.url)}>
            <div className="fixed z-10 ">
                   
                <div className="z-10 flex">           
                    <Combobox.Input
                    ref={inputRef}
                        className="w-full h-16 px-4 pr-12 transition border-none rounded-md shadow-sm focus:rounded-b-none placeholder:text-slate-500 bg-slate-200 focus:bg-slate-100 focus:border-2 focus:border-slate-900 focus:placeholder:text-slate-700 focus:ring-slate-300"
                        // className="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 border-0 bg-slate-200 pl-11 focus:ring-0 sm:text-sm"
                        placeholder="Search through index..."
                        onChange={(e) => setRawQuery(e.target.value)}
                        onFocus={() => setHasFocus(true)}
                        // onBlur={() => setHasFocus(false)}
                    />
                    <div className="absolute h-16 inset-y-0 right-0 flex py-3 pr-2.5 ">
                            <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 ">
                                ⌘ Cmd + K
                            </kbd>
                    </div>
                </div>
            
     
                <Transition.Root show={displayCmd} as={Fragment} afterLeave={() => setRawQuery('')} appear>
                    <Dialog as="div" className="absolute grid-cols-12 z-5 top-24" onClose={() => setHasFocus(false)}>
                        {/* Blackout */}
                        <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 transition-opacity bg-opacity-30 bg-slate-900" />
                        </Transition.Child>
                        
                        {/* Options */}
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="relative col-start-1 col-span-10 w-full bg-slate-200 rounded-b-xl  flex flex-col justify-center items-center  py-2.5 px-4 text-xs text-slate-700">
                                        

                        
                                            {(filteredProjects.length > 0 || filteredUsers.length > 0) && (
                                                <Combobox.Options
                                                static
                                                className="p-4 pb-2 space-y-4 overflow-y-auto max-h-80 scroll-py-10 scroll-pb-2"
                                                >
                                                {filteredProjects.length > 0 && (
                                                    <li>
                                                    <h2 className="text-xs font-semibold text-gray-900">Projects</h2>
                                                    <ul className="mt-2 -mx-4 text-sm text-gray-700">
                                                        {filteredProjects.map((project) => (
                                                        <Combobox.Option
                                                            key={project.id}
                                                            value={project}
                                                            className={({ active }) =>
                                                            classNames(
                                                                'flex cursor-default select-none items-center px-4 py-2',
                                                                active && 'bg-green-100 text-slate-700'
                                                            )
                                                            }
                                                        >
                                                            {({ active }) => (
                                                            <>
                                                                <FolderIcon
                                                                className={classNames('h-6 w-6 flex-none', active ? 'text-slate-900' : 'text-slate-700')}
                                                                aria-hidden="true"
                                                                />
                                                                <span className="flex-auto ml-3 truncate">{project.name}</span>
                                                            </>
                                                            )}
                                                        </Combobox.Option>
                                                        ))}
                                                    </ul>
                                                    </li>
                                                )}
                                            {filteredUsers.length > 0 && (
                                                <li>
                                                <h2 className="text-xs font-semibold text-gray-900">Users</h2>
                                                <ul className="mt-2 -mx-4 text-sm text-gray-700">
                                                    {filteredUsers.map((user) => (
                                                    <Combobox.Option
                                                        key={user.id}
                                                        value={user}
                                                        className={({ active }) =>
                                                        classNames(
                                                            'flex cursor-default select-none items-center px-4 py-2',
                                                            active && 'bg-indigo-600 text-white'
                                                        )
                                                        }
                                                    >
                                                        <img src={user.imageUrl} alt="" className="flex-none w-6 h-6 rounded-full" />
                                                        <span className="flex-auto ml-3 truncate">{user.name}</span>
                                                    </Combobox.Option>
                                                    ))}
                                                </ul>
                                                </li>
                                            )}
                                            </Combobox.Options>
                                            )}
                        
                                            {rawQuery === '?' && (
                                                <div className="px-6 text-sm text-center py-14 sm:px-14">
                                                <LifebuoyIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" />
                                                <p className="mt-4 font-semibold text-gray-900">Help with searching</p>
                                                <p className="mt-2 text-gray-500">
                                                    Use this tool to quickly search for users and projects across our entire platform. You can also
                                                    use the search modifiers found in the footer below to limit the results to just users or projects.
                                                </p>
                                                </div>
                                            )}
                            
                                            {query !== '' && rawQuery !== '?' && filteredProjects.length === 0 && filteredUsers.length === 0 && (
                                                <div className="px-6 text-sm text-center py-14 sm:px-14">
                                                <ExclamationTriangleIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" />
                                                <p className="mt-4 font-semibold text-gray-900">No results found</p>
                                                <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                                                </div>
                                            )}
                        
                        
                        
                        
                                            <div className="flex flex-wrap items-center py-2.5 px-4 text-xs text-neutral-700">
                                                Type{' '}
                                                <kbd
                                                className={classNames(
                                                    'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                                                    rawQuery.startsWith('#') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                                                )}
                                                >
                                                #
                                                </kbd>{' '}
                                                <span className="sm:hidden">for projects,</span>
                                                <span className="hidden sm:inline">to access projects,</span>
                                                <kbd
                                                className={classNames(
                                                    'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                                                    rawQuery.startsWith('>') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                                                )}
                                                >
                                                &gt;
                                                </kbd>{' '}
                                                for users, and{' '}
                                                <kbd
                                                className={classNames(
                                                    'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                                                    rawQuery === '?' ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                                                )}
                                                >
                                                ?
                                                </kbd>{' '}
                                                for help.
                                            </div>
                        
                        
                        
                                        
                                        {/* </Combobox> */}
                            </Dialog.Panel>
                        </Transition.Child>

                    </Dialog>
                </Transition.Root>
            </div>
        </Combobox>

        
        // <div className="relative z-10 flex flex-col mx-16">
        //     <div className="w-full">
        //         <input
        //             type="text"
        //             placeholder="Search through projects, code snippets & journal entries"
        //             name="search"
        //             id="search"
        //             value={searchValue}
        //             onClick={() => setHasFocus(true)}
        //             onBlur={() => setHasFocus(false)}
        //             onChange={(e) => setSearchValue(e.target.value)}
        //             className="block w-full h-16 px-4 pr-12 transition border-none rounded-md shadow-sm placeholder:text-slate-500 bg-slate-200 focus:bg-slate-100 focus:border-2 focus:border-slate-900 focus:placeholder:text-slate-700 focus:ring-slate-300"  
        //         />
        //         <div className="absolute h-16 inset-y-0 right-0 flex py-3 pr-2.5 ">
        //             <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 ">
        //             ⌘ Cmd + K
        //             </kbd>
        //         </div>
        //     </div>
   
        //     {hasFocus ? (
        //         <>
        //         {/* <SearchBox hasFocus={hasFocus} toggleCmd={toggleCmd} /> */}
        //         <div className="absolute z-10 w-full border rounded-b-xl bg-neutral-100 border-slate-300 top-16">
        //             Class
        //             <div className="bg-slate-200 rounded-b-xl flex flex-wrap w-full justify-center items-center  py-2.5 px-4 text-xs text-slate-700">
        //                 Type{' '}
        //                 <kbd
        //                     className={classNames(
        //                     'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-100 text-slate-700 font-semibold sm:mx-2',
        //                     rawQuery.startsWith('#') ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
        //                     )}
        //                 >
        //                     #
        //                 </kbd>{' '}
        //                 <span className="sm:hidden">for projects,</span>
        //                 <span className="hidden sm:inline">to access projects,</span>
        //                 <kbd
        //                     className={classNames(
        //                     'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-100 text-slate-700 font-semibold sm:mx-2',
        //                     rawQuery.startsWith('>') ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
        //                     )}
        //                 >
        //                     &gt;
        //                 </kbd>{' '}
        //                 for users, and{' '}
        //                 <kbd
        //                     className={classNames(
        //                     'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-700 text-slate-100 font-semibold sm:mx-2',
        //                     rawQuery === '?' ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
        //                     )}
        //                 >
        //                     ?
        //                 </kbd>{' '}
        //                 for help.
        //             </div>
        //         </div>
        //         </>
        //     ) : null}
        // </div>

     );
}
 
export default Searchbar2;


