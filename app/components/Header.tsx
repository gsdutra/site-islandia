import { Pathway_Gothic_One } from "next/font/google"
import Link from "next/link"

const pathway = Pathway_Gothic_One({
  weight: '400',
  subsets: ['latin']
})

export default function Header() {
  return (<>
    <div className="h-[8rem] w-full bg-black fixed top-0 flex flex-col justify-center items-center text-white z-20">
      <div className={pathway.className}>
        <a className="text-7xl">ISLÂNDIA</a>
      </div>
      <div className="underline flex">
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/gallery" className="mx-2">Galeria</Link>
        <Link href="/history" className="mx-2">História</Link>
        <Link href="/discussion" className="mx-2">Discussão</Link>
        <Link href="/contact" className="mx-2">Entrar no servidor</Link>
      </div>
    </div>
  </>)
}