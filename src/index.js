import front from './front-page.js';
import './style.css';

const loaded = front.load();
for (let item of loaded.tabList) {
    console.log(item.tabStatus);
}