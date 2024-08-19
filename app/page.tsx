'use client'
import {
	Tabs,
	Tab,
	Card,
	CardBody,
	Input,
	Link,
	Button,
	Select,
	SelectItem,
	TimeInput
} from '@nextui-org/react'
export default function Home() {
	const signals = [
		{ label: '1格', value: 1 },
		{ label: '2格', value: 2 },
		{ label: '3格', value: 3 },
		{ label: '4格', value: 4 }
	]
	const networks = [
		{ label: 'wifi', value: 1 },
		{ label: '3G', value: 2 },
		{ label: '4G', value: 3 },
		{ label: '5G', value: 4 }
	]
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
						items={signals}
						label='手机信号'
						labelPlacement={labelPlacement}
						placeholder='选择手机信号'
						className='md:basis-1/2 p-2'
					>
						{signal => <SelectItem key={signal.value}>{signal.label}</SelectItem>}
					</Select>
					<Select
						items={networks}
						label='网络信号'
						labelPlacement={labelPlacement}
						placeholder='选择手机信号'
						className='md:basis-1/2 p-2'
					>
						{signal => <SelectItem key={signal.value}>{signal.label}</SelectItem>}
					</Select>
					<Select
						items={wifis}
						label='wifi信号'
						labelPlacement={labelPlacement}
						placeholder='选择wifi信号'
						className='md:basis-1/2 p-2'
					>
						{wifi => <SelectItem key={wifi.value}>{wifi.label}</SelectItem>}
					</Select>
					<TimeInput
						label='手机时间'
						hourCycle={24}
						labelPlacement={labelPlacement}
						className='md:basis-1/2 p-2'
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
			label: '对话设置'
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
		</div>
	)
}
