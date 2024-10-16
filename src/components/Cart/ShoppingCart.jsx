import PropTypes from 'prop-types';
import ProductInStock from './ProductCard/ProductInStock';

const ShoppingCart = ({ cartItems, updateQuantity, removeFromCart }) => {
	return (
		<div className='swdc-w-full md:swdc-w-2/3'>
			{cartItems.map((item) => (
				<ProductInStock
					key={item.id}
					product={item}
					updateQuantity={updateQuantity}
					removeFromCart={removeFromCart}
				/>
			))}
		</div>
	);
};

ShoppingCart.propTypes = {
	cartItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
	updateQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
