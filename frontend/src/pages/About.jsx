import React from "react"
import Title from "../components/Title"
import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title
          text1={"ABOUT"}
          text2={"US"}
        />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          src={assets.about_img}
          className='w-full md:max-w-[450px] '
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur provident nisi minima iure in ad ducimus, distinctio
            illum vitae autem, id nemo consectetur tenetur, ea impedit cum
            quibusdam eaque nostrum? Ad voluptatum unde omnis fugit nihil,
            repellendus officiis eligendi quia recusandae neque, autem nulla
            natus iste temporibus est odio sit ea ipsum mollitia explicabo
            asperiores odit! Fuga mollitia quisquam nostrum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consequatur cupiditate voluptates rem, quos perspiciatis laborum
            laudantium sapiente, natus, velit amet corrupti beatae dignissimos
            sit et placeat accusantium. Quidem, sint, ea dolorem nam illo
            expedita animi cum, numquam officia eum aspernatur est? Dolore, sed
            ad.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tempora animi facere veniam molestiae magni beatae
            voluptatibus, placeat provident recusandae maiores debitis soluta
            quibusdam quo illum assumenda, dolores nulla ad?
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title
          text1={"WHY"}
          text2={"CHOOSE US"}
        />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            vitae perferendis provident sed, est, aspernatur cum quos aliquam
            commodi nam quod temporibus in mollitia nobis vel veniam, atque
            deleniti veritatis?
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            vitae perferendis provident sed, est, aspernatur cum quos aliquam
            commodi nam quod temporibus in mollitia nobis vel veniam, atque
            deleniti veritatis?
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service: </b>
          <p className='text-gray-600 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            vitae perferendis provident sed, est, aspernatur cum quos aliquam
            commodi nam quod temporibus in mollitia nobis vel veniam, atque
            deleniti veritatis?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
