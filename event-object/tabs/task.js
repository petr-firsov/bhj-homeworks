let tabs = document.getElementsByClassName('tab');
let contents = document.getElementsByClassName('tab__content');

for (let i = 1; i <= tabs.length; i++) {
    let activeTab = tabs[i];
    let activeContent = contents[i];

    activeTab.onclick = function() {
        for (let i = 1; i <= tabs.length; i++) {
            let tab = tabs[i];
            tab.classList.remove('tab__active');
        };
        activeTab.classList.add('tab__active');

        for (let i = 1; i <= contents.length; i++) {
            let content = contents[i];
            content.classList.remove('tab__content_active');
        }
        activeContent.classList.add('tab__content_active');
    }
}

