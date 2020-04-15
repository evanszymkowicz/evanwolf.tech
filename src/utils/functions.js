const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min)

export const getCurrentYear = () => {
	const d = new Date()
	return d.getFullYear()
}

const handleApiErrors = response => {
	if (!response.ok) 
		throw Error('Fetching data error')
}

export default() => IS_PROD
	? fetch().then(handleApiErrors).then(res => res.json())
	: new Promise(resolve => resolve({
		distance: getRandomNumber(0, 50)
	}))
