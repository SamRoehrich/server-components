export default async function handler(req, res) {
	const { slug } = req.query
	const { attributes } = await fetch(
		`http://localhost:3137/variant/${slug}`
	).then((res) => res.json())
	res.send(attributes)
}
