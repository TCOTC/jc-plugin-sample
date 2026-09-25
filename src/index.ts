import {
    Plugin,
    showMessage,
} from "siyuan";
import type zhCN from "./i18n/zh-CN.json";
import "./index.scss";

const STORAGE_NAME = "config.json";

export default class JCPlugin extends Plugin {
    declare i18n: typeof zhCN;

    /**
     * 插件启用时调用
     */
    onload() {
        this.loadData(STORAGE_NAME).catch(e => {
            const errorMessage = `${this.displayName}: failed to load data [${STORAGE_NAME}]: ${e.msg}`;
            showMessage(errorMessage);
            console.error(errorMessage);
        });

        console.log(this.displayName, "plugin loaded");
    }

    /**
     * 思源界面布局就绪，始终在 onload 执行完之后调用
     */
    onLayoutReady() {
        console.log(this.displayName, "plugin layout ready");
    }

    /**
     * 插件使用 this.saveData 保存的数据发生变化时调用，包括数据同步之后、其他前端实例改变数据之后
     */
    onDataChanged() {
        this.loadData(STORAGE_NAME).catch(e => {
            const errorMessage = `${this.displayName}: failed to load data [${STORAGE_NAME}]: ${e.msg}`;
            showMessage(errorMessage);
            console.error(errorMessage);
        });
    }

    /**
     * 插件禁用时调用
     */
    onunload() {
        console.log(this.displayName, "plugin unloaded");
    }

    /**
     * 插件卸载时调用，会先调用完 onunload
     */
    uninstall() {
        this.removeData(STORAGE_NAME).catch(e => {
            const errorMessage = `${this.displayName}: failed to uninstall remove data [${STORAGE_NAME}]: ${e.msg}`;
            showMessage(errorMessage);
            console.error(errorMessage);
        });

        console.log(this.displayName, "plugin uninstalled");
    }
}
