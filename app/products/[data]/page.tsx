import Productdata from "@/productdata/data";
import Deatil from "@/components/deatil";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ data: string }>;
}) {
  const slug = (await params).data;
  const product = Productdata.find((post) => post.id === parseInt(slug));

  if (!product) {
    return notFound();
  }
  return (
    <div className="bg-white">
      <Deatil
        key={product.id}
        image={product.image}
       rating={product.rating}
        title={product.title}
        description={product.description}
        price={product.price}
      />
 
    </div>
  );
}