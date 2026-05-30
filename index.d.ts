export type Theme =
	| '3d-num'
	| 'ai-1'
	| 'booru-helltaker'
	| 'booru-huggboo'
	| 'booru-jaypee'
	| 'booru-koe'
	| 'booru-lisu'
	| 'booru-mof'
	| 'booru-nandroid'
	| 'booru-r6gdrawfriends'
	| 'booru-smtg'
	| 'booru-snyde'
	| 'booru-the-collection'
	| 'booru-touhoulat'
	| 'booru-townofgravityfalls'
	| 'booru-twifanartsfw'
	| 'booru-ve'
	| 'booru-vivi'
	| 'booru-vp'
	| 'booru-yuyuyui'
	| 'capoo-1'
	| 'capoo-2'
	| 'default'
	| 'default-big'
	| 'default2'
	| 'default3'
	| 'default3-big'
	| 'default4'
	| 'default5-green'
	| 'e621'
	| 'food'
	| 'kasuterura-1'
	| 'kasuterura-2'
	| 'kasuterura-3'
	| 'kasuterura-4'
	| 'love-and-deepspace'
	| 'miku'
	| 'minecraft'
	| 'morden-num'
	| 'nixietube-1'
	| 'nixietube-2'
	| 'normal-1'
	| 'normal-2'
	| 'shimmie2'
	| 'sketch-1'
	| 'sketch-2'
	| 'yousa-ling';


export interface SvgResult {
	/** The URL to the generated counter image. */
	url: string;

	/** The SVG code of the generated counter. */
	svg?: string;
}


export interface LocalDbOptions {
	/** The number to display on the counter. */
	number: number;

	/** Number of moe characters on the counter. @default 10 */
	length?: number;

	/** Graphic theme of the counter. @default 'default' */
	theme?: Theme | (string & {});

	/** Whether the graphic should be pixelated. @default true */
	pixelated?: boolean;

	/** Fetch the counter as SVG. Impacts performance due to an extra server request. @default false */
	svg?: boolean;
}

/**
 * Generates a Moe counter using a locally managed number.
 * @example
 * const result = await moecounter.local({
 *     number: 1234567890,
 *     length: 10,
 *     theme: 'default',
 *     pixelated: true,
 *     svg: false,
 * });
 */
export function local(options: LocalDbOptions): Promise<SvgResult>;


export interface RemoteDbOptions {
	/** The unique name of the counter. */
	name: string;

	/** Number of moe characters on the counter. @default 10 */
	length?: number;

	/** Graphic theme of the counter. @default 'default' */
	theme?: Theme | (string & {});

	/** Whether the graphic should be pixelated. @default true */
	pixelated?: boolean;

	/** Fetch the counter as SVG. Impacts performance due to an extra server request. @default false */
	svg?: boolean;
}

/**
 * Generates a Moe counter using a remote database. The counter increments when the URL is visited.
 * @example
 * const result = await moecounter.remote({
 *     name: 'my-counter',
 *     length: 10,
 *     theme: 'default',
 *     pixelated: true,
 *     svg: false,
 * });
 */
export function remote(options: RemoteDbOptions): Promise<SvgResult>;


/** The version of the moecounter.js module. */
export const version: string;
