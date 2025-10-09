export function loadMenuPage()
{
    let menu_container = document.createElement("div");
    menu_container.id = "menu_container";
    let menu_card_fragment = document.createDocumentFragment();

    const menuCategories = [
        "Appetizers",
        "Main Courses", 
        "Desserts",
        "Beverages",
        "Sides",
        "Specials"
    ];

    let menu_category_items = [
        [
            "Bruschetta $8.99",
            "Caesar Salad $9.99",
            "Garlic Bread $5.99"
        ],
        [
            "Grilled Salmon $12.99",
            "Beef Tenderloin $15.99",
            "Chicken Parmesan $18.99",
        ],
        [
            "Tiramisu $10.99",
            "Chocolate Cake $11.99",
            "Ice Cream $10.99"
        ],
        [
            "Wine $12.99",
            "Craft Beer $20.99",
            "Soft Drinks $5.99"
        ],
        [
            "Mashed Potatoes $4.99",
            "Seasoned Vegetables $5.99",
            "Rice Pilaf $3.99"
        ],
        [
            "Chef's Special $30.99",
            "Daily Soup $7.99"
        ]
    ]

    for(let i=0; i<6; i++)
    {
        let menu_card = document.createElement("div");
        menu_card.id = `menu_card${i}`;
        menu_card.classList.add("menu_cards");
        let category_title = document.createElement("h3");
        category_title.textContent = menuCategories[i];
        menu_card.appendChild(category_title);
        category_title.style.marginBottom = "250px";
        let item_list = document.createElement("ul");
        for (let item of menu_category_items[i]) {
            let li = document.createElement("li");
            li.textContent = item;
            item_list.appendChild(li);
        }
        menu_card.appendChild(item_list);
        item_list.style.position = "fixed";
        menu_card_fragment.append(menu_card);
    }

    menu_container.append(menu_card_fragment);
    document.getElementById("content").append(menu_container);
}