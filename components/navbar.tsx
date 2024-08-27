import { Link } from '@nextui-org/link'
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle,
	Navbar as NextUINavbar
} from '@nextui-org/navbar'
import NextLink from 'next/link'

import { GithubIcon, Logo } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import { siteConfig } from '@/config/site'

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth='xl' position='sticky'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand as='li' className='gap-3 max-w-fit'>
					<NextLink className='flex justify-start items-center gap-1' href='/'>
						<Logo />
						<p className='font-bold text-inherit'>WXSC</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
				<NavbarItem className='hidden sm:flex gap-2'>
					<Link isExternal aria-label='Github' href={siteConfig.links.github}>
						<GithubIcon className='text-default-500' />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
				<Link isExternal aria-label='Github' href={siteConfig.links.github}>
					<GithubIcon className='text-default-500' />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				test
				{/* todo)):这里需要做小屏幕适配 */}
			</NavbarMenu>
		</NextUINavbar>
	)
}
