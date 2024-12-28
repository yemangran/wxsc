'use server'

export const getRandomAvatar = async (): Promise<string> => {
	try {
		const url = 'https://avatar.iran.liara.run/public'

		const res = await fetch(url)

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`)
		}

		const base64 = Buffer.from(await res.arrayBuffer()).toString('base64')
		return `data:image/jpeg;base64,${base64}`
	} catch (error) {
		console.error('Error fetching avatar:', error)
		throw error
	}
}
