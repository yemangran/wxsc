'use client'

import { getRandomAvatar } from '@/api/server'
import { User } from '@/types/index'
import {
	Avatar,
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
	SelectItem
} from '@nextui-org/react'
import { useDisclosure } from '@nextui-org/react'
import dayjs from 'dayjs'
import { useRef, useState } from 'react'

interface DialogueSettingsProps {
	phone: {
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
	setPhone: React.Dispatch<
		React.SetStateAction<{
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
		}>
	>
	userList: User[]
	setUserList: React.Dispatch<React.SetStateAction<User[]>>
}

export default function DialogueSettings({
	phone,
	setPhone,
	userList,
	setUserList
}: DialogueSettingsProps) {
	const [user, setUser] = useState<User>({
		name: '',
		avatar: undefined
	})
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const labelPlacement = 'outside'
	const networks = [{ label: 'wifi' }, { label: '3G' }, { label: '4G' }, { label: '5G' }]

	const openUserModal = async () => {
		const avatar = await getRandomAvatar()
		setUser({ avatar, name: `用户名_${Date.now()}` })
		onOpen()
	}

	const saveUser = (onClose: () => void) => {
		// 将用户信息添加到 userList
		setUserList([...userList, user])
		onClose()
	}

	return (
		<Card>
			<CardBody>
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
										<Button color='primary' onPress={() => saveUser(onClose)}>
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
			</CardBody>
		</Card>
	)
}
