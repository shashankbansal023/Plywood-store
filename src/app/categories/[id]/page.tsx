import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import thickPlywood from '../../../components/Images/18mm-plywood.jpeg';
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import thinPlywood from '../../../components/Images/6mm-plywood.jpeg';
import centuryPlywood from '../../../components/Images/century-plywood.jpeg';
import greenPly from '../../../components/Images/greenply.png';
import actionTesa from '../../../components/Images/HDHMRboard.webp';
import whiteHDHMR from '../../../components/Images/color-hdhmr.webp';
import fabricHdhmr from '../../../components/Images/fabric-hdhmr.webp';
import flushDoorPic from '../../../components/Images/flush-door-pic.jpeg';
import mdfBoard from '../../../components/Images/mdf-boards.jpg';
import mdf from '../../../components/Images/mdf.jpeg';
import mdfThick from '../../../components/Images/mdfBoard.jpeg';
import fevicolSH from '../../../components/Images/fevicol-sh.jpeg';
import fevicolMarine from '../../../components/Images/favicol-marine.webp';
import fevicolHeatx from '../../../components/Images/heatx.jpeg';
import fevicolProbond from '../../../components/Images/probond.webp';
import fevicol50l from '../../../components/Images/fevicol-sh-50l.jpeg';
import Link from "next/link";
import whatsappLogo from '../../../components/Images/whatsapp-icon.gif';
import sunmicaLight from '../../../components/Images/sunmica-light-brown.jpeg';
import sunmicaWhite from '../../../components/Images/sunmica-white.jpeg';
import sunmicaDark from '../../../components/Images/sunmica-dark-brown.jpeg';
import sunmicaDarkImage from '../../../components/Images/sunmica-dark-image.jpeg';
import phoneIcon from '../../../components/Images/redPhoneIcon.png';
import crossBond from '../../../components/Images/crossbond.jpeg';
import pvcDoor from '../../../components/Images/pvcDoor.jpeg';
import hdhMrBoard from '../../../components/Images/hdhmr-board.jpeg';
import qualityflushDoor from '../../../components/Images/quality-flush-door.jpeg';
import duroTouch from '../../../components/Images/duro-touch.jpeg';
import pvcSheet from '../../../components/Images/pvc-sheet.jpeg';
import molding from '../../../components/Images/molding-2.jpeg';
import pvcTape from '../../../components/Images/pvc-tape.jpeg';
import doorFrame from '../../../components/Images/door-frame.jpeg';
import flushDoorGroup from '../../../components/Images/flush-door-3.jpeg';
import veneerPic from '../../../components/Images/veneer-2.jpg';
import veneer from '../../../components/Images/veneer-3.jpeg';
import veneerImg from '../../../components/Images/veneer-pic.webp';
import veneerDoor from '../../../components/Images/veneer.jpeg';

const plywoodItems = [
    {
        title: "8ft * 4ft Plywood - 18mm ",
        description: '',
        image: <Image src={thickPlywood} width={400} height={400} alt="18mm plywood"/>,
    },
    {
        title: '8ft * 4ft Plywood - 6mm ',
        description: '',
        image: <Image src={thinPlywood} width={400} height={400} alt="6mm plywood"/>,
    },
    {
        title: 'Century Plywood',
        description: '',
        image: <Image src={centuryPlywood} width={400} height={400} alt="18mm plywood"/>,
    },
    {
        title: 'Greenply Plywood',
        description: '',
        image: <Image src={greenPly} width={400} height={400} alt="18mm plywood"/>,
    },
    {
        title: 'Duro Touch Plywood',
        description: '',
        image: <Image src={duroTouch} width={400} height={400} alt="18mm duro-touch plywood"/>,
    }
]

const hdhMrBoards = [
    {
        title: 'Action tesa HDHMR board',
        description: '8ft * 4ft with 18mm thickness',
        image: <Image src={actionTesa} width={400} height={400} alt="Action tesa HDHMR board"/>
    },
    {
        title: 'HDHMR board - White',
        description: '8ft * 4ft with 18mm thickness',
        image: <Image src={whiteHDHMR} width={400} height={400} alt="Action tesa HDHMR board"/>
    },
    {
        title: 'HDHMR board - Fabric',
        description: '8ft * 4ft with 18mm thickness',
        image: <Image src={fabricHdhmr} width={400} height={400} alt="Action tesa HDHMR board Fabric"/>
    },
    {
        title: 'Crossbond HDMR Board',
        description: '8ft * 4ft with 18mm thickness',
        image: <Image src={crossBond} width={400} height={400} alt="Crossbond HDHMR board"/>
    },
    {
        title: 'HDMR Board',
        description: '8ft * 4ft with 18mm thickness',
        image: <Image src={hdhMrBoard} width={400} height={400} alt="HDHMR board Fabric"/>
    },
]

const flushDoorItems = [
    {
        title: 'PVC Door',
        description: '',
        image: <Image src={pvcDoor} width={400} height={400} alt="Laminated Flush Door"/>
    },
    {
        title: 'Flush Door',
        description: '',
        image: <Image src={qualityflushDoor} width={400} height={400} alt="Laminated Flush Door"/>
    },
    {
        title: 'Flush Door',
        description: '',
        image: <Image src={flushDoorGroup} width={400} height={400} alt="Flush Door"/>
    },
    {
        title: 'Flush Door',
        description: '',
        image: <Image src={flushDoorPic} width={400} height={400} alt="Flush Door"/>
    },
   
]

