'use client'

import { getRandomAvator } from '@/api/server'
import Phone from '@/components/phone'
import { User } from '@/types/index'
import { Time } from '@internationalized/date'
import {
	Avatar,
	Badge,
	Button,
	Card,
	CardBody,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Select,
	SelectItem,
	Slider,
	Tab,
	Tabs,
	TimeInput,
	useDisclosure
} from '@nextui-org/react'
import dayjs from 'dayjs'
import { useRef, useState } from 'react'

export default function Home() {
	const [phone, setPhone] = useState({
		dateTime: dayjs(),
		signal: '4',
		network: '5G',
		wifi: '3',
		charge: '0',
		battery: 80,
		messages: '1',
		title: '聊天标题',
		earphone: '0',
		voice: '0',
		bgImage: undefined as string | undefined
	})
	const [user, setUser] = useState<User>({
		name: '',
		avatar: undefined
	})
	const image = useRef(null)
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
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const openUserModal = async () => {
		const avatar = await getRandomAvator()
		setUser({ avatar, name: `用户名_${Date.now()}` })
		onOpen()
	}
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
						className='p-2 md:basis-1/2'
						onChange={e => {
							setPhone({ ...phone, network: e.target.value })
						}}
						defaultSelectedKeys={[phone.network]}
					>
						{network => <SelectItem key={network.label}>{network.label.toUpperCase()}</SelectItem>}
					</Select>
					<Select
						items={signals}
						label='手机信号'
						labelPlacement={labelPlacement}
						placeholder='选择手机信号'
						className='p-2 md:basis-1/2'
						onChange={e => {
							setPhone({ ...phone, signal: e.target.value })
						}}
						defaultSelectedKeys={phone.signal}
					>
						{signal => <SelectItem key={signal.value}>{signal.label}</SelectItem>}
					</Select>
					{phone.network == 'wifi' && (
						<Select
							items={wifis}
							label='WIFI信号'
							labelPlacement={labelPlacement}
							placeholder='选择WIFI信号'
							className='p-2 md:basis-1/2'
							onChange={e => {
								setPhone({ ...phone, wifi: e.target.value })
							}}
							defaultSelectedKeys={phone.wifi}
						>
							{wifi => <SelectItem key={wifi.value}>{wifi.label}</SelectItem>}
						</Select>
					)}
					<TimeInput
						label='手机时间'
						hourCycle={24}
						labelPlacement={labelPlacement}
						className='p-2 md:basis-1/2'
						defaultValue={new Time(phone.dateTime.hour(), phone.dateTime.minute())}
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
						className='p-2 md:basis-1/2'
						defaultSelectedKeys={[phone.charge]}
						onChange={e => {
							setPhone({ ...phone, charge: e.target.value })
						}}
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Slider
						label='手机电量'
						step={1}
						maxValue={100}
						minValue={0}
						size='lg'
						defaultValue={phone.battery}
						className='p-2 md:basis-1/2'
						onChangeEnd={e => {
							setPhone({ ...phone, battery: e as number })
						}}
					/>
					<Select
						label='听筒模式'
						placeholder='选择听筒模式'
						labelPlacement={labelPlacement}
						className='p-2 md:basis-1/2'
						defaultSelectedKeys={[phone.earphone]}
						onChange={e => {
							setPhone({ ...phone, earphone: e.target.value })
						}}
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Input
						type='number'
						label='消息数量'
						placeholder='请输入消息数量'
						className='p-2 md:basis-1/2'
						labelPlacement={labelPlacement}
						min={0}
						defaultValue={phone.messages}
						onChange={e => {
							setPhone({ ...phone, messages: e.target.value })
						}}
					/>
					<Input
						type='text'
						label='聊天标题'
						labelPlacement={labelPlacement}
						placeholder='请输入聊天标题'
						className='p-2 md:basis-1/2'
						defaultValue={phone.title}
						onChange={e => {
							setPhone({ ...phone, title: e.target.value })
						}}
					/>
					<Select
						label='语音模式'
						placeholder='选择语音模式'
						labelPlacement={labelPlacement}
						className='p-2 md:basis-1/2'
						defaultSelectedKeys={[phone.voice]}
						onChange={e => {
							setPhone({ ...phone, voice: e.target.value })
						}}
					>
						<SelectItem key='0'>否</SelectItem>
						<SelectItem key='1'>是</SelectItem>
					</Select>
					<Input
						type='file'
						label='聊天背景'
						labelPlacement={labelPlacement}
						placeholder='上传背景图片'
						className='p-2 md:basis-1/2'
						accept='image/*'
						onChange={e => {
							const file = e.target.files?.[0]
							if (file) {
								const reader = new FileReader()
								reader.readAsDataURL(file)
								reader.onload = () => {
									setPhone({ ...phone, bgImage: reader.result as string | undefined })
								}
							}
						}}
					/>
				</form>
			)
		},
		{
			id: 'dialogue',
			label: '对话设置',
			content: (
				<>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} size='xs'>
						<ModalContent>
							{onClose => (
								<>
									<ModalHeader className='flex flex-col gap-1'>添加用户</ModalHeader>
									<ModalBody>
										<div>
											{/* todo)):头像外面包一层，然后添加遮罩实现编辑头像功能 */}
										<Avatar src={user.avatar} className='mx-auto block h-1/2 w-1/2' />
										</div>
										<Input
											type='text'
											label='用户名'
											placeholder='请输入用户名'
											className='p-2'
											defaultValue={user.name}
											onChange={e => {
												setUser({ ...user, name: e.target.value })
											}}
										/>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											取消
										</Button>
										<Button color='primary' onPress={onClose}>
											确定
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
					<form className='flex flex-wrap'>
						<div className='flex items-end gap-2 p-2 md:basis-1/2'>
							<Select
								items={networks}
								label='聊天用户'
								labelPlacement={labelPlacement}
								placeholder='选择聊天用户'
								onChange={e => {
									setPhone({ ...phone, network: e.target.value })
								}}
								defaultSelectedKeys={[phone.network]}
							>
								{network => (
									<SelectItem
										key={network.label}
										startContent={
											<Avatar
												alt='Argentina'
												className='h-6 w-6'
												src='https://flagcdn.com/cn.svg'
											/>
										}
									>
										{network.label.toUpperCase()}
									</SelectItem>
								)}
							</Select>
							<Button startContent={'todo)):添加svg图标'} onPress={openUserModal}>
								添加
							</Button>
						</div>
					</form>
				</>
			)
		}
	]
	return (
		<div className='container mx-auto flex max-w-7xl grow flex-wrap px-6 pt-4'>
			<div className='p-2 md:basis-2/3'>
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
			<div className='flex-1 p-2 md:basis-1/3'>
				<Phone image={image} phone={phone} />
				<button
					onClick={async () => {
						//todo)):这里拿到了dom，尽量实现dom转图片
						//目前html2canvas会报错
						console.log(image.current, image)
					}}
				>
					下载
				</button>
			</div>
		</div>
	)
}
