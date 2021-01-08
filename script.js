
// Character information from https://en.wikipedia.org/wiki/List_of_Harry_Potter_characters
var charlist;
var lore_dict = { 'Harry Potter': "Harry James Potter is a fictional character and the titular protagonist in J. K. Rowling's series of eponymous novels. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The book and film series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort.",
'Hermione Granger' : "Hermione Jean Granger (/hɜːrˈmaɪ.əni/ /ˈɡreɪndʒər/ hur-MY-ə-nee GRAYN-jər) is a fictional character in J. K. Rowling's Harry Potter series. She first appears in Harry Potter and the Philosopher's Stone, as a new student on her way to Hogwarts. After Harry and Ron save her from a mountain troll in the girls' restroom, she becomes best friends with them and often uses her quick wit, deft recall, and encyclopaedic knowledge to lend aid in dire situations. Rowling has stated that Hermione resembles herself as a young girl, with her insecurity and fear of failure.[2]",
'Ron Weasley' : "Ronald Bilius Weasley is a fictional character in J. K. Rowling's Harry Potter fantasy novel series. His first appearance was in the first book of the series, Harry Potter and the Philosopher's Stone, as the best friend of Harry Potter and Hermione Granger. He is a member of the Weasley family, a pure blood family that resides in 'The Burrow' outside Ottery St. Catchpole. Along with Harry and Hermione, he is a member of Gryffindor house. Ron is present in most of the action throughout the series.",
'Draco Malfoy' : "Draco Lucius Malfoy is a character in J. K. Rowling's Harry Potter series. He is a student in Harry Potter's year belonging in the Slytherin house. He is frequently accompanied by his two cronies, Vincent Crabbe and Gregory Goyle, who act as henchmen. Draco is characterised as a cowardly bully who tricks and hurts people to get what he wants; nevertheless, he is a cunning user of magic. He was played by Tom Felton in the Harry Potter film series.",
'Minerva McGonagall' : "Professor Minerva McGonagall is a fictional character in J. K. Rowling's Harry Potter series. Professor McGonagall is a professor at Hogwarts School for Witchcraft and Wizardry and is the head of Gryffindor House and professor of Transfiguration, as well as being the Deputy Headmistress under Albus Dumbledore and a member of the Order of the Phoenix. Following Lord Voldemort's defeat at the hands of her student Harry Potter and the deaths of Headmasters Albus Dumbledore and Severus Snape, McGonagall takes the position of Headmistress. Professor McGonagall was portrayed in the film adaptations by Maggie Smith.[1]",
'Cedric Diggory' : "Cedric Diggory is a fictional character in J. K. Rowling's Harry Potter series. Cedric is one of the main characters in the fourth book, Harry Potter and the Goblet of Fire, as he represents Hogwarts School of Witchcraft and Wizardry in the Triwizard Tournament, alongside Harry Potter. Cedric is murdered by Peter Pettigrew on Lord Voldemort's orders during Voldemort's resurrection in Little Hangleton.[1]",
'Cho Chang' : "Cho Chang is a Ravenclaw student one year above Harry, and plays Seeker for the Ravenclaw Quidditch team. She is best known for being Harry's first love interest, is described as being 'very pretty' with long dark hair and is frequently accompanied by a group of giggling Ravenclaw girls. In Goblet of Fire, Harry's crush on Cho intensifies and he works up the courage to ask her out to the Yule Ball, one of the necessary events in the Triwizard Tournament, but Cho apologises and replies that she had previously accepted Cedric Diggory's offer. Nonetheless, Cho is still kind to Harry, much to his relief, and she refuses to wear one of Malfoy's 'Potter Stinks' badges. She and Cedric maintain their relationship until his murder by Peter Pettigrew.",
'Severus Snape' : "Severus Snape is a fictional character in J. K. Rowling's Harry Potter series. He is an exceptionally skilled wizard whose sarcastic, controlled exterior conceals deep emotions and anguish. A Professor at Hogwarts School of Witchcraft and Wizardry, Snape is hostile to Harry due to his resemblance to his father James Potter. According to the series, James bullied Snape during their time together at Hogwarts.",
'Rubeus Hagrid' : "Rubeus Hagrid is a fictional character in the Harry Potter book series written by J. K. Rowling. He is introduced in Harry Potter and the Philosopher's Stone as a half-giant and half-human who is the gamekeeper and Keeper of Keys and Grounds of Hogwarts, the primary setting for the first six novels. In the third novel Harry Potter and the Prisoner of Azkaban, Hagrid is promoted to Care of Magical Creatures professor, and is later revealed to be a member of the Order of the Phoenix. A loyal, friendly, softhearted personality who is easily brought to tears, he is also known for his thick West Country accent.",
'Neville Longbottom' : "Neville Longbottom is a fictional character in J. K. Rowling's Harry Potter book series. He is described as a round-faced Gryffindor student in the central character Harry Potter's year. Throughout the series, Neville is often portrayed as a bumbling and disorganised character, and a rather mediocre student, though he is highly gifted at Herbology. However, the character's personality appears to undergo a transition after he joins Dumbledore's Army in Harry Potter and the Order of the Phoenix. The encouragement he receives gives him confidence in his magical abilities, turning him into a more competent wizard. Eventually, Neville becomes the leader of Dumbledore's Army during Harry, Ron and Hermione's absence searching for Horcruxes. Neville is instrumental in the downfall of Lord Voldemort and eventually destroys the final Horcrux, which allows Harry to defeat The Dark Lord once and for all. Neville is portrayed in the film adaptations by Matthew Lewis.",
'Luna Lovegood' : "Luna Lovegood is a fictional character in the Harry Potter book series written by J. K. Rowling. The character first appears in Harry Potter and the Order of the Phoenix, in which she is described as having straggly, waist-length dirty-blond hair and a dazed look on her face. Her eyes are 'silvery', 'misty', and 'protuberant' (the last quality serving to give her a 'permanently surprised look').",
'Ginny Weasley' : "Ginevra Molly Weasley is a fictional character in J. K. Rowling's Harry Potter novel series. Ginny is introduced in the first book Harry Potter and the Philosopher's Stone, as the youngest sibling and only girl in the Weasley family. She becomes Harry's main love interest and eventually marries him at the conclusion of the series.",
'Sirius Black' : "Sirius Black in J. K. Rowling's Harry Potter series. Sirius was first mentioned briefly in Harry Potter and the Philosopher's Stone as a wizard who lent Rubeus Hagrid a flying motorbike shortly after Lord Voldemort killed James and Lily Potter. His character becomes prominent in Harry Potter and the Prisoner of Azkaban, in which he is the titular prisoner, and is also revealed to be the godfather of the central character Harry Potter. He is portrayed in the film adaptations by Gary Oldman.[1]",
'Remus Lupin' : "Remus John Lupin is a fictional character in the Harry Potter book series written by J. K. Rowling. He first appears in Harry Potter and the Prisoner of Azkaban as the new Defence Against the Dark Arts professor. Lupin remains in the story long after resigning from this post as a friend to the central character, Harry Potter. In the films, he is portrayed by David Thewlis as an adult, and James Utechin as a teenager.[1]",
'Arthur Weasley' : "Arthur Weasley is the patriarch of the Weasleys, a family of wizards who are considered 'blood traitors' by Death Eaters for their interest in the Muggle world. He is married to Molly Weasley, with whom he has seven children, including Ron, Harry's best friend. During his time at Hogwarts, Arthur belonged to the house of Gryffindor. Arthur is described as being tall and thin, and as having a receding hairline and horn-rimmed glasses. An affable, light-hearted man, he tends not to be the authority figure in the family; his wife Molly handles that area. Arthur works for the Ministry of Magic, initially in the Misuse of Muggle Artefacts Office. He is obsessed with learning about Muggle customs and inventions and owns a large collection of mostly Muggle used items. His department lacks funding, and his salary is only just able to provide for a vast family, leaving his family finances precarious.",
'Bellatrix Lestrange' : "Bellatrix Lestrange (née Black) is a fictional character in the Harry Potter book series written by J. K. Rowling. She evolved from an unnamed periphery character in Harry Potter and the Goblet of Fire into a major antagonist in subsequent novels. In the final instalment of the story, Rowling established her as Lord Voldemort's 'last, best lieutenant'. Bellatrix was the first female Death Eater introduced in the books, and remained the only woman explicitly identified as such until Harry Potter and the Half-Blood Prince.",
'Lord Voldemort' : "Lord Voldemort (/ˈvoʊldəmɔːr/, /-mɔːrt/ in the films)[a] is a sobriquet for Tom Marvolo Riddle, a fictional character and the main antagonist in J. K. Rowling's series of Harry Potter novels. Voldemort first appeared in Harry Potter and the Philosopher's Stone, which was published in 1997. Voldemort appears either in person or in flashbacks in each book and its film adaptation in the series except the third, Harry Potter and the Prisoner of Azkaban, in which he is only mentioned.",
'Horace Slughorn' : "Horace Slughorn is the long-serving Potions teacher and Head of Slytherin House since at least the 1940s, until his retirement after the 1981–82 school year. Following his retirement and the resurgence of Voldemort, Slughorn goes into hiding, concealing all knowledge of his whereabouts from both sides in the growing conflict in the wizarding world. However, after moving Snape to Defence Against the Dark Arts, Dumbledore locates Slughorn and uses Harry as incentive to convince him to return to teaching Potions. Slughorn is described as preferring to be a 'back-seat driver', obtaining things he desires by using his contacts, particularly students whom he has invited into the 'Slug Club', a group of students favoured by Slughorn, based either on their connections to important people (a type of cronyism) or on his belief that they have talents that will make them important and famous themselves when they leave school (meritocracy).",
'Kingsley Shacklebolt' : "Kingsley Shacklebolt is a senior Auror who acts as informer for the Order within the Ministry of Magic. He is first introduced in Harry Potter and the Order of the Phoenix, when he volunteers to be one of the members of the Advance Guard that escorted Harry from the Dursleys' home to Number 12, Grimmauld Place. Kingsley is in charge of the search for Sirius in the Ministry; however, knowing Sirius is innocent, he is supplying the Ministry false information that Sirius is in Tibet. He is present in the scene of the fifth book when Harry is confronted about Dumbledore's Army, after Marietta Edgecombe betrays it to Dolores Umbridge. Kingsley swiftly modifies Marietta's memory, but to avoid suspicion from the Ministry, Dumbledore is forced to hex him too as he flees.",
'Dolores Umbridge' : "Dolores Jane Umbridge is a fictional character from the Harry Potter series created by J.K. Rowling. The character is the primary antagonist of the fifth novel Harry Potter and the Order of the Phoenix and was stationed at Hogwarts by the Ministry of Magic to take power away from Harry Potter and Albus Dumbledore, who were informing the Wizarding World of Lord Voldemort's return. While at Hogwarts, Umbridge grows in power and is appointed 'High Inquisitor' by the Minister of Magic in an attempt to control the school. Despite being assigned as the Defence Against the Dark Arts teacher, Umbridge refuses to teach anything practical in the subject, which leads to the formation of Dumbledore's Army as a way for the students to learn how to defend themselves.",
'Lucius Malfoy' : "Lucius Malfoy is a Death Eater, head of a wealthy pure-blood wizarding family and a psychopath; he lives with his wife Narcissa Malfoy (née Black) and their son Draco at the Malfoy Manor in Wiltshire. Lucius was a school governor of Hogwarts before being sacked, and has very close connections at the Ministry of Magic. To maintain his reputation and influence, he makes donations to the Ministry, to charity, and to St Mungo's Hospital. He was educated at Hogwarts, where he was a prefect in Slytherin House.",
'Vincent Crabbe' : "Vincent Crabbe and Gregory Goyle are Slytherin students in Harry's year; both of their fathers, Crabbe Sr and Goyle Sr, are Death Eaters. Due to their size and strength, the pair act as Draco Malfoy's minions and serve 'to do Malfoy's bidding', especially to intimidate fellow students. Both are entirely lacking in introspection or curiosity, though Crabbe is shown to be significantly smarter than Goyle. They seem unable to make up their own minds or to see things their own way.",
'Gregory Goyle' : "Vincent Crabbe and Gregory Goyle are Slytherin students in Harry's year; both of their fathers, Crabbe Sr and Goyle Sr, are Death Eaters. Due to their size and strength, the pair act as Draco Malfoy's minions and serve 'to do Malfoy's bidding', especially to intimidate fellow students. Both are entirely lacking in introspection or curiosity, though Crabbe is shown to be significantly smarter than Goyle. They seem unable to make up their own minds or to see things their own way.",
'Mrs Norris' : "Mrs Norris was the pet cat of Argus Filch, the caretaker of Hogwarts School of Witchcraft and Wizardry. Mrs Norris was described as having an unusually strong connection with her master, alerting him to any students misbehaving inside the school castle.",
'Argus Filch' : "Argus Filch is the caretaker of Hogwarts. While he is not an evil character, he is ill-tempered, which makes him unpopular with the student body, and occasionally causes tension or exasperation with teachers and other staff. His knowledge of the secrets and short-cuts of the castle is almost unparalleled, except perhaps by the users of the Marauder's Map (the Weasley twins, Harry, Ron and Hermione), and Voldemort himself. He tends to favor almost sadistically harsh punishments, and gleefully allies himself with Umbridge when she prescribes such punishments on students."}

