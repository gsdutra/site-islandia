import { Pathway_Gothic_One } from "next/font/google"
import Link from "next/link"

const pathway = Pathway_Gothic_One({
  weight: '400',
  subsets: ['latin']
})

export default function Header() {
  return (<>
    <div className="h-[8rem] w-full bg-black fixed top-0 flex justify-between items-center text-white z-20 px-10">
      <img src="/bandeira.png" width={100}/>
      <div className="flex flex-col justify-center items-center">
        <div className={pathway.className}>
          <a className="text-7xl">ISLÂNDIA</a>
        </div>

        <div className="underline flex">
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/about" className="mx-2">Sobre o servidor</Link>
          <Link href="/community" className="mx-2">Comuninade</Link>
          <Link href="/contact" className="mx-2">Entrar no servidor</Link>
        </div>
      </div>
      <img src="/brasao.png" width={100}/>
    </div>
  </>)
}
