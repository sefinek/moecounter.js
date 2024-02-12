document.addEventListener('DOMContentLoaded', () => {
	const updateButton = document.getElementById('updateCounter');
	updateButton.addEventListener('click', localDb);

	localDb();
	remoteDb();
});

const localDbErrors = document.getElementById('localDb-errors');
const remoteDbErrors = document.getElementById('remoteDb-errors');

async function localDb() {
	const updateButton = document.getElementById('updateCounter');
	updateButton.disabled = true;

	try {
		const counterValue = document.getElementById('counterValue').value || 1234567890;
		const lengthValue = document.getElementById('lengthValue').value || 10;
		const theme = document.getElementById('theme').value;
		const pixelated = document.getElementById('pixelated').value === 'true';

		const moe = await moecounter.localDb.fetch({
			number: parseInt(counterValue, 10),
			length: parseInt(lengthValue, 10),
			theme: theme,
			pixelated: pixelated,
		});

		document.getElementById('localDb').src = moe.url;
		localDbErrors.textContent = 'N/A';
	} catch (err) {
		console.error(err);
		localDbErrors.innerHTML = `<b>${new Date().toLocaleTimeString()}:</b> ${err.message}`;
	} finally {
		updateButton.disabled = false;
	}
}

async function remoteDb() {
	try {
		const moe = await moecounter.remoteDb.fetch({
			name: 'npm-test-counter',
			length: 10,
			theme: 'rule34',
			pixelated: true,
		});
		document.getElementById('remoteDb').src = moe.url;
		remoteDbErrors.textContent = 'N/A';
	} catch (err) {
		console.error(err);
		remoteDbErrors.innerHTML = `<b>${new Date().toLocaleTimeString()}:</b> ${err.message}`;
	}
}