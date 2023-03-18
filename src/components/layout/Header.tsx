import Image from 'next/image'
import Logo from "../../assets/soup-logo.png"

export default function Header() {
    return (
      <header>
      <Image
      src={Logo}
      alt="Soup Swap Logo"
      className='soup-logo'
    />
      </header>
      
    )
    }