'use client'

import { Hero, SearchBar } from '@/components'
import { allCarsService } from '@/utils'
import { useEffect, useState } from 'react'

export default function Home() {
	const [allCars, setAllCars] = useState<any>([])

	useEffect(() => {
		const fetchAllCars = async () => {
			const response = await allCarsService.getAllCars()
			setAllCars(response)
		}
		fetchAllCars()
	}, [])

	const isDataEmpty = allCars.length < 1 && !Array.isArray(allCars) && !allCars

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='home__filters'>
				<SearchBar />

				{/* <div className='home__filter-container'>
					<CustomFilter title='fuel' />
					<CustomFilter title='year' />
				</div> */}

				{!isDataEmpty ? (
					<section>We have cars</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>oops, no cars</h2>
						<p>{allCars.message}</p>
					</div>
				)}
			</div>
		</main>
	)
}
