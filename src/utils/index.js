const formatTime = seconds => {
	const hrs = ~~(seconds / 3600)
	const mins = ~~((seconds % 3600) / 60)
	const secs = ~~seconds % 60

	const checkIfLeadingZero = number => number < 10 ? `0${number}` : number

	return `${checkIfLeadingZero(hrs)}:${checkIfLeadingZero(mins)}:${checkIfLeadingZero(secs)}`
}

export { formatTime }
