import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard';

const Categories = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
           const fetchCategories = async () => {
               try {
                   const response = await fetch('https://fakestoreapi.com/products/categories');
                   if (!response.ok) {
                       throw new Error('Network response was not ok');
                   }
                   const data = await response.json();
                   console.log(data)
                   setcategories(data);
               } catch (error) {
                   console.error('Error fetching data:', error);
               }
           };
   fetchCategories();
       }, []);

    if(categories?.length === 0) return 
          return(
            <>
            <div className="flex flex-col text-center w-full mt-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">CHOOSE BY  POPULAR CATEGORIES IN OUR PRODUCTS LIST</h1>
        </div>
              <FeatureCard cards={categories}/>
              </>
            )
        }
        export default Categories
          
        
       

