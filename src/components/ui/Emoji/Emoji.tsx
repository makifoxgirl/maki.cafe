import { createSignal, onMount } from "solid-js";
import fs from "node:fs/promises";
import styles from "./Emoji.module.scss";

// https://twemoji.maxcdn.com/v/latest/twemoji.js
function toCodePoint(unicodeSurrogates: string, sep: string = "-") {
	let r = [],
		c = 0,
		p = 0,
		i = 0;
	while (i < unicodeSurrogates.length) {
		c = unicodeSurrogates.charCodeAt(i++);
		if (p) {
			r.push(
				(0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16),
			);
			p = 0;
		} else if (0xd800 <= c && c <= 0xdbff) {
			p = c;
		} else {
			r.push(c.toString(16));
		}
	}
	return r.join(sep);
}

const customEmojis: { [name: string]: string } = {};
for (const filename of ["lesbian-flag", "t4t-flag", "t4t-flag-better"]) {
	customEmojis[filename] = await fs.readFile(
		new URL(`./custom-emojis/${filename}.svg`, import.meta.url),
		"utf8",
	);
}

export default function Emoji(props: { emoji: string }) {
	const imageSrc = customEmojis[props.emoji]
		? "data:image/svg+xml;base64," + btoa(customEmojis[props.emoji])
		: "https://twemoji.maxcdn.com/v/latest/svg/" +
		  toCodePoint(props.emoji, "-") +
		  ".svg";

	return (
		<img
			classList={{ [styles.emoji]: true }}
			src={imageSrc}
			alt={props.emoji}
		/>
	);
}
