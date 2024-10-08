import { Button } from '@prism/dropcloth';

const ProductButtons = () => {
	return (
		<div className='swdc-flex swdc-flex-col sm:swdc-flex-row swdc-items-stretch sm:swdc-space-y-0 sm:swdc-space-x-4 swdc-justify-between sm:swdc-justify-around swdc-w-full swdc-space-y-2 swdc-mb-2'>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				WoodScapes Product
			</Button>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				Emerald Product
			</Button>
			<Button className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'>
				Duration Product Acrylic
			</Button>
		</div>
	);
};

export default ProductButtons;
