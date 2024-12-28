'use client'

import Phone from '@/components/phone'
import AppearanceSettings from '@/components/tabs/AppearanceSettings'
import DialogueSettings from '@/components/tabs/DialogueSettings'
import { User } from '@/types/index'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
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
	const [userList, setUserList] = useState<User[]>([])
	const image = useRef(null)
	let tabs = [
		{
			id: 'appearance',
			label: '外观设置',
			content: <AppearanceSettings phone={phone} setPhone={setPhone} />
		},
		{
			id: 'dialogue',
			label: '对话设置',
			content: (
				<DialogueSettings
					phone={phone}
					setPhone={setPhone}
					userList={userList}
					setUserList={setUserList}
				/>
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
