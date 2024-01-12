"use client"
import Image from 'next/image'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Product from '@/components/product/Product'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto",
      text: "djaoija,hvkueho",
      price: "$10.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$20.000",
      link: ""
    },
    {
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/a3e569f4-4b97-4127-a209-40fb319c5fe8.7f550a00c80ad69806991eab8b202010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$30.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto",
      text: "djaoija,hvkueho",
      price: "$10.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$20.000",
      link: ""
    },
    {
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/a3e569f4-4b97-4127-a209-40fb319c5fe8.7f550a00c80ad69806991eab8b202010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$30.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto",
      text: "djaoija,hvkueho",
      price: "$10.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$20.000",
      link: ""
    },
    {
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/a3e569f4-4b97-4127-a209-40fb319c5fe8.7f550a00c80ad69806991eab8b202010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$30.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto",
      text: "djaoija,hvkueho",
      price: "$10.000",
      link: ""
    },
    {
      img: "https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$20.000",
      link: ""
    },
    {
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/a3e569f4-4b97-4127-a209-40fb319c5fe8.7f550a00c80ad69806991eab8b202010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      title: "Corset bajo busto 2",
      text: "djaoija,hvkueho",
      price: "$30.000",
      link: ""
    },
  ])
  return (
    <main >
      <div>
        <Header/>
        <div className={styles.productsContainer}>
          {
            products.map((product) => {
              return (
                <Product
                  link={product.link}
                  img={product.img}
                  title={product.title}
                  text={product.text}
                  price={product.price}
                />
              )
            })
          }
        </div>
        <br></br>
        <Footer/>
      </div>
    </main>
  )
}
