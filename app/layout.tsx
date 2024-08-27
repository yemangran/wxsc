import '@/styles/globals.css'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'

import { Providers } from './providers'

import { Navbar } from '@/components/navbar'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico'
	}
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang='en'>
			<head />
			<body className={clsx('font-sans antialiased', fontSans.variable)}>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<div className='bg-background relative flex flex-col'>
						<Navbar />
						<main>{children}</main>
						<footer className='w-full flex items-center justify-center py-3'>
							<span className='text-default-600 pr-1'>Powered by</span>
							<Link className='flex items-center gap-1 text-current' href='https://nextjs.org'>
								<p className='text-primary'>Next.js</p>
							</Link>
							&
							<Link
								isExternal
								className='flex items-center gap-1 text-current'
								href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
								title='nextui.org homepage'
							>
								<p className='text-primary'>NextUI</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	)
}
