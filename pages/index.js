import Head from 'next/head'


export default function Home() {
  return (
    <>
      <div className="rounded bg-gray-200 mx-auto" >
        <div className="flex items-end justify-center  container mx-auto" style={{height:"500px"}}>
          <div className="text-center py-5">
            <h1 className="font-bold text-2xl font-mono lg:text-4xl">Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsa autem nihil qui! Nemo, facilis?</p>
          </div>
        </div>
      </div>

      <div className="py-10 container mx-auto my-5 flex">
        <div className="flex-none lg:w-32"></div>
        <div className="flex-grow">
          <div className="px-6 text-center">
              <h1 className="font-bold text-3xl mb-2 text-blue-700">Tentang Lorem</h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis, nostrum sunt repudiandae nam quo, quasi illo unde nisi cupiditate possimus modi. Sint quia dolor dignissimos aliquam possimus, molestiae maxime repellat accusamus soluta impedit! Consequuntur magnam impedit itaque unde dolores alias architecto quae laudantium porro. Omnis sequi esse vitae unde?
              </p>
              <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-10 text-white">
                Selengkapnya
              </button>
          </div>
        </div>
        <div className="flex-none lg:w-32"></div>
      </div>
      <div className="py-10 container mx-auto my-5 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center">
        <div className="py-5 ">
          <div className="rounded-lg bg-gray-100" style={{height:"250px"}}>
          </div>
        </div>
        <div className="py-5 lg:text-left lg:order-first">
          <h2 className=" font-bold text-3xl mb-2 text-blue-700">Jadi bagian Lorem</h2>
          <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur laboriosam delectus iusto nemo deserunt beatae libero debitis. Illum officiis cum soluta ad fugit nulla hic vel, maxime dolorum nihil?</p>
          <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-10 text-white">
            Selengkapnya
          </button>

        </div>


      </div>
      <div className="py-10 container mx-auto my-5 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center">
        <div className="py-5">
          <div className="rounded-lg bg-gray-100" style={{height:"250px"}}>
          </div>
        </div>
        <div className="py-5 lg:text-left">
          <h2 className=" font-bold text-3xl mb-2 text-blue-700">Jadi partner Lorem</h2>
          <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur laboriosam delectus iusto nemo deserunt beatae libero debitis. Illum officiis cum soluta ad fugit nulla hic vel, maxime dolorum nihil?</p>
          <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-10 text-white">
            Selengkapnya
          </button>
        </div>

      </div>
      <div className="py-10 container mx-auto text-center">
        <h2 className="font-bold text-3xl mb-2 text-blue-700 font-bold text-3xl mb-2 text-blue-700">Di Lorem ngapain apa aja sih?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="pb-10  grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center ">
          <div className="py-5 lg:text-left">
            <div className="rounded-lg bg-gray-100" style={{height:"250px"}}>
            </div>
            <h3 className="font-bold text-2xl mb-2 ">Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
            <small className="font-bold">Sat, 1 Januari 2021 - 3 mins read</small>
          </div>
          <div className="py-5 lg:text-left">
            
          </div>

        </div>
        <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-10 text-white">
            Selengkapnya
        </button>
      </div>
    </>
  )
}
