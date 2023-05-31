'use client'
import React, { useEffect, useState, useContext } from 'react'
import styles from './productDetail.module.css'
import Image from 'next/image'
import { Message_data } from "../../../context/context";

const ProductDetail = ({params}) => {
  const [product, setProduct] = useState(null)
  const { message, setMessage } = useContext(Message_data);
  const { id } = params


  function sendData() {
    var data = 'new message';
    setMessage(data);
  }

  useEffect(()=> {

    const getData  = async () => {
      fetch(`/api/avocados/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
    }

    getData()

  }, )

  let shape, hardiness, taste, image;
  if(product && product.attributes){
    shape = product.attributes.shape
    hardiness = product.attributes.hardiness
    taste = product.attributes.taste
    image = `/../public/assets/${product.image}`
  }

  return (
    <>
      {
        product ?
        <>

          <section className={styles.container}>
            <article className={styles.avocado}>
              <div>
                <Image src={image} alt={product.image} width={300} height={300} />
              </div>
              <div className={styles.containerDesc}>
                <h2> {product.name} </h2>
                <span> {product.price} </span>
                <div className={styles.containerSku}>
                  <p> {product.sku} </p>
                </div>
                <button className={styles.buttonAdd} onClick={() => sendData()}>Add to cart</button>
                <h5>{message}</h5>
              </div>
            </article>
            <article>

            </article>
          </section>
          <section className={styles.containerAtributte}>
            <div className={styles.spaceAttribute}>
              <h4>About this avocado</h4>
              <span>{product.attributes.description}
              </span>
              <hr />
              <table className={styles.tableAtributte}>
                <tr>
                  <td colSpan="4" className={styles.titleTable}>Atributes</td>
                </tr>
                <tr className={styles.contentTable}>
                  <td colSpan="3">Shape</td>
                  &#124;
                  <td colSpan="1">{shape}</td>
                </tr>
                <tr className={styles.contentTable}>
                  <td colSpan="3">Hardiness</td>
                  &#124;
                  <td colSpan="1">{hardiness}</td>
                </tr>
                <tr className={styles.contentTable}>
                  <td colSpan="3">Taste</td>
                  &#124;
                  <td colSpan="1">{taste}</td>
                </tr>
                </table>
            </div>

          </section>
        </>
        :
        <h1>No item founded</h1>
      }
    </>
  )
}

export default ProductDetail