// Retreiving character data from API
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
    var patronus = '';
    charlist.forEach(char => {
        /*
        if (char.patronus === '')
        {
            patronus = 'Unknown';
            
            
        }
        else
        {
            patronus = char.patronus;
        }
        */

        

        if (char.name === key) {
            $('.back-btn-container').append("<div class='back-btn'><a href='character.html'>Back to Characters</a></div>")
            Object.keys(char).forEach(function(key) {
               if (char[key] === '')
               {
                   char[key] = 'Unknown';
               }
                console.log(char[key]);
            })
            if (char.wand.core === '')
            {
                char.wand.core = 'Unknown';
            }

            $('#char-main-content').append("<div id='more-details'>" +
            "<div class='more-info-card'><div class='char-sidebar'><img class='char-image' src='" + char.image + "' alt=''></div>" + 
            "<div class='char-main'><h2 class='char-name'>" + char.name + "</h2>"+
            "<p class='char-text'>Species: " + char.species + "</p>" +
            "<p class='char-text'>Ancestry: " + char.ancestry + "</p>" +
            "<p class='char-text'>Date of Birth: " + char.dateOfBirth + "</p>" +
            "<p class='char-text'>Gender: " + char.gender + "</p>" +
            "<p class='char-text'>House: " + char.house + "</p>" +
            "<p class='char-text'>Patronus: " + char.patronus + "</p>" +
            "<p class='char-text'>Wand Core: "+ char.wand.core + "</p>" +
            "</div></div>")
            

            /*
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
                */

            $('#char-wiki-info').append("<div class='cards border - primary mb - 3' style='max - width: 18rem;'>" +
                "<div class='card-header'>About " + char.name + "</div>" +
                    "<div class='card-body'>" +
                        "<p class='wiki-text'>" + lore_dict[char.name] + "</p>" +
                    "</div></div>");

            

            var bg = '';
            var card = '';
            if(char.house === 'Gryffindor')
            {
                bg = 'rgb(87, 18, 30)';
                card = 'rgb(229, 186, 48)';
            }
            else if (char.house === 'Slytherin')
            {
                bg = 'rgb(21, 48, 42)';
                card = 'rgb(126, 127, 131)';
            }
            else if (char.house === 'Ravenclaw')
            {
                bg = 'rgb(18, 29, 62)';
                card = 'rgb(185, 183, 198)';
            }
            else if (char.house === 'Hufflepuff')
            {
                bg = 'rgb(44, 31, 16)';
                card = 'rgb(201, 151, 44)';
            }

            document.getElementsByClassName('cards')[0].style.background = card;
            document.getElementsByClassName('more-info-card')[0].style.background = card;
            document.getElementsByClassName('character-body')[0].style.background = bg;
            document.getElementById('char-main-content').style.background = bg;
        }
    })
}
