import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
      <h2>Product Detail Page (ID: {id})</h2>
      <p>Yahan detailed product info ayega.</p>
    </div>
  );
};

export default ProductDetail;
