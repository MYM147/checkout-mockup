import Sidebar from '../Sidebar';
import ShoppingCart from './ShoppingCart';

const ViewCartPage = () => {
  return (
			<div className='md:swdc-flex swdc-max-w-[995px]'>
				<ShoppingCart />
				<Sidebar />
			</div>
	);
}

export default ViewCartPage;