import PropTypes from 'prop-types';
import { useState } from 'react';
import RemoveProductModal from '../Modals/RemoveProductModal';

const InputStepper = ({ onChange, onRemove }) => {
	const [numberOfItems, setNumberOfItems] = useState(1);
	const [showModal, setShowModal] = useState(false);

	const handleDecrement = () => {
		if (numberOfItems > 1) {
			setNumberOfItems((prevCount) => prevCount - 1);
			onChange(numberOfItems - 1);
		} else {
			setShowModal(true);
		}
	};

	const handleIncrement = () => {
		setNumberOfItems((prevCount) => prevCount + 1);
		onChange(numberOfItems + 1);
	};

	const handleConfirmRemoval = () => {
		setShowModal(false);
		onRemove();
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<form className='swdc-my-[15px] swdc-w-full]'>
				<div className='swdc-flex swdc-items-center'>
					<span className='swdc-border swdc-border-[#ccc] swdc-rounded-l-sm swdc-w-[35px]'>
						<button
							type='button'
							id='decrement-button'
							className='swdc-block swdc-m-0 swdc-cursor-pointer swdc-h-[40px] swdc-w-full swdc-bg-[#eaeaea] hover:swdc-bg-[#e5e7eb]  swdc-align-middle swdc-text-center swdc-text-[#333]'
							onClick={handleDecrement}>
							-
						</button>
					</span>

					<input
						type='number'
						className='swdc-w-[40px] swdc-bg-[#fff] swdc-border swdc-border-y-[#ccc] swdc-border-x-0 swdc-h-[42px] swdc-text-center swdc-text-sm focus:swdc-ring-[#3b82f6] focus:swdc-border-[#3b82f6] swdc-block swdc-py-2.5 swdc-pl-[12px] input-no-arrows swdc-pr-[12px]'
						placeholder='1'
						required
						value={numberOfItems}
						onChange={(e) => {
							const newValue = Math.max(1, parseInt(e.target.value) || 1);
							setNumberOfItems(newValue);
							onChange(newValue);
						}}
					/>

					<span className='swdc-border swdc-border-[#ccc] swdc-rounded-r-sm swdc-w-[35px]'>
						<button
							type='button'
							id='increment-button'
							className='swdc-block swdc-m-0 swdc-cursor-pointer swdc-h-[40px] swdc-w-full swdc-bg-[#eaeaea] hover:swdc-bg-[#e5e7eb] swdc-align-middle swdc-text-center swdc-text-[#333]'
							onClick={handleIncrement}>
							+
						</button>
					</span>
				</div>
			</form>

			{showModal && (
				<RemoveProductModal
					isOpen={true}
					onClose={handleCloseModal}
					onConfirm={handleConfirmRemoval}
				/>
			)}
		</>
	);
};

InputStepper.propTypes = {
	onChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default InputStepper;
