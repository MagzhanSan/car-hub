import { MouseEventHandler } from 'react'

export interface CustomButtonType {
	title: string
	classCustom?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	btnType?: 'button' | 'submit'
}

export interface SearchManufacturerProps {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
}
