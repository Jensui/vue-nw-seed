import { App } from 'nw.gui';
let manifest = App.manifest;

import * as path from 'path';

let headers = new Headers();
headers.append('pragma', 'no-cache');
headers.append('cache-control', 'no-cache');

async function state(): Promise<any | false> {
    let response = await fetch(manifest.manfiestUrl, { headers });
    try {
        let json = await response.json();
        return json;
    }
    catch (err) {
        return false;
    }
}

export async function reload() {
    let update = await state();
    if (!update || update.version === manifest.version)
        return false;
    window.location.reload(true);
    return true;
}
