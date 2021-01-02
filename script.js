
// Retreiving character data from API
var charlist;
var lore_dict = { 'Harry Potter': "Harry James Potter is a fictional character and the titular protagonist in J. K. Rowling's series of eponymous novels. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The book and film series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort." }
async function getData() {
    const url = 'https://hp-api.herokuapp.com/api/characters'
    const response = await fetch(url);
    const data = await response.json();
    charlist = data;
    displayChar();
    console.log(data);
}
getData();
// Appending data and elements into html
function displayChar() {
    charlist.forEach(char => {
        $('#char-main-content').append("<div id='char-container'>" +
            "<img class='char-img' src='" + char.image + "'>" +
            "<div class='name'>" + char.name + "</div>" +
            "<button class='more-info-btn' id='" + char.name + "' onclick='moreInfo(this.id)'>More information</button>" +
            "</div>");


    });
}

// More info is displayed when button is clicked
function moreInfo(key) {
    //Empty the div container
    var x = document.getElementById("char-main-content");
    x.innerHTML = "";
    //Checking which character user clicked on
    charlist.forEach(char => {
        if (char.name === key) {
            /*
            $('#char-main-content').append("<div id='more-details'>" +
            "<div class='more-img-container'><img class='more-img' src='" + char.image + "'></div>" +
            "<div class='more-txt-container'><div class='more-txt'>Name: " + char.name + "</div>" +
            "<div class='more-txt'>Species: " + char.species + "</div>" +
            "<div class='more-txt'>Ancestry: " + char.ancestry + "</div>" +
            "<div class='more-txt'>Date of Birth: " + char.dateOfBirth + "</div>" +
            "<div class='more-txt'>Gender: " + char.gender + "</div>" +
            "<div class='more-txt'>House: " + char.house + "</div>" +
            "<div class='more-txt'>Patronus: " + char.patronus + "</div>" +
            "<div class='more-txt'>Wand Core: " + char.wand.core + "</div></div>"
            */
            $('#char-main-content').append(
                "<div class='card mb-3 card-container'>" +
                "<div class='row g-0'>" +
                "<div class='col-md-4 more-img-container'>" +
                "<img class='more-img' src='" + char.image + "' alt='Char Image'>" +
                "</div>" +

                "<div class='card-body more-body'>" +
                "<h5 class='card-title more-title'>More Information</h5>" +
                "<div' ><p class='card-text more-txt'>Name: " + char.name + "</p>" +
                "<p class='card-text more-txt'>Species: " + char.species + "</p>" +
                "<p class='card-text more-txt'>Ancestry: " + char.ancestry + "</p>" +
                "<p class='card-text more-txt'>Date of Birth: " + char.dateOfBirth + "</p>" +
                "<p class='card-text more-txt'>Gender: " + char.gender + "</p>" +
                "<p class='card-text more-txt'>House: " + char.house + "</p>" +
                "<p class='card-text more-txt'>Patronus: " + char.patronus + "</p>" +
                "<p class='card-text more-txt'>Wand Core: " + char.wand.core + "</p>" +
                "</div></div></div></div>")
            $('#char-wiki-info').append("<div class='card border - primary mb - 3' style='max - width: 18rem;'>" +
                "<div class='card-header'>About " + char.name + "</div>" +
                    "<div class='card-body text-primary'>" +
                        "<p class='card-text'>" + lore_dict[char.name] + "</p>" +
                    "</div></div>");

}
    })
}
