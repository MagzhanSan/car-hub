'use client'

import CustomButton from './CustomButton'
import Image from 'next/image'
import { FC } from 'react'

const Hero: FC = () => {
	const handleScroll = () => {}
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, book, or rent ad car - quickly and easily!
				</h1>
				<p className='hero__subtitle'>
					lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				</p>
				<CustomButton
					title='Explore cars'
					classCustom='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleScroll}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src={'/hero.png'} alt='hero' fill className='object-contain' />
					<div className='hero__image-overlay'></div>
				</div>
			</div>
		</div>
	)
}

export default Hero
