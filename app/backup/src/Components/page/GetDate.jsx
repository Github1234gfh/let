export const getDate = (date) => {
	const PerDate = date.split('.')
	PerDate.push(PerDate[0])
	PerDate[0] = PerDate[2]
	delete PerDate[2]
	return new Date(PerDate.map(elem => {return Number(elem)})) < new Date() - 86400000
}