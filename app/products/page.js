'use client'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import styles from './products.module.css'


const Products = () => {
  const [productList, setProductList] = useState([])

  useEffect(()=> {

    const getData  = async () => {
      fetch('/api/avocados')
      .then(res => res.json())
      .then(data => {
        setProductList(data.data)
      })
    }

    getData()

  }, )

  return (
    <>
    {
      productList.length > 0 ?
      <section className={styles.containerCards}>
        {productList.map(product => {
          return (
            <Card key={product.id} product={product} />
          )
        })}
      </section>
      :
       null
    }
    </>
  )
}

export default Products