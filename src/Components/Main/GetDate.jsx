export const getDate = (date) => {
	const PerDate = date.split('-')
	return new Date(PerDate.map(elem => {return Number(elem)})) < new Date() - 86400000
}