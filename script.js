
var charlist = [];
async function getData(){
    const url = 'https://hp-api.herokuapp.com/api/characters'
    const response = await fetch(url);
    const data = await response.json();
    displayChar(data);

}


getData();

function displayChar(charlist){
    charlist.forEach(char => {
        console.log(char.name);
        $('body').append("<span class='name'>" + char.name + "</span>")
    });
}
