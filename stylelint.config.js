const tailwindAtRules = [
	'apply',
	'config',
	'custom-variant',
	'layer',
	'plugin',
	'reference',
	'screen',
	'source',
	'tailwind',
	'theme',
	'utility',
	'variant'
]

export default {
	ignoreFiles: [
		'node_modules/**/*',
		'*.log*',
		'.output/**/*',
    'build/**/*',
    'coverage/**/*',
    '.github/**/*',
		'dist/**/*',
		'deploy/**/*',
	],
	extends: [
		'stylelint-config-standard-scss',
	],
	rules: {
		'at-rule-no-unknown': null,
		'selector-class-pattern': [
			'^[a-z][a-z0-9-]*(?:(?:__|--)[a-z0-9-]+)*$',
			{
				message: 'Expected class selector to use kebab-case or BEM notation'
			}
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: tailwindAtRules
			}
		]
	}
}
