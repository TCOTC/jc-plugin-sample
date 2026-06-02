import {
    Plugin,
    showMessage,
} from "siyuan";
import "./index.scss";

const STORAGE_NAME = "config.json";

export default class JCPlugin extends Plugin {
    onload() {
        this.loadData(STORAGE_NAME).catch(e => {
            console.log(`[${this.name}] load data [${STORAGE_NAME}] fail: `, e);
        });
        console.log(this.displayName + ": loaded");
    }

    onLayoutReady() {
        console.log(this.displayName + ": layout ready");
    }

    onunload() {
        console.log(this.displayName + ": unloaded");
    }

    uninstall() {
        this.removeData(STORAGE_NAME).catch(e => {
            showMessage(`uninstall [${this.name}] remove data [${STORAGE_NAME}] fail: ${e.msg}`);
        });
        console.log(this.displayName + ": uninstalled");
    }
}
