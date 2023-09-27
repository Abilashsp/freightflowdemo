import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbarlist({ subItem, index, idtrack, setidtrack }) {
  const handleclick = (id) => {
    setidtrack(id);
  }

  // const [itemsId, setItemsId] = useState(null);

  // useEffect(() => {
  //   // Find the item with the matching idtrack
  //   if (Array.isArray(subItem) && idtrack !== null) {
  //     const foundItem = subItem.find((i) => i.id === idtrack);
  //     setItemsId(foundItem);
  //   }
  // }, [subItem, idtrack]);

  return (
    <div>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        {console.log(index)}
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
                  <Link href={`/s/form/${subItem.href}`}className='flex items-start'>
                  <span className='relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-500 hover:bg-blue-700 bg-white group-hover:border-gray-400 mt-4'>
                          {index?(<div className="absolute left-4 -top-8 -ml-px  h-8 w-0.5 bg-indigo-600" aria-hidden="true" />):null}
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-300 hover:bg-blue-700 " />
                          </span>
                          <span className="ml-8 flex min-w-0 flex-col ">
                        <span className="text-sm font-medium mt-4 whitespace-nowrap">{subItem.name}</span>
                      
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
                        subItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                        'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
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
                    <Disclosure.Panel as="ul" className="mt-1 px-2 ml-6  p-2 gap-x-3 text-sm leading-6 font-semibold text-slate-700">
                      {subItem.childrens.map((subChildItem, subChildIndex) => (
                        <li key={subChildIndex} className={classNames(
                          subItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                          'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                        )}>

                          <Link href={`/p/${subChildItem.href}`} className='flex items-start'><span className='relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-500 hover:bg-blue-700 bg-white group-hover:border-gray-400 mt-4'>
                          <div className="absolute left-4 -top-8 -ml-px  h-8 w-0.5 bg-indigo-600" aria-hidden="true" />
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-300 hover:bg-blue-700 " />
                          </span>
                          <span className="ml-8 flex min-w-0 flex-col ">
                        <span className="text-sm font-medium mt-4 whitespace-nowrap">{subChildItem.name}</span>
                      
                      </span>

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
  );
}
