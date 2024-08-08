export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: '测试页面标题',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: '外观设置',
			href: '/setting/appearance'
		},
		{
			label: '对话设置',
			href: '/setting/dialogue'
		}
	],
	navMenuItems: [],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui.org',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev'
	}
}
