export function loadContactPage()
{
    let contact_page_container = document.createElement("div");
    contact_page_container.id = "contact_page_container";

    let contact_page_title = document.createElement("p");
    contact_page_title.textContent = "About Us";
    contact_page_title.style.letterSpacing = "3px";
    contact_page_title.style.fontSize = "40px";
    contact_page_title.style.fontWeight = "Bold";

    let contact_page_text = document.createElement("p");
    contact_page_text.textContent = "Since opening our doors in 2019, we’ve served countless happy guests with one promise — to deliver quality, taste, and warmth with every meal.\n" +
        "\n" +
        " What makes us special:\n" +
        "\n" +
        "Fresh, locally sourced ingredients\n" +
        "\n" +
        "Handcrafted dishes made to order\n" +
        "\n" +
        "Cozy and elegant dining atmosphere\n" +
        "\n" +
        "Friendly and attentive service\n" +
        "\n" +
        "Whether it’s a casual meal with friends, a family gathering, or a romantic dinner, we make sure every visit feels like home.";

    let contact_page_contact_details = document.createElement("p");
    contact_page_contact_details.textContent = "We’d love to hear from you — whether it’s feedback, reservations, or just saying hello!\n" +
        "\n" +
        "Address:\n" +
        "123 Flavor Street, Culinary City, 456789\n" +
        "\n" +
        "Phone:\n" +
        " +91 98765 43210\n" +
        "\n" +
        "Email:\n" +
        "contact@thegoldenspoon.com";

    contact_page_container.append(contact_page_title);
    contact_page_container.append(contact_page_text);
    contact_page_container.append(contact_page_contact_details);
    document.getElementById("content").append(contact_page_container);
}
