import Link from 'next/link';

export default function Menu(props: any) {
  return (<div className="relative">
    <div className={`z-10 h-screen w-[100%] bg-black absolute top-0 left-0 hidebg ${props.show ? "show" : ""}`} onClick={() => props.hide(false)} />
    <div className={`h-screen w-[60%] max-w-[350px] bg-gray-950 text-white absolute top-0 left-0 z-20 p-14 ${props.show ? "menu" : "menuhidden"}`}>
      <div className="mt-20"></div>
      <Link href='/'>
        <button className="text-left" onClick={() => props.hide(false)}>Home</button>
      </Link> <br /><br />
      <Link href='/about'>
        <button className="text-left" onClick={() => props.hide(false)}>Sobre o servidor</button>
      </Link> <br /><br />
      <Link href='/community'>
        <button className="text-left" onClick={() => props.hide(false)}>Comunidade</button>
      </Link> <br /><br />
      <Link href='/contact'>
        <button className="text-left" onClick={() => props.hide(false)}>Entrar no servidor</button>
      </Link>
    </div>
  </div>)
}