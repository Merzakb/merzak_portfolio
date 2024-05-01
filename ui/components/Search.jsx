'use client';

import { FaSearch } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
      //  params.set('page', '1');
        if (term) {
          params.set('query', term);
          console.log(term);
        } else {
          params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="input-group container justify-content-center">
           <div className="col-6 d-flex rounded">
                <input 
                    type="search" 
                    className="form-control " 
                    placeholder={placeholder} 
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <span className="input-group-text border-0 bg-secondary" id="search-addon">
                    <FaSearch className="" />
                </span>
           </div>
        </div>
        // <div className="d-flex flex-row">
        //     <label htmlFor="search" className="visually-hidden">
        //         Search
        //     </label>
        //     <input
        //         type="text"
        //         id="search"
        //         className="form-control rounded-md border border-secondary py-2 pl-4 pe-1 fs-5 "
        //         placeholder={placeholder}
        //         onChange={(e) => {
        //             handleSearch(e.target.value);
        //         }}
        //         defaultValue={searchParams.get('query')?.toString()}
        //     />
        //     <FaSearch className="" />
        // </div>
    );
}

/**
 

<div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>
 */