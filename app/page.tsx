import Image from "next/image"
import { Roboto_Condensed } from "next/font/google"

const lato = Roboto_Condensed({
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
    <div className="fixed w-full h-full flex flex-col justify-center items-center text-white text-3xl">
      <img
        src="/brasao.png"
        width={400}
        height={400}
        alt="Islândia"
        className="mb-4"
      />
      <a className={lato.className}>Conheça o melhor servidor de Minecraft da história</a>
    </div>
  </>)
}
