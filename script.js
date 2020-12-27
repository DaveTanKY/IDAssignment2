
// Retreiving data from API
var charlist;
async function getData() {
    const url = 'https://hp-api.herokuapp.com/api/characters'
    const response = await fetch(url);
    const data = await response.json();
    charlist = data;
    displayChar();

}
getData();
// Appending data and elements into html
function displayChar() {
    charlist.forEach(char => {
        $('.char-main-content').append("<div class='char-container'>" + 
        "<img class='char-img' src='" + char.image + "'>" +
        "<div class='name'>" + char.name + "</div>"+
        "<button class='more-info-btn' id='" + char.name + "' onclick='moreInfo(this.id)'>More information</button>" +
        "</div>");
        

    });
}

// More info is displayed when button is clicked
function moreInfo(key){
    charlist.forEach(char => {
        if (char.name === key)
        {
            alert(char.name);
        }
    })
}
