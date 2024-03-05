let tabs = document.getElementsByClassName('tab');
let contents = document.getElementsByClassName('tab__content');

// let activeTab = document.querySelector('.tab_active');
// let activeContent = document.querySelector('.tab__content_active');


//     tabs[i].addEventListener('click', function() {
//         activeTab.classList.remove('tab_active');
//         activeContent.classList.remove('tab__content_active');

//         tabs[i].classList.add('tab_active');
//         contents[i].classList.add('tab__content_active');
//     })
// };

/*

1. Итак, теперь можно переключиться С первой вкладки. 
Обратно на неё переключиться нельзя.

2. Теперь вторая и третья вкладка просто активируются.
Ссылки всё время остаются активированы.
Контент всё время остаётся активирован.
*/

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

    // tabs[i].addEventListener('click', function() {
    //     let activeTabIndex = tabs.findIndex(document.querySelector('tab_active'));
    //     tabs[activeTabIndex].classList.remove('tab_active');
    //     let activeContentIndex = contents.findIndex(document.querySelector('tab__content_active'));
    //     contents[activeContentIndex].classList.remove('tab__content_active');

    //     tabs[i].classList.add('tab_active');
    //     contents[i].classList.add('tah__content_active');
        
    // });
// }
