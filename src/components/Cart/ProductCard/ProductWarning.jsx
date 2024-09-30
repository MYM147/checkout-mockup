import { Button, IconFillWarning, IconRegularWarning } from '@prism/dropcloth';
import { useState } from 'react';
import RemoveProductModal from '../RemoveProductModal/RemoveProductModal';

const ProductWarning = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false)
	};

	const handleConfirmRemoval = () => {
		console.log('Item confirmed for removal');
		handleCloseModal();
		// Add actual removal logic here
	};

  return (
		<>
			<div className='md:swdc-ml-[15%] sm:swdc-ml-2'>
				<div className='swdc-text-xs swdc-mt-4 sm:swdc-flex sm:swdc-flex-col'>
					<div className='swdc-mb-2 swdc-px-2 md:swdc-order-first sm:swdc-order-last'>
						<ul className='swdc-flex swdc-font-bold'>
							<li className='swdc-mx-1 hover:swdc-underline'>
								<Button
									variant='text'
									className='swdc-text-[#0069ae] swdc-text-[10px] hover:swdc-bg-white'>
									Edit
								</Button>
							</li>
							<li className='swdc-border-r swdc-h-2 swdc-my-auto'></li>
							<li className='swdc-mx-1 hover:swdc-underline'>
								<Button
									variant='text'
									className='swdc-text-[#0069ae] swdc-text-[10px] hover:swdc-bg-white'>
									Save for Later
								</Button>
							</li>
							<li className='swdc-border-r swdc-h-2 swdc-my-auto'></li>
							<li className='swc-mx-1 hover:swdc-underline'>
								<Button
									variant='text'
									onClick={handleOpenModal}
									showModal
									className='swdc-text-[#0069ae] swdc-text-[10px] hover:swdc-bg-white'>
									Remove
								</Button>
							</li>
						</ul>
					</div>

					<div className='swdc-flex md:swdc-w-4/6 md:swdc-relative md:swdc-left-1 md:swdc-order-last sm:swdc-order-first swdc-mb-2 swdc-px-2'>
						<div className='swdc-relative swdc-mr-1 swdc-align-middle'>
							<IconFillWarning className='swdc-icon-2 swdc-fill-[#fefe04]' />
							<div className='swdc-absolute swdc-top-0 swdc-left-0'>
								<IconRegularWarning className='swdc-icon-2' />
							</div>
						</div>
						<p className='swdc-text-[.6875rem] swdc-w-full sm:swdc-pr-2'>
							WARNING: This product contains chemicals known to the State of
							California to cause cancer and birth defects or other reproductive
							harm.
						</p>
					</div>
				</div>
			</div>

			<RemoveProductModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirmRemoval}
			/>
		</>
	);
};

export default ProductWarning;