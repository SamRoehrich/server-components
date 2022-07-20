export default async function fetchData(type, delay = 0) {
	const [res] = await Promise.all([
		fetch(`http://localhost:3137/variant/${type}`),
		new Promise((res) => setTimeout(res, Math.random() * delay)),
	])
	if (res.status !== 200) {
		throw new Error(`Status ${res.status}`)
	}
	return res.json()
}
