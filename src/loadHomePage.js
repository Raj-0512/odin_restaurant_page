export function LoadHomePage()
{
let title_container = document.createElement("div");
let p1 = document.createElement("p");
p1.textContent = "Welcome to The Golden Spoon";
title_container.appendChild(p1);

let title_container_phrase = document.createElement("div");
let p2 = document.createElement("p");
p2.textContent = "“Where Every Meal Tells a Story.”";
p2.style.fontSize = "20px";
title_container_phrase.appendChild(p2);

let core_text_container = document.createElement("div");
let p3 = document.createElement("p");
p3.textContent = "At The Golden Spoon, we believe dining is more than just eating — it’s an experience. Our restaurant brings together the warmth of home-cooked meals and the elegance of fine dining. From the aroma of freshly prepared dishes to the cozy ambiance that welcomes you in, every detail is crafted to make your visit unforgettable.\n\nOur chefs use only the freshest ingredients, sourced locally and prepared with passion. Whether you’re here for a casual lunch, a family dinner, or a romantic evening, The Golden Spoon promises flavors that delight, service that cares, and memories that last.\n\nCome hungry, leave happy — and maybe a little amazed.";
core_text_container.appendChild(p3);

title_container.id = "title_container";
title_container_phrase.id = "title_container_phrase";
core_text_container.id = "core_text_container";


document.getElementById("content").append(title_container);
document.getElementById("content").append(title_container_phrase);
document.getElementById("content").append(core_text_container);
}