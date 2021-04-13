import { arrayOf, node, oneOfType } from 'prop-types'

export const children = oneOfType([
	arrayOf(node),
	node
])
