import front from './front-page.js';
import onlExcl from './online-exclusive.js';
import lunchSpech from './lunch-specials.js';
import offCater from './office-catering.js';
import beerDT from './beer-dinner-tickets.js';
import './style.css';

const loaded = front.load();
for (let item of loaded.tabList) {
    console.log(item.tabStatus);
}

const tabSection = {
    state : "online-exclusive"
}

function tabLoad () {
    if (tabSection.state == "online-exclusive") {
        onlExcl.load();
    }
    if (tabSection.state == "lunch-specials") {
        lunchSpech.load();
    }
    if (tabSection.state == "office-catering") {
        offCater.load();
    }
    if (tabSection.state == "beer-dinner-tickets") {
        beerDT.load();
    }
}

function setState (e) {
    if (e.classList.contains("online-exclusive")) {
        tabSection.state = "online-exclusive";
    }
    if (e.classList.contains("lunch-specials")) {
        tabSection.state = "lunch-specials";
    }
    if (e.classList.contains("office-catering")) {
        tabSection.state = "office-catering";
    }
    if (e.classList.contains("beer-dinner-tickets")) {
        tabSection.state = "beer-dinner-tickets";
    }
    tabLoad();
}

tabLoad();

for (let e of loaded.tabList) {
    e.classList.add("tab");
    e.addEventListener('mouseenter',()=>{
        if (e.tabStatus != true) {
            e.classList.toggle("selected");
        }
    });
    e.addEventListener('mouseleave',()=>{
        if (e.tabStatus != true) {
            e.classList.toggle("selected");
        }
    });
    e.addEventListener('click',() => {
        if (e.tabStatus != true) {
            for (let item of loaded.tabList) {
                if (item.tabStatus == true) {
                    item.classList.toggle("selected");
                    item.tabStatus = false;
                }
            }
            e.tabStatus = true;
            setState(e);
        }
    });
}