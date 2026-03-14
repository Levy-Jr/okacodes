import Image from "next/image"
import Link from "next/link"
import OkacodesLogo from "@/public/okacodes/logo-footer.svg"
import InstagramIcon from "@/public/okacodes/instagram.svg"
import WppIcon from "@/public/okacodes/whatsapp.svg"
import TwitterIcon from "@/public/okacodes/twitter-icon.svg"

const Footer = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Projetos",
      href: "/projetos"
    },
    {
      label: "Blog",
      href: "/blog"
    },
  ]

  return (
    <footer className="max-w-300 w-[90%] mx-auto border-t border-t-black/10 mt-30 mb-13.25">
      <div className="mt-11 mb-10 md:mb-13.5 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
        <Link href="/" aria-label="Ir para a página inicial">
          <Image
            src={OkacodesLogo}
            alt="Logo da Okacodes"
          />
        </Link>
        <nav className="mx-auto" aria-label="Navegação do rodapé">
          <ul className="text-xs md:text-base flex items-center gap-7.5">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link href={navLink.href}>{navLink.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex items-center gap-2.5">
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://x.com/Okacodesdev">
              <Image
                src={TwitterIcon}
                alt="Twitter (X)"
              />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/okacodesbrasil/">
              <Image
                src={InstagramIcon}
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5592986001909">
              <Image
                src={WppIcon}
                alt="WhatsApp"
              />
            </a>
          </li>
        </ul>
      </div >
      <div className="text-xs w-full flex flex-col-reverse md:flex-row items-center justify-between gap-7.5 md:gap-5">
        <div className="flex-1 flex justify-start">
          <p>CNPJ: 65.027.466/0001-26</p>
        </div>
        <p className="text-center">Todos os direitos reservados.</p>
        <div className="flex-1 hidden md:block"></div>
      </div>
    </footer >
  )
}

export default Footer