import {
	IconRegularDelete,
} from '@prism/dropcloth';
import { useState } from 'react';
import ProductButtons from '../ProductButtons';
import Sidebar from '../Sidebar';
import EmptyCart from './EmptyCart';
import ShoppingCart from './ShoppingCart';

const ViewCartPage = () => {
	const [cartIsEmpty, setCartIsEmpty] = useState(false)

  return (
		<>
			<div className='swdc-flex swdc-justify-between swdc-max-w-[995px] swdc-mx-auto swdc-align-middle swdc-mb-3 swdc-pb-2 swdc-px-6 swdc-border-b swdc-border-[#e5e5e5]'>
				<h1 className='swdc-text-[28px]'>Cart</h1>
				<div className='swdc-w-[40px]'>
					<IconRegularDelete className='swdc-icon-2 swdc-fill-[#318bd3] swdc-mx-auto' />
					<p className='swdc-uppercase swdc-text-[10px] swdc-text-[#318bd3] swdc-text-center swdc-font-bold swdc-mx-auto'>
						Delete
					</p>
				</div>
			</div>
			<ProductButtons />
			<div className='md:swdc-flex swdc-max-w-[995px] swdc-mx-auto'>
				{cartIsEmpty ? (
					<EmptyCart />
				) : (
					<>
						<ShoppingCart />
						<Sidebar />
					</>
				)}
			</div>
		</>
	);
}

export default ViewCartPage;