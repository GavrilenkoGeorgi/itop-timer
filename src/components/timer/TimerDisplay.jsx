import React from 'react'
import { number } from 'prop-types'

import { formatTime } from '../../utils'

const TimerDisplay = ({ seconds }) => {

	const time = formatTime(seconds)

	return <>{time}</>
}

TimerDisplay.propTypes = {
	seconds: number.isRequired
}

const MemoTimerDisplay = React.memo(TimerDisplay)

export default MemoTimerDisplay
