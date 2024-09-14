'use server'
export const getRandomAvator = async () => {
  const options: string[] = ['男', '女', '动漫男', '动漫女'];
  const randomIndex: number = Math.floor(Math.random() * options.length);
  let res = await fetch('https://api.uomg.com/api/rand.avatar?sort=' + options[randomIndex] + '&format=images')
  const base64 = Buffer.from(await res.arrayBuffer()).toString('base64')
  return `data:image/jpeg;base64,${base64}`
}