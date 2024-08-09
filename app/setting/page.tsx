'use client'
import { Tabs, Tab, Card, CardBody, Input, Link, Button } from '@nextui-org/react'
export default function SettingPage() {
	let tabs = [
		{
			id: 'appearance',
			label: '外观设置',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			id: 'dialogue',
			label: '对话设置',
			content:
				'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		}
	]
	return (
		<Tabs items={tabs}>
			{item => (
				<Tab data-focus-visible={false} key={item.id} title={item.label}>
					<Card>
						<CardBody>
							<form className='flex flex-col gap-4'>
								<Input isRequired label='Email' placeholder='Enter your email' type='email' />
								<Input isRequired label='Password' placeholder='Enter your password' type='password' />
								<p className='text-center text-small'>
									Need to create an account?{' '}
									<Link size='sm' onPress={() => null}>
										Sign up
									</Link>
								</p>
								<div className='flex gap-2 justify-end'>
									<Button fullWidth color='primary'>
										Login
									</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</Tab>
			)}
		</Tabs>
	)
}
