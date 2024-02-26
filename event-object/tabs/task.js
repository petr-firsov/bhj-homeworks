let tabs = document.getElementsByClassName('tab');
let contents = document.getElementsByClassName('tab__content');

for (let i = 0; i < tabs.length; i++) {
    let activeTab = tabs[i];
    let activeContent = contents[i];

    activeTab.addEventListener('click', function() {
        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            tab.classList.remove('tab_active');
        };
        activeTab.classList.add('tab_active');

        for (let i = 0; i < contents.length; i++) {
            let content = contents[i];
            content.classList.remove('tab__content_active');
        }
        activeContent.classList.add('tab__content_active');
    });
}

