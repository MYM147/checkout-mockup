import { useState } from 'react';
import Sidebar from '../Sidebar';
import EmptyCart from './EmptyCart';
import ShoppingCart from './ShoppingCart';

const ViewCartPage = () => {
	const [cartIsEmpty, setCartIsEmpty] = useState(false)

  return (
		<div className='md:swdc-flex swdc-max-w-[995px]'>
			{cartIsEmpty ? (
				<EmptyCart />
			) : (
				<>
					<ShoppingCart />
					<Sidebar />
				</>
			)}
		</div>
	);
}

export default ViewCartPage;