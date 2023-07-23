'use client'
import { Pathway_Gothic_One } from "next/font/google"
import Link from "next/link"
import Menu from "./Menu"
import { useState } from "react"

const pathway = Pathway_Gothic_One({
  weight: '400',
  subsets: ['latin']
})

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (<>
    <Menu show={showMenu} hide={setShowMenu}/>
    <div className="h-[8rem] w-full bg-black fixed top-0 flex justify-between items-center text-white z-20 px-10 mobile:h-[6rem] mobile:px-4">
      <button onClick={()=>setShowMenu(!showMenu)}>
        <img src="/menu.svg" className="w-[60px] min-w-[60px] desktop:hidden"/>
        </button>
      <img src="/bandeira.png" className="w-[100px] mobile:hidden"/>
      <div className="flex flex-col justify-center items-center w-full">
        <div className={pathway.className}>
          <a className="text-7xl mobile:text-5xl">ISLÂNDIA</a>
        </div>

        <div className="underline flex mobile:hidden">
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/about" className="mx-2">Sobre o servidor</Link>
          <Link href="/community" className="mx-2">Comuninade</Link>
          <Link href="/contact" className="mx-2">Entrar no servidor</Link>
        </div>
      </div>
      <img src="/brasao.png" className="w-[100px] mobile:w-[60px]"/>
    </div>
  </>)
}
