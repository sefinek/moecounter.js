const moecounter = require('../src/index.js');

const API_URL = 'https://api.sefinek.net/api/v2/moecounter';
const MOCK_SVG = '<svg xmlns="http://www.w3.org/2000/svg"><text>mock</text></svg>';

const mockFetch = (status = 200, body = MOCK_SVG) => {
	global.fetch = jest.fn().mockResolvedValue({
		ok: status >= 200 && status < 300,
		status,
		statusText: status === 200 ? 'OK' : 'Error',
		text: jest.fn().mockResolvedValue(body),
	});
};

afterEach(() => jest.restoreAllMocks());


describe('version', () => {
	it('matches package.json', () => {
		const { version } = require('../package.json');
		expect(moecounter.version).toBe(version);
	});
});


describe('local()', () => {
	it('returns url without fetch when svg is false', async () => {
		global.fetch = jest.fn();

		const result = await moecounter.local({ number: 42, svg: false });

		expect(global.fetch).not.toHaveBeenCalled();
		expect(result.url).toContain(API_URL);
		expect(result.svg).toBeUndefined();
	});

	it('builds correct url with all params', async () => {
		const result = await moecounter.local({ number: 1234, length: 8, theme: 'default', pixelated: true, svg: false });
		const url = new URL(result.url);

		expect(url.searchParams.get('number')).toBe('1234');
		expect(url.searchParams.get('length')).toBe('8');
		expect(url.searchParams.get('theme')).toBe('default');
		expect(url.searchParams.get('pixelated')).toBe('true');
	});

	it('returns svg when svg is true', async () => {
		mockFetch();

		const result = await moecounter.local({ number: 99, svg: true });

		expect(result.url).toContain(API_URL);
		expect(result.svg).toBe(MOCK_SVG);
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});

	it('throws on non-ok response', async () => {
		mockFetch(500);

		await expect(moecounter.local({ number: 1, svg: true }))
			.rejects.toThrow('Request failed. Status code: 500');
	});

	it('filters out null and undefined params', async () => {
		const result = await moecounter.local({ number: 5, theme: undefined, length: null, svg: false });
		const url = new URL(result.url);

		expect(url.searchParams.has('theme')).toBe(false);
		expect(url.searchParams.has('length')).toBe(false);
		expect(url.searchParams.get('number')).toBe('5');
	});
});


describe('remote()', () => {
	it('includes @name in the url path', async () => {
		const result = await moecounter.remote({ name: 'my-counter', svg: false });

		expect(result.url).toContain('/@my-counter');
	});

	it('does not include name as a query param', async () => {
		const result = await moecounter.remote({ name: 'test-123', svg: false });
		const url = new URL(result.url);

		expect(url.searchParams.has('name')).toBe(false);
	});

	it('builds correct url with all params', async () => {
		const result = await moecounter.remote({ name: 'abc', length: 10, theme: 'miku', pixelated: false, svg: false });
		const url = new URL(result.url);

		expect(result.url).toContain('/@abc');
		expect(url.searchParams.get('length')).toBe('10');
		expect(url.searchParams.get('theme')).toBe('miku');
		expect(url.searchParams.get('pixelated')).toBe('false');
	});

	it('returns svg when svg is true', async () => {
		mockFetch();

		const result = await moecounter.remote({ name: 'test', svg: true });

		expect(result.url).toContain('/@test');
		expect(result.svg).toBe(MOCK_SVG);
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});

	it('throws on non-ok response', async () => {
		mockFetch(404);

		await expect(moecounter.remote({ name: 'missing', svg: true }))
			.rejects.toThrow('Request failed. Status code: 404');
	});
});
