"use client"
import Image from 'next/image'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Product from '@/components/product/Product'

export default function Home() {
  return (
    <main >
      <div>
        <Header/>
        <Product
          img='https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg'
          title='Corset bajo busto'
          price='$10.000'
        />
        <Product
          img='https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg'
          title='Corset negro tiro alto'
          price='$10.000'
        />
        <Product
          img='https://i5.walmartimages.com.mx/mg/gm/3pp/asr/a3e569f4-4b97-4127-a209-40fb319c5fe8.7f550a00c80ad69806991eab8b202010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
          title='Corset negro tiro alto a a a a a a '
          price='$10.000'
        />
        <br></br>
        <Footer/>
      </div>
    </main>
  )
}
