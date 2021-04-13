import React from 'react'
import { children } from '../../propTypes'

const CommonLayout = ({ children }) => {
	return <main>
		{children}
	</main>
}

CommonLayout.propTypes = {
	children
}

export default CommonLayout
