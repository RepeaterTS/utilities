import main from '../src';

describe('Tests', () => {
	test('should pass', () => {
		expect(main()).toBe('kashall is bad at typescript');
	});
});