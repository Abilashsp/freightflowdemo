import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Leslie Alexander', online: true },
  { id: 2, name: 'Abilash', online: false },
  
]


const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RightNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
      })


  return (
    <>
      <div className=" border-2 bg-gray-200">
        <div className="sticky top-0 z-40 lg:mx-auto lg:px-4 rounded-xl mt-2">
          <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 ">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-auto border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm rounded-xl"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">

             

                {/* Profile dropdown */}
                <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
                  <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900"></Combobox.Label>
                  <div className="relative mt-2">
                    <Combobox.Input
                      className=" rounded-md border-0 bg-white py-1.5 pl-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(person) => person?.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>

                    {filteredPeople.length > 0 && (
                      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            value={person}
                            className={({ active }) =>
                              classNames(
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                              )
                            }
                          >
                            {({ active, selected }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      'inline-block h-2 w-2 flex-shrink-0 rounded-full',
                                      person.online ? 'bg-green-400' : 'bg-gray-200'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>
                                    {person.name}
                                    <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                                  </span>
                                </div>

                                {selected && (
                                  <span
                                    className={classNames(
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                      active ? 'text-white' : 'text-indigo-600'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    )}
                  </div>
                </Combobox>
              </div>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  )
}


