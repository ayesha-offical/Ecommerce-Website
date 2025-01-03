"use client";
import Product from "@/components/product";
import Productdata from "@/productdata/data";
import { useRouter } from "next/navigation";
const Page = () => {
  const routing = useRouter()
  return (
  <>
  <h1 className="flex justify-center text-5xl py-11 font-black text-slate-950 bg-white">Our Product</h1>
    <div className=' bg-white grid sm:grid-col-2 lg:grid-cols-3 justify-center items-center xl:grid-cols-3 gap-5'>

    {Productdata.map((card, index) =>{
     return(
 <div className="cursor-pointer" key={index} onClick={() => routing.push(`/products/${index + 1}`)}>
 <Product
 image = {card.image} 
  title = {card.title}
  price = {card.price}
  description = {card.description}
  rating={card.rating}
  />
 </div>
     )
    })}     
 
     </div>
     </>
  )
}

export default Page