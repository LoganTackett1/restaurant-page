const load = function () {
    const tabContent = document.getElementsByClassName('tab-content');

    if (tabContent[0].firstChild) {
        tabContent[0].removeChild(tabContent[0].lastChild);
    }

    const container = document.createElement('div');
    container.classList.add('offCater');
    container.classList.add('container');
    container.innerHTML = `
    <h1>
    CATERING <strong>FOR ANY OCCASION</strong>
    </h1>
    <div>
    <button class="view-catering-menu">VIEW CATERING MENU</button>
    </div>
    `;
    tabContent[0].style.backgroundImage = 'url(https://bjsrestaurants.scene7.com/is/image/bjsrestaurants/catering-covershot)';
    tabContent[0].appendChild(container);
}

export default {
    load
}