const load = function () {
    const content = document.getElementById('content');


    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header);

    const userBar = document.createElement('div');
    userBar.classList.add("user-bar");
    header.appendChild(userBar);

    const navBar = document.createElement('div');
    navBar.classList.add("nav-bar");
    header.appendChild(navBar);


    const tabContent = document.createElement('div');
    tabContent.classList.add("tab-content");
    content.appendChild(tabContent);


    const tabs = document.createElement('div');
    tabs.classList.add("tabs");
    content.appendChild(tabs);

    const onlExcl = document.createElement('div');
    onlExcl.classList.add("online-exclusive");
    onlExcl.classList.toggle("selected");
    tabs.appendChild(onlExcl);
    onlExcl.tabStatus = true;

    const lunchSpech = document.createElement('div');
    lunchSpech.classList.add("lunch-specials");
    tabs.appendChild(lunchSpech);
    lunchSpech.tabStatus = false;

    const offCater = document.createElement('div');
    offCater.classList.add("office-catering");
    tabs.appendChild(offCater);
    offCater.tabStatus = false;

    const beerDT = document.createElement('div');
    beerDT.classList.add("beer-dinner-tickets");
    tabs.appendChild(beerDT);
    beerDT.tabStatus = false;

    const tabList = tabs.getElementsByTagName('div');

    for (let e of tabList) {
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
                for (let item of tabList) {
                    if (item.tabStatus == true) {
                        item.classList.toggle("selected");
                        item.tabStatus = false;
                    }
                }
                e.tabStatus = true;
            }
        });
    }
    
}
export default {
    load
}