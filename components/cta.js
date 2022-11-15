const Logos = [
 {
    id: 1,
    name: 'TOMS',
    image: '#',
  },
 {
    id: 2,
    name: 'WWF',
    image: '#',
  },
 {
    id: 3,
    name: 'Bank of Melbourne',
    image: '#',
  },
 {
    id: 4,
    name: 'WholeKids',
    image: '#',
  },
 {
    id: 5,
    name: 'Community Homestay',
    image: '#',
  },
 {
    id: 6,
    name: 'Ocean Eye',
    image: '#',
  },
]

const LogoCloud = () => {
    return (
      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <p className="text-lg font-semibold text-center text-gray-600">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

const CTA = () => {
    return ( 
        <div className="flex items-center justify-center w-full p-24 m-auto my-20 bg-white border rounded-xl border-slate-200">
            <div className="text-center">
                <h1>Looking to build your big idea?</h1>
                <h5>Let’s work together from strategy to launch. Start a project for an estimate timeline and budget.</h5>
                <div>
                    <button className="tag">Wow</button>
                    <button className="tag">Wow</button>
                </div>
                <LogoCloud />
            </div>
        </div>
     );
}
 
export default CTA;