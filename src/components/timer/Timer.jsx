import React, { useState, useEffect } from 'react'
import { interval } from 'rxjs'
import { useObservable } from '../../hooks/useObservable'

import TimerDisplay from './TimerDisplay'

const interval$ = interval(1000)

const Timer = () => {

	const tick = useObservable(interval$)
	const [ elapsed, setElapsed ] = useState({ seconds: 0 }) // seconds
	const [ running, setRunning ] = useState(false)
	const [ waiting, setWaiting ] = useState(false)

	useEffect(() => {
		if (running && waiting) return
		if (running) {
			setElapsed(curr => ({ ...curr, seconds: curr.seconds++ }))
		} else if (!running && !waiting) {
			setElapsed(curr => ({ ...curr, seconds: 0 }))
		}
	}, [ tick, running, waiting ])

	const toggleWait = () => {
		setWaiting(!waiting)
	}

	const toggleStartStop = () => {
		if (running && waiting) {
			setWaiting(false)
			setRunning(true)
		} else setRunning(!running)

	}

	const reset = () => {
		setElapsed(curr => ({ ...curr, seconds: 0 }))
	}

	return <>
		<TimerDisplay seconds={elapsed.seconds} />
		<br />
		<button onClick={toggleStartStop}>{running && !waiting ? 'stop' : 'start'}</button>
		<button disabled={!running} onClick={toggleWait}>{waiting ? 'resume' : 'wait'}</button>
		<button onClick={reset}>reset</button>
	</>
}

export default Timer
