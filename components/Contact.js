import { useContext, useState, Fragment } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'

import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import { ContactContext } from "context/ContactContext";

export default function Contact() {

  const {sidebarOpen, toggleSidebar} = useContext(ContactContext)

  let [plan, setPlan] = useState('startup')

//   <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
//   <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
// </div>

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity cursor-pointer z-2 bg-gray-900/50" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end w-full justify-center p-4 text-center  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >


              <Dialog.Panel className="relative transform overflow-hidden rounded-t-xl bg-white text-left shadow-xl transition-all sm:w-3xl  mx-24  p-16">
                {/* <div className='w-1/2'> */}
                <div>
                  <div>
                    <Dialog.Title as="h1" className='text-4xl'>
                      Hey there! How would you like to connect?
                    </Dialog.Title>
                    <div className="my-4">
                      <h3>
                        Let’s work together from strategy to launch. Start a project for an estimate timeline and budget.
                      </h3>
                    </div>
                  </div>


                  {/* <RadioGroup value={plan} onChange={setPlan} > */}
                    {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
                    {/* <div className="flex gap-4">
                      <RadioGroup.Option value="startup" className="radio-item">
                        {({ checked }) => (
                          <span className={checked ? 'radio-checked' : ''}>Startup</span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value="business" className="radio-item">
                        {({ checked }) => (
                          <span className={checked ? 'radio-checked' : ''}>Business</span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value="enterprise" className="radio-item">
                        {({ checked }) => (
                          <span className={checked ? 'radio-checked' : ''}>Enterprise</span>
                        )}
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup> */}
 

                <div className='flex flex-col gap-6 my-8'>

                  {/* Name */}
                  <div>
                    <label htmlFor="email" className="">
                      Full Name
                    </label>
                    <div className='w-full'>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className='bg-slate-100 p-4 w-full my-1'
                        // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Your name"
                        aria-describedby="your-name"
                      />
                    </div>
                    {/* <p className="mt-2 text-sm text-gray-500" id="email-description">
                      We'll only use this for spam.
                    </p> */}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="">
                      Email
                    </label>
                    <div className='w-full'>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className='bg-slate-100 p-4 w-full my-1'
                        // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Your email..."
                        aria-describedby="email-description"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500" id="email-description">
                      We'll only use this for spam.
                    </p>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label htmlFor="comment" className="">
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className=" border-none bg-slate-100 p-4 my-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                </div>







                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-8  text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={toggleSidebar}
                  >
                    Go back to dashboard
                  </button>
                </div>
                </div>
              </Dialog.Panel>



            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )

  // return (
  //   <Transition.Root show={sidebarOpen} as={Fragment}>
  //     <Dialog as="div" className="relative z-10" onClose={() => toggleSidebar()}>
  //       <Transition.Child
  //         as={Fragment}
  //         enter="ease-in-out duration-500"
  //         enterFrom="opacity-0"
  //         enterTo="opacity-100"
  //         leave="ease-in-out duration-500"
  //         leaveFrom="opacity-100"
  //         leaveTo="opacity-0"
  //       >
  //         <div className="fixed inset-0 transition-opacity bg-neutral-900/50" />
  //       </Transition.Child>

  //       <div className="">
  //         <div className="absolute mx-auto">
  //           <div className="fixed inset-x-0 bottom-0 flex w-full px-16 pointer-events-none">
  //             <Transition.Child
  //               as={Fragment}
  //               enter="transform transition ease-in-out duration-500 sm:duration-700"
  //               enterFrom="translate-y-full"
  //               enterTo="translate-y-0"
  //               leave="transform transition ease-in-out duration-500 sm:duration-700"
  //               leaveFrom="translate-y-0"
  //               leaveTo="translate-y-full"
  //             >
  //               <Dialog.Panel className="relative w-screen pointer-events-auto rouned-t-md ">
  //                 <Transition.Child
  //                   as={Fragment}
  //                   enter="ease-in-out duration-500"
  //                   enterFrom="opacity-0"
  //                   enterTo="opacity-100"
  //                   leave="ease-in-out duration-500"
  //                   leaveFrom="opacity-100"
  //                   leaveTo="opacity-0"
  //                 >
  //                   {/* <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"> */}
  //                   <div className="rouned-t-md ">
  //                     <button
  //                       type="button"
  //                       className="rounded-md text-slate-100 hover:text-slate-300 focus:outline-none hover:ring-2 hover:ring-slate-100"
  //                       onClick={() => toggleSidebar()}
  //                     >
  //                       <span className="sr-only">Close panel</span>
  //                       <XMarkIcon className="w-6 h-6" aria-hidden="true" />
  //                     </button>
  //                   </div>
  //                 </Transition.Child>
  //                 <div className="flex flex-col h-1/2 py-20 overflow-y-scroll bg-white shadow-xl">
  //                   <div className="px-4 sm:px-16">
  //                     <h2>Let’s Connect</h2>
  //                   </div>
  //                   <div className="relative flex-1 px-4 mt-4 sm:px-16">
                      
                      
  //                     {/* ---- OPTIONS ----- */}
  //                     <div className='mb-8'>
  //                       <p className='text-lg font-extralight text-neutral-500'>Let’s work together from strategy to launch. Start a project for an estimate timeline and budget.</p>
  //                     </div>

  //                     <div>
  //                       <a href="mailto:hello@simonsjournal.com">
  //                         <div className='w-full p-6 my-4 border rounded-lg bg-slate-100 border-slate-200 hover:cursor-pointer hover:border-slate-300 hover:bg-slate-200 '>
  //                           <h5 className='text-base text-slate-900'>1. Email</h5>
  //                           <p className='pt-2 text-slate-500'>General inquiries & feedback.</p>
  //                         </div>
  //                       </a>
  //                       <div className='w-full p-6 my-4 border rounded-lg bg-slate-100 border-slate-200 hover:cursor-pointer hover:border-slate-300 hover:bg-slate-200 '>
  //                         <h5 className='text-base text-slate-900'>2. Schedule A Call</h5>
  //                         <p className='pt-2 text-slate-500'>Reserved for white listed contacts. Either start a project or get in touch first. </p>
  //                       </div>

  //                       <div className='w-full h-0.5 my-6 bg-slate-100'></div>
  //                       <div className='w-full p-6 my-4 border rounded-lg bg-slate-900 border-slate-300 hover:cursor-pointer hover:opacity-90'>
  //                         <h5 className='text-base text-white'>3. Start A Project (2 minutes)</h5>
  //                         <p className='pt-2 text-slate-700'>Get an estimated timeline and budget for your project</p>
  //                       </div>
  //                     </div>

  //                   </div>
  //                 </div>
  //               </Dialog.Panel>
  //             </Transition.Child>
  //           </div>
  //         </div>
  //       </div>
  //     </Dialog>
  //   </Transition.Root>
  // )
}
