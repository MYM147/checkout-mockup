import { Button } from '@prism/dropcloth';
import products from '../assets/products.json';


const ProductButtons = () => {
	return (
		<div className='swdc-flex swdc-flex-col sm:swdc-flex-row swdc-items-stretch sm:swdc-space-y-0 sm:swdc-space-x-4 swdc-justify-between sm:swdc-justify-around swdc-max-w-[995px] swdc-mx-auto swdc-space-y-2 swdc-mb-2'>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				Add WoodScapes Product
			</Button>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				Add Emerald Product
			</Button>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				Add Duration Product
			</Button>
		</div>
	);
};

export default ProductButtons;
