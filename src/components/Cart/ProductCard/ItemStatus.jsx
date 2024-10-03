import { Tooltip } from '@prism/dropcloth';
import QuantityPrice from './QuantityPrice';

const ItemStatus = () => {
	return (
		<div className='swdc-flex md:swdc-w-2/6 swdc-w-full swdc-ml-2'>
			<QuantityPrice />

			<div className='swdc-pr-1 swdc-w-1/2 sm:swdc-ml-2 sm:swdc-border-none swdc-border-l swdc-pl-2 swdc-border-[#e5e5e5]'>
				<h3 className='swdc-text-[#026533] swdc-text-base swdc-font-bold'>
					In Stock
				</h3>
				<p className='swdc-text-xs'>
					Most orders placed before Noon will be ready same day.
				</p>
				<Tooltip
					offsetValue='10'
					placement='top-start'
					polarity='dark'
					tooltip='Wait until you receive a ready for pickup email before proceeding to the store. Orders placed outside of normal store hours or near store closing will be processed the next business day. Large volume orders may take additional time to prepare.'>
					<p className='swdc-text-xs swdc-underline swdc-text-[#336699]'>
						Details
					</p>
				</Tooltip>
			</div>
		</div>
	);
}
export default ItemStatus;
