'use client'
import { Tabs, Tab, Card, CardBody, Input, Select, SelectItem, TimeInput } from '@nextui-org/react'
import { useState } from 'react'
import dayjs from 'dayjs'
import styles from '@/styles/app.module.scss'
import clsx from 'clsx'

export default function Home() {
	const [phone, setPhone] = useState({ dateTime: dayjs(), signal: '4', network: '5G', wifi: 3 })
	const signals = [
		{ label: '1格', value: 1 },
		{ label: '2格', value: 2 },
		{ label: '3格', value: 3 },
		{ label: '4格', value: 4 }
	]
	const networks = [{ label: 'wifi' }, { label: '3G' }, { label: '4G' }, { label: '5G' }]
	const wifis = [
		{ label: '1格', value: 1 },
		{ label: '2格', value: 2 },
		{ label: '3格', value: 3 }
	]
	const labelPlacement = 'outside'
	let tabs = [
		{
			id: 'appearance',
			label: '外观设置',
			content: (
				<form className='flex flex-wrap'>
					<Select
						items={networks}
						label='网络信号'
						labelPlacement={labelPlacement}
						placeholder='选择手机信号'
						className='md:basis-1/2 p-2'
						onChange={e => {
							setPhone({ ...phone, network: e.target.value })
						}}
					>
						{network => <SelectItem key={network.label}>{network.label}</SelectItem>}
					</Select>
					<Select
						items={signals}
						label='手机信号'
						labelPlacement={labelPlacement}
						placeholder='选择手机信号'
						className='md:basis-1/2 p-2'
						onChange={e => {
							setPhone({ ...phone, signal: e.target.value })
						}}
					>
						{signal => <SelectItem key={signal.value}>{signal.label}</SelectItem>}
					</Select>
					{phone.network == 'wifi' && (
						<Select
							items={wifis}
							label='wifi信号'
							labelPlacement={labelPlacement}
							placeholder='选择wifi信号'
							className='md:basis-1/2 p-2'
							onChange={e => {
								setPhone({ ...phone, wifi: parseInt(e.target.value) })
							}}
						>
							{wifi => <SelectItem key={wifi.value}>{wifi.label}</SelectItem>}
						</Select>
					)}
					<TimeInput
						label='手机时间'
						hourCycle={24}
						labelPlacement={labelPlacement}
						className='md:basis-1/2 p-2'
						onChange={e => {
							if (!e) return
							const { hour, minute } = e
							setPhone({
								...phone,
								dateTime: dayjs()
									.hour(hour || 0)
									.minute(minute || 0)
							})
						}}
					/>
					<Select
						label='充电状态'
						placeholder='选择充电状态'
						labelPlacement={labelPlacement}
						className='md:basis-1/2 p-2'
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Select
						label='听筒模式'
						placeholder='选择听筒模式'
						labelPlacement={labelPlacement}
						className='md:basis-1/2 p-2'
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Input
						type='number'
						label='消息数量'
						placeholder='输入消息数量'
						className='md:basis-1/2 p-2'
						labelPlacement={labelPlacement}
						min={0}
					/>
					<Input
						type='text'
						label='聊天标题'
						labelPlacement={labelPlacement}
						placeholder='输入聊天标题'
						className='md:basis-1/2 p-2'
					/>
					<Select
						label='语音模式'
						placeholder='选择语音模式'
						labelPlacement={labelPlacement}
						className='md:basis-1/2 p-2'
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Input
						type='file'
						label='聊天背景'
						labelPlacement={labelPlacement}
						placeholder='上传背景图片'
						className='md:basis-1/2 p-2'
						accept='image/*'
					/>
				</form>
			)
		},
		{
			id: 'dialogue',
			label: '对话设置',
			content: (
				<form className='flex flex-wrap'>
					<div>123</div>
				</form>
			)
		}
	]
	return (
		<div className='container mx-auto max-w-7xl pt-4 px-6 flex flex-wrap grow'>
			<div className='md:basis-2/3 p-2'>
				<Tabs items={tabs}>
					{item => (
						<Tab data-focus-visible={false} key={item.id} title={item.label}>
							<Card>
								<CardBody>{item.content}</CardBody>
							</Card>
						</Tab>
					)}
				</Tabs>
			</div>
			<div className='md:basis-1/3 p-2 flex-1'>
				<div className={styles.iphone_x}>
					<div className='w-full'>
						<div id='phone'>
							<div>
								<div className={styles.phone_bar}>
									<div className={styles.bar_time}>
										<>{phone.dateTime.format('HH:mm')}</>
									</div>
									<div className={clsx(styles.bar_signal, styles[`signal_${phone.signal}`])}></div>
									<div
										className={clsx(styles.bar_networks, styles[`${phone.network}_${phone.wifi}`])}
									>
										{phone.network}
									</div>
									<div className={styles.bar_battery}></div>
								</div>
								<div className={styles.phone_nav}></div>
							</div>
							<div className='phone-bg'></div>
							<div className='phone-water'></div>
							<div className='phone-body'></div>
							<div className='phone-bottom'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
