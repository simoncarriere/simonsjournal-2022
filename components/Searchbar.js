import { useState } from "react";

// import SearchBox from './SearchBox'

const Searchbar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [hasFocus, setFocus] = useState(false);


    console.log(hasFocus)

    return ( 
        <>
        <div className="relative z-10 flex items-center w-full mx-16">
            <input
                type="text"
                placeholder="Search through projects, code snippets & journal entries"
                name="search"
                id="search"
                value={searchValue}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full h-full px-4 pr-12 border-none rounded-md shadow-sm placeholder:text-slate-500 bg-slate-200 focus:border-slate-300 focus:ring-slate-300"  
            />
            <div className="absolute inset-y-0 right-0 flex py-2.5 pr-2.5 ">
                <kbd className="inline-flex items-center px-3 mr-2 font-mono text-xs font-medium border rounded border-slate-300 text-slate-500 hover:bg-slate-300 hover:text-slate-700 hover:cursor-pointer">
                    Cmd + K
                </kbd>
            </div>
        </div>
            {hasFocus ? (
                <SearchBox />
                // <div className="fixed w-full h-64 border bg-slate-200 border-slate-500 top-24 ">Class</div>
            ) : null}
        </>
     );
}
 
export default Searchbar;


