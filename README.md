<div align="center">
    <h1>🔢 MoeCounter.js - The best counters for your projects</h1>
    <a href="https://www.npmjs.com/package/moecounter.js" target="_blank" title="moecounter.js - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/moecounter.js.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek/moecounter.js" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek/moecounter.js" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek/moecounter.js" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek/moecounter.js" alt="Code size">
    </a>
</div>

MoeCounter.js is a JavaScript library that allows for easy integration of attractive visual counters into your web projects or profiles, such as GitHub.
With a variety of appearances and customization options, you can add a unique style to your website or application.
MoeCounter is perfectly suited for use as a view counter, visit counter, online user counter, subscriber counter, follower counter, etc.
It can be seamlessly used on any website or in applications that utilize WebView2.


## 📦 Installation
### NPM (Node.js)
```bash
npm install moecounter.js
```

### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/moecounter.js@1/dist/browser/moecounter.min.js"></script>
```

## 🌍 Demo
https://sefinek.net/npm/moecounter.js/demo


## 😸 Counters
### Default (gif)
![](https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=default&pixelated=true)  \
`https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=default&pixelated=true`

### Asoul
![](https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=asoul&pixelated=true)  \
`https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=asoul&pixelated=true`

### Moebooru
![](https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=moebooru&pixelated=true)  \
`https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=moebooru&pixelated=true`

### Gelbooru
![](https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=gelbooru&pixelated=true)  \
`https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=gelbooru&pixelated=true`


## 📃 Documentation
### `moecounter.local(options)`
Generates a visual counter based on the provided options.
Using the local function, developers have the ability to specify the exact value they want to display on the counter.
In such cases, using your own database is recommended.
It's important to note that this function has more lenient query limit restrictions (rate limits).
For the purposes of displaying any kind of statistics, the BELOW method is preferred.

#### options
* `number` - `(default 0)`: The value you want to display on the counter.
* `length` - `(default 10)`: The length of the counter.
* `theme` - `(default default)`: The appearance of the counter.
* `pixelated` - `(default true; recommended true)`: Should the counter be pixelated?
* `svg` - `(default false; recommended false)`: Should the module provide SVG data?

### `moecounter.remote(options)`
In this setup, the API server manages the counter.
Developers do not have the capability to modify the counter value.
When a user visits a webpage containing the counter (with a link to api.sefinek.net), the counter value will be incremented by 1.
An increment is allowed once every 20 minutes from the same IP address.
If this limit is exceeded, the server will NOT return any HTTP error, but simply will not increase the counter value.

#### options
* `name` - `(required)`: A unique counter name. It is best to choose a unique name that reflects the purpose of the counter. It's also a good idea to add random characters at the end, e.g., `mywebsiteviews-sM7JJb2trEr9`.
* `length` - `(default 10)`: The length of the counter.
* `theme` - `(default default)`: The appearance of the counter.
* `pixelated` - `(default true; recommended true)`: Should the counter be pixelated?
* `svg` - `(default false; recommended false)`: Should the module provide SVG data?

> [!IMPORTANT]  
Remember to inform users that their IP addresses are collected on an external server (api.sefinek.net)! If you use the counter exclusively on GitHub (in repositories, etc.), you do not need to do this.


## 🤔 Example
```js
const moecounter = require('moecounter.js');

const showMoeCounter = async () => {
	const data = await moecounter.local({
		number: 1234567890,
		length: 10,
		theme: 'default',
		pixelated: true,
		svg: false
	});

	console.log(data);
	// Output:
	// {
	// 	url: 'https://api.sefinek.net/api/v2/moecounter?number=1234567890&length=10&theme=default&pixelated=true&svg=false'
	// }
}

showMoeCounter();
```

> [!NOTE]  
> If you want to see a sample counter in action, please visit [this](https://sefinek.net/genshin-stella-mod) page.


## 🍴 Fork
This project is an enhanced fork of [journey-ad/Moe-Counter](https://github.com/journey-ad/Moe-Counter).
It features improved rate limit handling and enhanced server-side code quality.


## 💙 Thank you
If you like this module, please **star** ⭐ the [repository](https://github.com/sefinek/moecounter.js).
If you have any questions or need help, feel free to reach out to me via [email](https://sefinek.net) or open a new [Issue](https://github.com/sefinek/moecounter.js/issues).


## 🔑 License
This module is provided under the `MIT License`. See the [LICENSE](LICENSE) file for more details.

Copyright 2024 © by [Sefinek](https://sefinek.net). All Rights Reserved.