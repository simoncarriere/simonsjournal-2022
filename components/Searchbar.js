import { useState, useEffect } from "react";

import {SearchBox} from './SearchBox'

const Searchbar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [hasFocus, setHasFocus] = useState(false);


    console.log(hasFocus)

    const toggleCmd = () => {
        setHasFocus(!hasFocus)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


       // const [open, setOpen] = useState(true)
    const [rawQuery, setRawQuery] = useState('')

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
        <div className="relative z-10 flex flex-col w-full mx-16">
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Search through projects, code snippets & journal entries"
                    name="search"
                    id="search"
                    value={searchValue}
                    onClick={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="block w-full h-16 px-4 pr-12 transition border-none rounded-md shadow-sm placeholder:text-slate-500 bg-slate-200 focus:border-slate-300 focus:ring-slate-300"  
                />
                <div className="absolute h-16 inset-y-0 right-0 flex py-3 pr-2.5 ">
                    <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 ">
                    ⌘ Cmd + K
                    </kbd>
                </div>
            </div>
   
            {hasFocus ? (
                <>
                {/* <SearchBox hasFocus={hasFocus} toggleCmd={toggleCmd} /> */}
                <div className="w-full border rounded-b-xl bg-neutral-100 border-slate-300 top-24 ">
                    Class
                    <div className="bg-slate-200 flex flex-wrap w-full justify-center items-center  py-2.5 px-4 text-xs text-slate-700">
                        Type{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-100 text-slate-700 font-semibold sm:mx-2',
                            rawQuery.startsWith('#') ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
                            )}
                        >
                            #
                        </kbd>{' '}
                        <span className="sm:hidden">for projects,</span>
                        <span className="hidden sm:inline">to access projects,</span>
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-100 text-slate-700 font-semibold sm:mx-2',
                            rawQuery.startsWith('>') ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
                            )}
                        >
                            &gt;
                        </kbd>{' '}
                        for users, and{' '}
                        <kbd
                            className={classNames(
                            'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-slate-700 text-slate-100 font-semibold sm:mx-2',
                            rawQuery === '?' ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-900'
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


