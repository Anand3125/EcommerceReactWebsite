import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const CategoryProducts = () => {
    const{name}=useParams()
    const[products,setProducts]=useState([])
    
 useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
fetchCategories();
    }, []);
 if(products?.length === 0) return <div class="loader"> </div>
       return(
       
        <ProductCard products={products}/>
      )
    }

export default CategoryProducts
