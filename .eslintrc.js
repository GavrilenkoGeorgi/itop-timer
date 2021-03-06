/* eslint-disable */
module.exports = {
	"env": {
			"browser": true,
			"es6": true
	},
	"globals": {
			"process": true,
			"jest": true,
			"JSX": true
	},
	"extends": [ 
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:testing-library/react",
			"plugin:jest/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
			"ecmaFeatures": {
					"jsx": true
			},
			"ecmaVersion": 2018,
			"sourceType": "module"
	},
	"plugins": [
			"react",
			"react-hooks",
			"testing-library",
			"jest"
	],
	"settings": {
		"react": {
			"createClass": "createReactClass", // Regex for Component Factory to use,
																				 // default to "createReactClass"
			"pragma": "React",  // Pragma to use, default to "React"
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
													 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
													 // default to latest and warns if missing
													 // It will default to "detect" in the future
			"flowVersion": "0.53" // Flow version
		},
		"propWrapperFunctions": [
				// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
				"forbidExtraProps",
				{"property": "freeze", "object": "Object"},
				{"property": "myFavoriteWrapper"}
		],
		"linkComponents": [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			"Hyperlink",
			{"name": "Link", "linkAttribute": "to"}
		]
	},
	"rules": {
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"max-len": ["error", { "code": 120 }],
		"indent": [
				"error",
				"tab"
		],
		"linebreak-style": [
				"error",
				"unix"
		],
		"quotes": [
				"error",
				"single"
		],
		"semi": [
				"error",
				"never"
		],
		"eqeqeq": "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": [
				"error", "always"
		],
		"array-bracket-spacing": [
			"error", "always"
		],
		"arrow-spacing": [
				"error", { "before": true, "after": true }
		],
		// "no-console": ["error", { allow: ["warn", "error"] }]
		"no-console": 0
	}
}
