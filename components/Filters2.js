import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  { name: 'All', href: '#', count: '12', current: true },
  { name: 'Case Studies', href: '#', count: '6', current: false },
  { name: 'Code Snippets', href: '#', count: '4', current: false },
  { name: 'Opinions', href: '#', count: '0', current: false },
  { name: 'Other', href: '#', count: '0', current: false },
]

export default function Filters2() {
  return (
    <div className='flex justify-between w-full border-b border-slate-200 '>
      
      {/* ----- Tabs ----- */}
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full py-2 pb-4 pl-3 pr-10 text-base rounded-md focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="flex -mb-px space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href="#"
                  className={classNames(
                    tab.current
                      ? 'border-green-500 text-green-600'
                      : 'border-none text-neutral-500 hover:text-neutral-700 hover:border-neutral-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-lg'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.current ? 'bg-green-100 text-green-600' : 'bg-neutral-100 text-neutral-900',
                        'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block m-auto'
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ----- Dropdown ----- */}
      <Menu as="div" className="relative z-0 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm border rounded-md shadow-sm border-slate-300 text-slate-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-100">
            Sort By
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Newest
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Most Popular
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Most Discussed
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      
    </div>
  )
}
