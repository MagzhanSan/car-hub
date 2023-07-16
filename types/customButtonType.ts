import { MouseEventHandler } from 'react'

export interface CustomButtonType {
	title: string
	classCustom?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
}
