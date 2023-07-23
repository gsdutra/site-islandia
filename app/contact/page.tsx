import Image from "next/image"
import Link from "next/link"
import { Roboto_Condensed } from "next/font/google"

const lato = Roboto_Condensed({
  weight: '400',
  subsets: ['latin']
})

export default function About() {
  return (<>
    <Image
      src="/soldadinho.png"
      layout='fill'
      objectFit='cover'
      alt="Islândia"
    />
    <div className="bg-gradient-to-t from-black to-transparent fixed w-full h-full top-10"></div>
    <div className="fixed w-full h-full flex flex-col justify-center items-center text-white text-3xl mt-10">
      <a className={lato.className}>Gostou do server? Contate um dos admins para entrar!</a>
      <div className="flex mt-10 text-2xl">
        <div className="flex flex-col items-center mx-6">
          <img src="lucas.jpg" width={150} className="rounded-full" />
          <a className="font-bold mt-3">Imperador da Islândia</a>
          <a className="italic">discord: lucasjunks</a>
        </div>
        <div className="flex flex-col items-center mx-6">
          <img src="bea.jpg" width={150} className="rounded-full" />
          <a className="font-bold mt-3">Duquesa de Campos</a>
          <a className="italic">discord: _aisem</a>
        </div>
        <div className="flex flex-col items-center mx-6">
          <img src="marlon.jpg" width={150} className="rounded-full" />
          <a className="font-bold mt-3">Duque da Moeda</a>
          <a className="italic">discord: m4rloon5</a>
        </div>
      </div>
      <Link href="https://twitter.com/impislandia">
        <div className="mt-20 bg-blue-600 p-3 px-5 rounded-full button flex text-2xl">
          <img src="/twitter.svg" width={35} className="rounded-full mr-3"></img>
          Siga-nos no Twitter
        </div>
      </Link>
    </div>
  </>)
}