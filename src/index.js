const API_URL = 'https://api.sefinek.net/api/v2/moecounter';
const VERSION = '1.0.13';
const USERAGENT = `moecounter.js/${VERSION} (+https://github.com/sefinek/moecounter.js)`;

const constructUrl = (baseUrl, params) => {
	const queryString = Object.entries(params)
		.filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value))
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');
	return `${baseUrl}?${queryString}`;
};

const httpsGet = async url => {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: { 'User-Agent': USERAGENT },
		});

		if (!res.ok) {
			throw new Error(`Request failed. Status code: ${res.status} (${res.statusText})`);
		}

		return res.text();
	} catch (err) {
		console.error(err);
	}
};

const fetchSvgData = async (baseUrl, queryParams) => {
	const fullUrl = constructUrl(baseUrl, queryParams);
	if (!queryParams.svg) return { url: fullUrl };

	const svg = await httpsGet(fullUrl);
	return { url: fullUrl, svg };
};

const local = async options => fetchSvgData(API_URL, { number: 0, ...options });
const remote = async ({ name: counterName, ...restOptions }) => fetchSvgData(`${API_URL}/@${counterName}`, restOptions);

module.exports = { local, remote, version: VERSION };