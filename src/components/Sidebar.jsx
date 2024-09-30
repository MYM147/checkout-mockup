import { IconFillMapPin } from '@prism/dropcloth';

const Sidebar = () => {
  return (
		<div className='swdc-order-[2] md:swdc-w-[28%] md:swdc-max-w-[28%] swdc-flex-shrink md:swdc-ml-4 swdc-border swdc-border-[#e5e5e5] sm:swdc-my-2'>
			<div className='swdc-p-2 swdc-border-b swdc-border-[#e5e5e5]'>
				<p></p>
			</div>
			<div className='swdc-p-3 swdc-text-xs'>
				<dl>
					<dt>Selected Store:</dt>
					<dd>
						<div className='swdc-flex'>
							<IconFillMapPin className='swdc-icon-em swdc-text-[#026533]' />
							<p>
								<span className='swdc-font-bold'>Mentor #701575</span>
								<br />
								7872 Plaza Blvd
								<br />
								Mntor, OH 44060-5515
								<br />
								<span className='swdc-font-bold'>Offers</span> Pickup
								<br />
							</p>
						</div>
					</dd>
					<dd>
						<a href='#' className='swdc-font-bold swdc-pt-[10px]'>
							Change Store
						</a>
					</dd>
				</dl>
			</div>
			<div className='swdc-p-3 swdc-text-xs'>
				<label>Job or Project Name / PO:</label>
				<input />
			</div>
			<div className='swdc-p-3 swdc-text-xs'>
				<div className='swdc-flex'>
					<p>Subtotal</p>
					<p>44.99</p>
				</div>
				<div className='swdc-flex swdc-text-xs'>
					<p>Apply Coupon Code</p>
				</div>
				<input />
			</div>
		</div>
	);
}

export default Sidebar;