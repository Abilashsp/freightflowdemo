import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function NavbarlistG2child({subChildItem,index}) {
  return (
        <div>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li key={index}>
          <ul role="list" className="-mx-2 space-y-1">
            {!subChildItem.Childgg ? (
              <li key={subChildItem.name}>
                <div
                  className={classNames(
                    subChildItem.current ? 'bg-gray-50' : 'hover:bg-gray-300',
                    'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-black'
                  )}
        
                >
                  <Link href={`/s/${subChildItem.href}`}className='flex items-start'>
                 
                          <span className=" flex min-w-0 flex-col ">
                        <span className="text-sm font-medium mt-4 ">{subChildItem.name}</span>
                      
                      </span>

                  </Link>
                </div>
              </li>
            ) : (
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        subChildItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                        'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                      {subChildItem.name}
                      {console.log(subChildItem.name)}
                      <ChevronRightIcon
                        className={classNames(
                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                          'ml-auto h-5 w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul" className="mt-1 px-2 ml-6  p-2 gap-x-3 text-sm leading-6 font-semibold text-slate-700">
                      {subChildItem?.Childgg?.map((ChildsItem, subChildIndex) => (
                        <li key={subChildIndex} className={classNames(
                            ChildsItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                          'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                        )}>

                          <Link href={`${subChildItem.href}`} className='flex items-start'>
                          
                        <span className="text-sm font-medium mt-4 whitespace-nowrap">{ChildsItem.name}</span>
                      {console.log(ChildsItem)}
                      

                          </Link>
                        
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
   
  )
}
