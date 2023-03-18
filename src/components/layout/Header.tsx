import Image from 'next/image'
import Logo from "../../assets/soup-logo.png"
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={Logo}
        alt="Soup Swap Logo"
        className={styles.soupLogo}
      />
      <div>Login Div</div>
    </header>

  )
}