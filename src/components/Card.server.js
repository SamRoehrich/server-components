import fetchData from '../../lib/fetch-data'
import useData from '../../lib/use-data'

const getVariant = async (type) => {
	const { container } = await fetchData(type)
	return container
}

export default function Card() {
	// let res = useData('Button', () => getVariant('62cf4387c922c429bfc179af'))
	return (
		<div>
			<p>Card Title</p>
		</div>
	)
}
