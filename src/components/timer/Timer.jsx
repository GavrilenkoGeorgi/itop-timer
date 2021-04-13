import React, { useState, useEffect } from 'react'
import { interval } from 'rxjs'
import { useObservable } from '../../hooks/useObservable'

import classes from './Timer.module.css'
import TimerDisplay from './TimerDisplay'

const interval$ = interval(1000)

const Timer = () => {

	const tick = useObservable(interval$)
	const [ elapsed, setElapsed ] = useState({ seconds: 0 })
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

	return <section className={classes.container}>
		<TimerDisplay seconds={elapsed.seconds} />
		<div className={classes.btnContainer}>
			<button onClick={toggleStartStop}>
				{running && !waiting ? 'stop' : 'start'}
			</button>
			<button onClick={toggleWait} disabled={!running} >
				{waiting ? 'resume' : 'wait'}
			</button>
			<button onClick={reset}>
				reset
			</button>
		</div>
	</section>
}

const MemoTimer = React.memo(Timer)

export default MemoTimer
