import React from 'react';
import CityItem from './CityItem';

const CityList = ({ cityList, setShowModal, setCityList }) => {
	return (
		<ul
			style={{
				marginTop: '1.5rem',
				paddingRight: '1rem',
				overflowY: 'scroll',
				maxHeight: '23rem',
			}}>
			{cityList.map((cityItem) => (
				<CityItem
					{...cityItem}
					key={cityItem.id}
					setShowModal={setShowModal}
					setCityList={setCityList}
				/>
			))}
		</ul>
	);
};

export default CityList;
