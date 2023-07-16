'use client'

import { CustomButtonType } from '@/types/CustomButtonType'
import { FC } from 'react'

const CustomButton: FC<CustomButtonType> = ({
	title,
	classCustom,
	handleClick,
}) => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`custom-btn, ${classCustom}`}
			onClick={handleClick}
			style={{ padding: '10px' }}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}

export default CustomButton
