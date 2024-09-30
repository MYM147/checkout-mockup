import Sidebar from '../Sidebar';
import ShoppingCart from './ShoppingCart';

const ViewCartPage = () => {
  return (
		<>
			<div className='md:swdc-flex'>
				<ShoppingCart />
				<Sidebar />
			</div>
		</>
	);
}

export default ViewCartPage;