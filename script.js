
var charlist = [];
async function getData(){
    const url = 'https://hp-api.herokuapp.com/api/characters'
    const response = await fetch(url);
    const data = await response.json();
    test(data);

}


getData();

function test(char){
    console.log(char);
}
