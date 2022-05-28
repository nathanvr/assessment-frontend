import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { getProduct } from "../store/reducers/Product.reducer";
import "../styles/pages/home.scss"


function Home() {
  const dispatch = useDispatch()
  const {products, loading, error} = useSelector((state)=>state.productReducer)
  useEffect(()=>{
    dispatch(getProduct())
}, [])

if (loading === true){
    return <p>loading</p>
}

if (error === true){
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>
}


  return (
    <div className="home__container">
      <h1 className="home__container__title">Bienvenido a tu tienda de confianza</h1>
      
      <div className="home__container__product">
      {products.map((item, index) =>(
         <ProductCard product = {item} key = {index} />
      )
      
      
    )}
    </div>


    </div>
  );

    }
export default Home;
