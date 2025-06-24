import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types/product";
import './ProductGrid.css'

interface ProductCardProps{
    products:Product[]
}



const ProductGrid:React.FC<ProductCardProps> =({products}) =>{
     return(

        <div className="products-grid">
        {
           products ? products.map(product => 
           <ProductCard key={product.id} product={product}/>) : <p> No Products Found</p>
        }
        </div>
          
     )
} 


export default ProductGrid;