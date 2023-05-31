import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import IconAvocado from '../../assets/icon.png'

const Navbar = () => {
  return (
    <>
        <nav className={styles.nav}>
          <Link href='/' className={styles.linkIcon}>
            <Image src={IconAvocado}  alt='icon avocado' width={35} />  &#8226; Home
          </Link>
          <Link href='/' className={styles.linkIcon}>
            <Image src={IconAvocado}  alt='icon avocado' width={35} />  &#8226; Cart
          </Link>
        </nav>
    </>
  )
}

export default Navbar