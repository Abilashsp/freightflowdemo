import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Navbarlistchild from './Navbarlistchild';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbarlist({ subItem, index, idtrack, setidtrack }) {
  const handleclick = (id) => {
    setidtrack(id);
  }


  return (
    <div>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        {/* {console.log(index)} */}
        <li key={index}>
          <ul role="list" className="-mx-2 space-y-1">
            {!subItem.childrens ? (
              <li key={subItem.name}>
                <div
                  className={classNames(
                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-300',
                    'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                  )}
                  onClick={() => handleclick(subItem.id)}
                >
                  <Link href={`/s/${subItem.href}`}className='flex items-start'>
                
                        <span className="text-sm font-medium mt-4 ">{subItem.name}</span>
                      
                      

                  </Link>
                </div>
              </li>
            ) : (
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        subItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                        'flex items-center w-full   ml-4 rounded-md p-2 gap-x-3 text-lg leading-6 font-semibold text-gray-700 '
                      )}
                    >
                      {subItem.name}
                      <ChevronRightIcon
                        className={classNames(
                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                          'ml-auto h-5 w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul" className=" bg-white  divide-gray-100 py-4 border-2 rounded-lg shadow w-60  dark:bg-gray-950 dark:divide-gray-600">
                      {subItem.childrens.map((subChildItem, subChildIndex) => (
                        <li key={subChildIndex} className={classNames(
                          subItem.current ? 'bg-red-400' : '',
                          'relative cursor-default select-none py-2 pl-3 pr-9 rounded-xl  '
                        )}>
 
                        <Navbarlistchild subChildItem={subChildItem} index={subChildIndex}/>
                        </li>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
