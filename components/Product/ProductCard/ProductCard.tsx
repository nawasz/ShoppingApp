'use client';
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
import  EmptyHeart from '../../../public/ProductCard/emptyHeart.svg';
import  FillHeart from '../../../public/ProductCard/fillHeart.svg';
import './ProductCard.css'
interface ProductCardProps{
    product:Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) =>{
  const [liked,setLiked] = useState(false);
  console.log(liked)
      return(
        <div className="product-card-container">
                <div className="product-image-container">
                  <Image
                   src={product.image}
                   alt={product.title}
                   width={300}
                   height={462}
                   sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"/> 
                </div>
                 <div className="product-content">
                      {/* <h3>{product.title}</h3> */}
                      <span><span style={{textDecoration:"underline"} }>Sign in</span> or Create an account to see pricing  </span>
                      <span onClick={() =>{setLiked(!liked)}}><Image src={liked? FillHeart:EmptyHeart } alt="heart"/></span>
                </div>
                
                   
        </div>
      )


}

export default ProductCard;