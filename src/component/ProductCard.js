import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/ProductCard.scss"

const ProductCard =({product}) => {
  const [mins, setMins] = useState(Math.ceil(Math.random()*3))
  const [secs, setSecs] = useState(0)

  useEffect(() => {
    let timer = setInterval(()=>{
      if (secs > 0){
        setSecs( secs - 1)
      }
      if (secs === 0){
        if(mins === 0){
          clearInterval(timer)
        }else{
          setMins(mins- 1 )
          setSecs(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  
  

    return(
        <div className="productCard__Container" key={product.id}>
          <figure className="productCard__Container__img">
            <img src={product.image} loading="lazy" alt = "imag"/>
          </figure>
          <h2>{product.title}</h2>
          <p><strong>{`0${mins}: ${secs > 9? secs : `0${secs}`}`} </strong></p>
          {mins === 0 && secs === 0?(null):(<Link to= {`/ProductDetail/${product.id}`}> <span>Ver detalles</span></Link>)}
          
        </div>



      );


  }

export default ProductCard;