const mdfBoards = [
    {
        title: 'MDF Board',
        description: '',
        image: <Image src={mdf} width={400} height={400} alt="MDF Board"/>
    },
    {
        title: 'MDF Door',
        description: '',
        image: <Image src={mdfBoard} width={400} height={400} alt="MDF Board"/>
    },
    {
        title: 'MDF Board',
        description: '',
        image: <Image src={mdfThick} width={400} height={400} alt="Action tesa HDHMR board"/>
    },
]

const veneerItems = [
    {
        title: 'Veneer Laminates',
        description: '',
        image: <Image src={veneer} width={400} height={400} alt="Veneer Laminates"/>
    },
    {
        title: 'Veneer',
        description: '',
        image: <Image src={veneerPic} width={400} height={400} alt="Veneer Laminates"/>
    },
    {
        title: 'Veneer',
        description: '',
        image: <Image src={veneerImg} width={400} height={400} alt="Veneer Laminates"/>
    },
    {
        title: 'Veneer Board',
        description: '',
        image: <Image src={veneerDoor} width={400} height={400} alt="Veneer Laminates"/>
    },
]

const fevicolItems = [
    {
        title: 'Fevicol SH',
        description: '',
        image: <Image src={fevicolSH} width={400} height={400} alt="Fevicol SH"/>
    },
    {
        title: 'Fevicol Marine',
        description: '',
        image: <Image src={fevicolMarine} width={400} height={400} alt="Fevicol Marine"/>
    },
    {
        title: 'Fevicol Probond',
        description: '',
        image: <Image src={fevicolProbond} width={400} height={400} alt="Fevicol Probond"/>
    },
    {
        title: 'Heatx',
        description: '',
        image: <Image src={fevicolHeatx} width={400} height={400} alt="Fevicol Heatx"/>
    },
    {
        title: 'Fevicol SH 50 litres',
        description: '',
        image: <Image src={fevicol50l} width={400} height={400} alt="Fevicol SH 50 litres"/>
    },

]

const sunmicaLaminates = [
    {
        title: '',
        description: '',
        image: <Image src={sunmicaDark} width={400} height={400} alt="Sunmica Dark"/>,
    },
    {
        title: '',
        description: '',
        image: <Image src={sunmicaLight} width={400} height={400} alt="Sunmica Light"/>,
    },
    {
        image: <Image src={sunmicaWhite} width={400} height={400} alt="Fevicol SH 50 litres"/>,
        description: '',
        title: '',
    },
    {
        title: '',
        description: '',
        image: <Image src={sunmicaDarkImage} width={400} height={400} alt="Fevicol SH 50 litres"/>,
    }
]

const moldingAndMargins = [
    {
        title: 'Moulding & Margins',
        description: '',
        image: <Image src={molding} width={400} height={300} alt="Moulding"/>,
    },
    {
        title: 'PVC Sheet',
        description: '',
        image: <Image src={pvcSheet} width={400} height={300} alt="PVC Sheet"/>,
    },
    {
        title: 'PVC tape',
        description: '',
        image: <Image src={pvcTape} width={400} height={400} alt="PVC Tape"/>,
    },
    {
        title: 'Door Frame',
        description: '',
        image: <Image src={doorFrame} width={400} height={400} alt="Door Frame"/>,
    },

]


export default function Categories({params} : {params: {id :string }}) {

    const categoryItems = (() => {
        switch(params.id) {
            case "plywood": 
                return plywoodItems;
            case "hdhmr":
                return hdhMrBoards;
            case "flush-door":
                return flushDoorItems;
            case "mdf":
                return mdfBoards;
            case "adhesives":
                return fevicolItems;
            case "laminates":
                return sunmicaLaminates;
            case "mouldings":
                return moldingAndMargins;
            case 'veneers':
                return veneerItems;
            default: 
                return plywoodItems;
        }
    })();

    return (
        <section className="flex flex-col  bg-white">
            <Navbar/>
            <div className="flex m-4">
                <div className="md:flex justify-between">
                    <div className="flex-1 flex items-center m-auto justify-center uppercase font-bold">{params.id}</div>
                    <div className="flex flex-1 flex-col mt-[10px]">
                        <div className="flex-1 grid grid-cols-2 gap-4">
                        {categoryItems?.map((item: any, index: any) => {
                            return (
                                <div className="flex border box-shadow" key={index}>
                                    <ProductCard
                                        title={item.title}
                                        description={item.description}
                                        imageSrc={item.image}
                                    />
                                </div>
                            )
                        })}
                        </div>
                        <div className="flex justify-center font-light mt-[10px]">Available in all sizes . </div>
                        <div className="flex justify-center font-light mt-[10px]">All Designs are available. </div>
                        <div className="flex justify-center font-medium mt-[10px]">
                            Please contact for prices . Best Prices are available in Delhi.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Footer/>
            </div>
            <Link target="_blank" href="https://wa.me/8750110868?text=Hi+%2C%0D%0AI+want+to+get+best+quality+and+affordable+plywood%2C+HDHMR+board+%2C+flush+door%2C+etc.+at+Krishna+Timber+and+Plywood.+" className='fixed z-200 right-[50px] top-[69vh]'>
          <Image
            alt="whatsapp"
            style={{width:'60px' , height: '60px'}}
            src={whatsappLogo}
          />
        </Link>
        <Link target="_blank" href="tel:8750110868" className='md:hidden fixed z-200 left-[50px] top-[70vh]'>
          <Image
            alt="phoneIcon"
            style={{width:'50px', height: '50px'}}
            src={phoneIcon}
          />
        </Link>
        </section>
    )
}