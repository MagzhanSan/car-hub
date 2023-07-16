'use client'

import { SearchManufacturer } from './'
import { FC, useState } from 'react'

const SearchBar: FC = () => {
	const [manufacturer, setManufacturer] = useState('')

	const handleSearch = () => {}
	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}

export default SearchBar
