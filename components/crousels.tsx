import React from 'react'
import Image from 'next/image'

const Crousels = () => {
  return (
  <div className="">
       <div className="carousel w-full">
   <div id="slide1" className="carousel-item relative w-full">
     <Image
       src="/pic1.jpg"
       alt="pic"
       width={1920}
       height={344} 
        />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
       <a href="#slide4" className="btn btn-circle">❮</a>
       <a href="#slide2" className="btn btn-circle">❯</a>
     </div>
   </div>
   <div id="slide2" className="carousel-item relative w-full">
     <Image
       src="/pic2.jpg"
       alt="pic"
       width={1920}
       height={344}  
       />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
       <a href="#slide1" className="btn btn-circle">❮</a>
       <a href="#slide3" className="btn btn-circle">❯</a>
     </div>
   </div>
   <div id="slide3" className="carousel-item relative w-full">
     <Image
       src="/pic3.jpg"
      
       alt="pic"
       width={1920}
       height={344} 
        />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
       <a href="#slide2" className="btn btn-circle">❮</a>
       <a href="#slide4" className="btn btn-circle">❯</a>
     </div>
   </div>
   <div id="slide4" className="carousel-item relative w-full">
     <Image
       src="/pic4.jpg"
       alt="pic"
       width={1920}
       height={344} 
       />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
       <a href="#slide3" className="btn btn-circle">❮</a>
       <a href="#slide1" className="btn btn-circle">❯</a>
     </div>
   </div>
 </div>
     </div>
  )
}

export default Crousels