import Image from "next/image"
import { Lato } from "next/font/google"

const lato = Lato({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (<>
    <Image
      src="/print1.jpg"
      layout='fill'
      objectFit='cover'
      alt="Islândia"
    />
    <div className="bg-gradient-to-t from-black to-transparent fixed w-full h-full top-10"></div>
    <div className="fixed w-full h-full flex justify-center items-center text-white text-3xl">
      <a className={lato.className}>Conheça o melhor servidor de Minecraft da história</a>
      </div>
  </>)
}
