'use client'

import { CustomButtonType } from '@/types'
import { FC } from 'react'

const CustomButton: FC<CustomButtonType> = ({
	title,
	classCustom,
	handleClick,
	btnType,
}) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn, ${classCustom}`}
			onClick={handleClick}
			style={{ padding: '10px' }}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}

export default CustomButton
