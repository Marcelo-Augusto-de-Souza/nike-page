import { Fragment, useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Modal from "../components/Modal";


const Hero = () => {
  const modalShow = 5;
  const [nameShoe, setNameShoe] = useState("Nike Air Jordan-20")
  const [price, setPrice] = useState("$205.30")
  const [showModal, setShowModal] = useState(false);
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const hello = () => {
    
  }

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 '>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=" xl:whitespace-nowrap relative z-10 pr-10  dark:text-white">The</span>
          <span className=' xl:whitespace-nowrap relative z-10 pr-10  text-coral-red'>
            New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span>
          <span className="dark:text-white"> Shoes</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-300'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />


        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold dark:text-white'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray dark:text-slate-300'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        
        <img
            src={bigShoeImg}
            alt='shoe colletion'
            width={610}
            height={502}
            className='object-contain relative z-10 cursor-pointer'
            onClick={()=>setShowModal(true)}
        />
        
        

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                changeName={(nameN) => setNameShoe(nameN)}
                changePrice={(priceN) => setPrice(priceN)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        <Modal isvisible={showModal} 
               onClose={() => setShowModal(false)}
               shoeImg={bigShoeImg}
               nameShoes={nameShoe}
               priceShoes={price}>
        </Modal>
      </div>
    </section>
  );
};

export default Hero;