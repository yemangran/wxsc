'use server'

const API_URL = 'https://api.uomg.com/api/rand.avatar'
const AVATAR_TYPES = ['男', '女', '动漫男', '动漫女']

export const getRandomAvatar = async (): Promise<string> => {
	try {
		const randomIndex = Math.floor(Math.random() * AVATAR_TYPES.length)
		const params = new URLSearchParams({ sort: AVATAR_TYPES[randomIndex], format: 'images' })
		const url = `${API_URL}?${params}`

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
