import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="-z-10 absolute w-screen h-screen">
        <Image
          src="/zamek.jpeg"
          alt=''
          fill
          quality={100}
          className='contrast-150 brightness-50'
        />
        <Image
          src="/title.svg"
          alt=''
          fill
          quality={100}
          className='contrast-200 brightness-75 pb-96'
        />
      </div>

      <nav className='text-white text-2xl mt-20 ml-60'>
        <a className='pr-10'>Oferta</a>
        <a className='pr-10'>Cennik</a>
        <a className='pr-10'>Galeria</a>
        <a>Kontakt</a>
      </nav>


      <button className="border-2 border-yellow-400 text-yellow-400 py-4 px-8 mt-60 rounded-full text-xl font-sans tracking-wide">
        Zarezerwuj teraz
      </button>
    </main>
  )
}
