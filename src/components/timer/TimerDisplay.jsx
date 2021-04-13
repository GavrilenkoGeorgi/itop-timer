import React from 'react'
import { number } from 'prop-types'
import { formatTime } from '../../utils'

import classes from './TimerDisplay.module.css'

const TimerDisplay = ({ seconds }) => {

	const time = formatTime(seconds)

	return <section className={classes.container}>
		<p>{time}</p>
	</section>
}

TimerDisplay.propTypes = {
	seconds: number.isRequired
}

const MemoTimerDisplay = React.memo(TimerDisplay)

export default MemoTimerDisplay
