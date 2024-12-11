import Image from 'next/image'
import { Metadata } from 'next'
// import logo from '../components/Images/logo.jpeg';
import plywoodPic from '../components/Images/plywood-pic.webp';
import plywoodCategoryPic from '../components/Images/plywood-img.jpeg';
import hdhmrBoardPic from '../components/Images/icons8-whatsapp-color/hdhmr-board.png';
import Link from 'next/link';
import sunmicaLaminate from '../components/Images/sunmica-laminate.jpeg';
import flushDoor from '../components/Images/flush-door.jpeg';
import whatsappLogo from '../components/Images/whatsapp-logo.png';
import bestQualityPic from '../components/Images/icons8-whatsapp-color/best-quality.jpeg';
import bestPricePic from '../components/Images/icons8-whatsapp-color/best-price.jpeg';
import phoneIcon from '../components/Images/telephone.png';
import moulding from '../components/Images/moldings.webp';
import veneerPic from '../components/Images/veneer-pic.webp';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';

export const metadata: Metadata = {
  title: 'Krishna Timber and Plywood | Buy Plywood, HDHMR board , Flush Door at Best Prices - Dealers & Suppliers , Retailers',
  description: 'Krishnatimberandplywood.in is an online portal and leading supplier and dealer of plywood , HDHMR board , flush door, laminates, MDF, veneer, flush door, block board and adhesives. Buy genuine products at best prices.',
  keywords: "plywood dealers, hdhmr board delhi,hdhmr board price, plywood companies in delhi, buy laminates, mdf dealers delhi, plywood suppliers, krishna timber and plywood"
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[100%] relative">
      <div className='flex gap-[10px] justify-end p-0'>
        <Navbar/>
      </div>
      <div className='w-[100%] p-0'>
        <Image
          src={plywoodPic}
          objectFit='contain'
          alt="Krishna Timber and Plywood | Plywood, HDHMR board , laminates , MDF at best prices."
          style={{width: '100%' , height:'40vh'}}
        />
        </div>
        <div className='flex flex-col items-center gap-5 justify-center w-[100%] my-[20px]'>
          <div className='underline uppercase font-bold text-3xl'>Our store</div>
          <VideoPlayer />
        </div>
        <div className='flex justify-center font-bold w-[90%] mx-auto'>Add: 831 A , Mehrauli Main Bazaar, New Delhi - 30 </div>
        <div className="flex flex-col gap-[10px] items-center py-[20px] w-[100%] bg-white">
          <h1 className='font-extrabold text-[24px]'>Choose a category</h1>
          <div className='flex gap-[10px] md:gap-[20px] flex-wrap items-center justify-center w-[98%]'>
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
              <Link href="/categories/hdhmr">
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
              <Link href="/categories/veneers">
                  <div className='flex flex-col gap-[10px]'>
                    <Image
                      src={veneerPic}
                      width={300}
                      style={{height: '300px' , backgroundColor:'bg-grey-600'}}
                      alt='Molding'
                    />
                    <span className='text-center uppercase font-bold w-[250px]'>Veneers</span>
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
              <Link href="/categories/mouldings">
                  <div className='flex flex-col gap-[10px]'>
                    <Image
                      src={moulding}
                      width={300}
                      style={{height: '250px' , backgroundColor:'bg-grey-600'}}
                      alt='Molding'
                    />
                    <span className='text-center uppercase font-bold w-[250px]'> Molding & Margins, PVC Tape,Door Frame, etc  </span>
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
        <div className='flex justify-center items-center my-2'>
        <a
        href="https://o23zkekqkj0pqojs.public.blob.vercel-storage.com/sunmica-laminates/Advance-Omega-0.8mm-Folder1-ZlCuk1jOMz1UUzEdW8njFWdRARhzCo.pdf"
        download="SampleFile.pdf"
        target='_blank'
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[90%] max-w-[max-content]"
      >
        Download Sunmica Laminates 0.8mm PDF
      </a>
        </div>
        <Footer/>
        <Link target='_blank' href="https://wa.me/9899027343?text=Hi+%2C%0D%0AI+want+to+get+best+quality+and+affordable+plywood%2C+HDHMR+board+%2C+flush+door%2C+etc.+at+Krishna+Timber+and+Plywood.+" 
           className='fixed z-200 right-[20px] top-[80vh]'>
          <Image
            alt="whatsapp"
            style={{width:'50px' , height: '50px'}}
            src={whatsappLogo}
          />
        </Link>
        <Link target="_blank" href="tel:9899027343" className='md:hidden fixed z-200 left-[20px] top-[80vh]'>
          <Image
            alt="phoneIcon"
            style={{width:'50px' , height: '50px'}}
            src={phoneIcon}
          />
        </Link>
    </main>
  )
}
