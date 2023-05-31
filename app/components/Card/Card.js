import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Image from 'next/image'

const Card = ({product}) => {
  let image = `/../public/assets/${product.image}`

  return (
    <Link key={product.id} href={`/products/${product.id}`}>
      <article className={styles.card} key={product.id}>
        <Image src={image} alt={product.image} width={200} height={200} />
        <div className={styles.containerTitle}>
          <h2> {product.name} </h2>
          <span> {product.price} </span>
        </div>
      </article>
    </Link>
  )
}

export default Card