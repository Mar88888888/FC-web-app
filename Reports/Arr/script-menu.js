document.addEventListener("DOMContentLoaded", function() {
    let menuItems = [
        { label: "Головна", link: "home.html" },
        {
            label: "Склад",
            subItems: [
                { label: "Основний склад", link: "page1.html" },
                { label: "Травмовані", link: "page2.html" }
            ]
        },
        {
            label: "Персонал",
            subItems: [
                { label: "Тренерський штаб", link: "page3.html" },
                { label: "Мед-персонал клубу", link: "page4.html" }
            ]
        }
    ];

    let menuElement = document.getElementById("menu");
    menuElement.appendChild(generateMenu(menuItems));
});

function generateMenu(menuItems) {
    let ul = document.createElement("ul");

    menuItems.forEach(function(item) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = item.link || "#";
        a.textContent = item.label;

        li.appendChild(a);

        if (item.subItems) {
            li.appendChild(generateMenu(item.subItems));
        }

        ul.appendChild(li);
    });

    return ul;
}
