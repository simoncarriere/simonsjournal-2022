import { useContext, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { ContactContext } from "context/ContactContext";

export default function Contact() {

  const {sidebarOpen, toggleSidebar} = useContext(ContactContext)

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => toggleSidebar()}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-opacity-50 bg-neutral-900" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative w-screen max-w-xl pointer-events-auto">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-slate-100 hover:text-slate-300 focus:outline-none hover:ring-2 hover:ring-slate-100"
                        onClick={() => toggleSidebar()}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col h-full py-20 overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 sm:px-16">
                      <h2>Let’s Connect</h2>
                    </div>
                    <div className="relative flex-1 px-4 mt-4 sm:px-16">
                      
                      
                      {/* ---- OPTIONS ----- */}
                      <div className='mb-12'>
                        <p className='text-lg font-extralight text-neutral-500'>Let’s work together from strategy to launch. Start a project for an estimate timeline and budget.</p>
                      </div>

                      <div>

                        <div className='w-full p-6 my-4 border rounded-lg bg-slate-100 border-slate-200 hover:cursor-pointer hover:border-slate-300 hover:bg-slate-200 '>
                          <h5 className='text-base text-slate-900'>1. Email</h5>
                          <p className='pt-2 text-slate-500'>General inquiries & feedback.</p>
                        </div>
                        <div className='w-full p-6 my-4 border rounded-lg bg-slate-100 border-slate-200 hover:cursor-pointer hover:border-slate-300 hover:bg-slate-200 '>
                          <h5 className='text-base text-slate-900'>2. Schedule A Call</h5>
                          <p className='pt-2 text-slate-500'>Reserved for white listed contacts. Either start a project or get in touch first. </p>
                        </div>

                        <div className='w-full h-0.5 my-6 bg-slate-100'></div>
                        <div className='w-full p-6 my-4 border rounded-lg bg-slate-900 border-slate-300 hover:cursor-pointer hover:opacity-90'>
                          <h5 className='text-base text-white'>3. Start A Project (2 minutes)</h5>
                          <p className='pt-2 text-slate-700'>Get an estimated timeline and budget for your project</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
