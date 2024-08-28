import { SVGProps } from 'react'
import dayjs from 'dayjs'
export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export interface Phone {
	dateTime: dayjs.Dayjs
	signal: string
	network: string
	wifi: string
	charge: string
	battery: number
	messages: string,
	title: string
}
