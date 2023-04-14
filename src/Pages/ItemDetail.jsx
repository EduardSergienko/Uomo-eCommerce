import { useParams } from 'react-router-dom';
import SingleProduct from 'components/ShopContent/SingleProduct/SingleProduct';
export default function ItemDetail() {
  const { itemId } = useParams();
  return (
    <main>
      <SingleProduct productId={itemId} />
    </main>
  );
}
