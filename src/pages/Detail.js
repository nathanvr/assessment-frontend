import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/Detail.scss";

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return <p>loading</p>;
  }

  if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  return (
    <div className="productDetail">
      <figure className="productDetail__img">
        <p>{data.category}</p>
        <img src={data.image} alt="detail" />
      </figure>
      <div className="productDetail__info">
        <h2>{data.title}</h2>
        <p className="productDetail__info__description">{data.description}</p>
        <p className="productDetail__info__price">
          <strong>Price: {data.price} USD</strong>
        </p>
      </div>
    </div>
  );
};

export default Detail;
