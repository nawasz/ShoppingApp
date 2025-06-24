//import Image from "next/image";
// import styles from "./page.module.css";
import ProductGrid from "../components/Product/ProductGrid/ProductGrid";
import { Product } from "@/types/product";

export default async function Home() {
  let  products:Product[];
  const getProducts = async():Promise<Product[]> =>{
      try{
                 const res =  await fetch('https://fakestoreapi.com/products');
                 const data = await res.json();
        
          products = data;
      
          return products;
       }catch(e){
        console.log(e);
        return [];
      }
     
  }

  console.log(getProducts())

  return (
    <div >
      <ProductGrid products={await getProducts()}/>
    </div>
  );
}
