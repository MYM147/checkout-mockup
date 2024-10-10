import { Button } from '@prism/dropcloth';
import PropTypes from 'prop-types';
import products from '../../assets/products.json';

const ProductButtons = ({ onProductSelect }) => {
	const handleAddDuration = () => {
		onProductSelect(products.brands.duration[0]);
	};

	const handleAddEmerald = () => {
		onProductSelect(products.brands.emerald[0]);
	};

	const handleAddWoodScapes = () => {
		onProductSelect(products.brands.woodscapes[0]);
	};

	return (
		<div className='swdc-flex swdc-flex-col sm:swdc-flex-row swdc-items-stretch sm:swdc-space-y-0 sm:swdc-space-x-4 swdc-justify-between sm:swdc-justify-around swdc-max-w-[995px] swdc-mx-auto swdc-space-y-2 swdc-mb-2'>
			<Button
				className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'
				onClick={handleAddDuration}>
				Add Duration Product
			</Button>
			<Button
				className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'
				onClick={handleAddEmerald}>
				Add Emerald Product
			</Button>
			<Button
				className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'
				onClick={handleAddWoodScapes}>
				Add WoodScapes Product
			</Button>
		</div>
	);
};

ProductButtons.propTypes = {
	onProductSelect: PropTypes.func.isRequired,
};

export default ProductButtons;