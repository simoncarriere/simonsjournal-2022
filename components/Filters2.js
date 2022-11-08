import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Filters2() {
  return (
    <Menu as="div" className="relative inline-block text-left z-0">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-slate-300  px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-100">
          Sort By
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none">
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
  )
}
