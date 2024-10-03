'use client';

import {
	IconRegularCreditCard,
	IconRegularNotepad,
	IconRegularPackage,
	IconRegularShoppingCart,
	Tab, TabList, TabPanel, Tabs
} from '@prism/dropcloth';
import ViewCartPage from './Cart/ViewCartPage';

// IconFillCreditCard, IconFillNotepad, IconFillPackage, IconFillShoppingCart, 

const NavTabs = () => {
	return (
		<Tabs className='swdc-m-auto swdc-w-full swdc-bg-white swdc-max-w-[1075px]'>
			<TabList className='swdc-font-bold sm:swdc-w-full swdc-text-center swdc-pb-3 swdc-mb-4 md:swdc-border-b md:swdc-border-[#e5e5e5]'>
				<Tab className='swdc-bg-white swdc-w-full swdc-capitalize md:swdc-w-auto'>
					<IconRegularShoppingCart className='swdc-icon-1' />
					<span className='md:swdc-text-base sm:swdc-text-2xl'>Cart</span>
				</Tab>
				<Tab className='swdc-bg-white swdc-w-full swdc-capitalize md:swdc-w-auto'>
					<IconRegularPackage className='swdc-icon-1' />
					<span className='md:swdc-text-base sm:swdc-text-2xl'>
						Fulfillment Options
					</span>
				</Tab>
				<Tab className='swdc-bg-white swdc-w-full swdc-capitalize md:swdc-w-auto'>
					<IconRegularCreditCard className='swdc-icon-1' />
					<span className='md:swdc-text-base sm:swdc-text-2xl'>
						Payment &amp; Billing
					</span>
				</Tab>
				<Tab className='swdc-bg-white wdc-w-full swdc-capitalize md:swdc-w-auto'>
					<IconRegularNotepad className='swdc-icon-1' />
					<span className='md:swdc-text-base sm:swdc-text-2xl'>
						Review Order
					</span>
				</Tab>
			</TabList>

			<TabPanel className='swdc-px-[3.52%]'>
				<ViewCartPage />
			</TabPanel>
			<TabPanel className='swdc-px-[30px]'>{/* Fulfillment */}</TabPanel>
			<TabPanel className='swdc-px-[30px]'>{/* Payment */}</TabPanel>
			<TabPanel className='swdc-px-[30px]'>{/* Checkout */}</TabPanel>
		</Tabs>
	);
};

export default NavTabs;
