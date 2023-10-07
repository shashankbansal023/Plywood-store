import Image from 'next/image'
import { Metadata } from 'next'
// import logo from '../components/Images/logo.jpeg';
import plywoodPic from '../components/Images/plywood-pic.webp';
import plywoodCategoryPic from '../components/Images/plywood-img.jpeg';
import hdhmrBoardPic from '../components/Images/icons8-whatsapp-color/hdhmr-board.png';
import Link from 'next/link';
import backgroundImg from '../components/Images/background-img.jpeg';
import sunmicaLaminatesSheet from '../components/Images/sunmica-laminate-sheet.jpeg';
import sunmicaLaminate from '../components/Images/sunmica-laminate.jpeg';
import flushDoor from '../components/Images/flush-door.jpeg';
// import bestQuality from '../components/Images/best-quality.jpeg';
// import bestQuality from '../components/Images/best-quality-img.jpeg'
import whatsappLogo from '../components/Images/whatsapp-icon.gif';
import bestQualityPic from '../components/Images/icons8-whatsapp-color/best-quality.jpeg';
import bestPricePic from '../components/Images/icons8-whatsapp-color/best-price.jpeg';

export const metadata: Metadata = {
  title: 'Krishna Timber and Plywood | Buy Plywood, HDHMR board , Flush Door at Best Prices - Dealers & Suppliers , Retailers',
  description: 'Krishnatimberandplywood.in is an online portal and leading supplier and dealer of plywood , HDHMR board , flush door, laminates, MDF, veneer, flush door, block board and adhesives. Buy genuine products at best prices.',
  keywords: "plywood dealers, hdhmr board delhi,hdhmr board price, plywood companies in delhi, buy laminates, mdf dealers delhi, plywood suppliers, krishna timber and plywood"
}
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[100%] relative ">
      <div className='flex gap-[10px] justify-end p-0'>
        <Navbar/>
      </div>
      <div className='w-[100vw] p-0'>
      <Image
          src={plywoodPic}
          objectFit='contain'
          alt="Krishna Timber and Plywood | Plywood, HDHMR board , laminates , MDF at best prices."
          style={{width: '100%' , height:'40vh'}}
        />
        </div>
        <div className="flex flex-col gap-[10px] items-center py-[20px] w-screen bg-white m-4">
          <h1 className='font-extrabold text-[24px]'>Choose a category</h1>
          <div className='flex gap-[20px] flex-wrap items-center justify-center'>
              <Link href="/categories/plywood">
                  <div className='flex flex-col gap-[15px]'>
                    <Image
                      src={plywoodCategoryPic}
                      width={250}
                      // height={100}
                      style={{height: '300px'}}
                      alt='Plywood, block-board,best quality'
                    />
                    <span className='text-center uppercase font-bold'> Plywood </span>
                  </div>
              </Link>
              <Link href="/categories/hdhmr-board">
                  <div className='flex flex-col gap-[10px]'>
                    <Image
                      src={hdhmrBoardPic}
                      width={300}
                      style={{height: '300px' , backgroundColor:'bg-grey-600'}}
                      objectFit='contain'
                      alt='HDHMR board , all sizes'
                    />
                    <span className='text-center uppercase font-bold'> HDHMR board </span>
                  </div>
              </Link>
              <Link href="/categories/laminates">
                  <div className='flex flex-col gap-[10px]'>
                    <Image
                      src={sunmicaLaminate}
                      width={300}
                      style={{height: '300px' , backgroundColor:'bg-grey-600'}}
                      alt='Sunmica laminates, best quality and best prices'
                    />
                    <span className='text-center uppercase font-bold'> Sunmica Laminates </span>
                  </div>
              </Link>
              <Link href="/categories/flush-door">
                  <div className='flex flex-col gap-[10px]'>
                    <Image
                      src={flushDoor}
                      width={300}
                      style={{height: '300px' , backgroundColor:'bg-grey-600'}}
                      alt='Flush door'
                    />
                    <span className='text-center uppercase font-bold'> Flush Door </span>
                  </div>
              </Link>
          </div>
        </div>
        <div className='flex gap-[50px] justify-center bg-white items-center px-[100px] flex-wrap'>
            <Image
              src={bestQualityPic}
              width={300}
              alt="Best Quality Plywood"
            />
            <Image
              src={bestPricePic}
              width={300}
              alt="Best Quality Plywood"
            />
        </div>
        <Footer/>
        <Link href="https://wa.me/9899027343" className='fixed z-200 right-[50px] top-[70vh]'>
          <Image
            alt="whatsapp"
            style={{width:'60px' , height: '60px'}}
            src={whatsappLogo}
          />
        </Link>
    </main>
  )
}
