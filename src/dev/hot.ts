import { App } from "nw.gui";
const manifest = App.manifest;

import * as path from "path";

const headers = new Headers();
headers.append("pragma", "no-cache");
headers.append("cache-control", "no-cache");

async function state(): Promise<any | false> {
	const response = await fetch(manifest.manfiestUrl, { headers });
	try {
		const json = await response.json();
		return json;
	}
	catch (err) {
		return false;
	}
}

export async function reload() {
	const update = await state();
	if (!update || update.version === manifest.version) {
		return false;
	}
	window.location.reload(true);
	return true;
}
