import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Navbarlistchild from './Navbarlistchild';
import NavbarlistGchild from './NavbarlistGchild';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbarlist({ index,subChildItem }) {


  return (
    <div>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        {/* {console.log(index)} */}
        <li key={index}>
          <ul role="list" className="-mx-2 space-y-1">
            {!subChildItem.Child ? (
              <li key={subChildItem.name}>
                <div
                  className={classNames(
                    subChildItem.current ? 'bg-gray-50' : 'hover:bg-gray-300',
                    'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700 '
                  )}
                
                >
                  <Link href={`/s/${subChildItem.href}`}className='flex items-start'>
                
                        <span className="text-sm font-medium mt-4 ">{subChildItem.name}</span>
                      
                      

                  </Link>
                </div>
              </li>
            ) : (
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        subChildItem.current ? 'bg-red-400' : 'hover:bg-gray-300 border-b-0',
                        'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3  border-2  py-4 leading-6 font-semibold text-gray-700  '
                      )}
                    >
                      {subChildItem.name}
                      <ChevronRightIcon
                        className={classNames(
                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                          'ml-auto h-5 w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul" className="relative cursor-default select-none  pl-3 pr-9 border-2  ml-6  bg-white  divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                      {subChildItem?.Child?.map((subChildItem, subChildIndex) => (
                        <li key={subChildIndex} className={classNames(
                            subChildItem.current ? 'bg-red-400' : '',
                          ''
                        )}>
 
                        <NavbarlistGchild subChildItem={subChildItem} index={subChildIndex}/>
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
