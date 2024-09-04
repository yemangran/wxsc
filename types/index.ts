import dayjs from 'dayjs'
import { SVGProps } from 'react'

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
	messages: string
	title: string
	earphone: string
	voice: string
	bgImage: string | undefined
}
