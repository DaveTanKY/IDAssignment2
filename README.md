# Harry Potter Website
The purpose of this harry potter site is to allow curious fans of the series "Harry Potter" access to information of the characters in "Harry Potter" The site is catering to those interested in learning more about the world of "Harry Potter".

Users can find out more about the series such as the books written by J. K. Rowling and the movies that have aired. They can also search for specific characters and find out more about them such as, name, date of birth, their patronus and many more! 



# Design Process
Some of the things i wanted the website to provide is digestible information. I chose to only display information about characters that was interesting that people would likely want to know. To do that, i have split up the website in 3  different parts. The first part shows a general overview of the series such as the author, the books she has written in the series as well as the movies that have aired. 

The second part of the website is the characters section. I chose to make this its own section as it contains a lot of information that most people are looking for. The characters page displays all the current available characters in the API. Users can find out more about the characters from their name, gender, house and general information about the character by clicking the more information button. 

Lastly, i made a contact page. This page serves as a page for users to send their comments and suggestions of the website. They can also send us suggestions of any missing characters they would like to see added to the website. 

The API i chose to use is https://hp-api.herokuapp.com. I chose to use this api because it contains all the informaiton that i want to display on my site. It is able to give me information about the characters as well as their images which i used to display on my characters page. Another reason i chose this API is because it does not require an API key. This means that everyone will be able to access the information easily.

# Features

For my header, i wanted to make a minimalistic header that was easy to navigate while still retaining  the "Harry Potter" theme. I chose to have the 3 links on the top while having a harry potter logo on the side.

The header is able to shrink down to a dropdown menu when the width of the screen becomes too small to accomodate the usual navigation bar. 

This compact version allows users to click on a button which will then create an overlay showing  the 3 pages they can choose from.

This makes the navigation bar responsive as it is usable even with the smallest of screens.

The image slider on the home page serves as a teaser to the different films that has aired based on the books by J. K. Rowling. I decided to add an image slider as i personally feel that by seeing these familiar images, people are more likely to feel the urge to rewatch or read the book again. 

The image slider i created is also responsive and will decrease in size depenging on the screen size.

I added a general information card to allow new visitors to learn more about the harry potter series and its author. This is a friendly way of getting new users into the franchise as they read a short synopsis of the series to see if they are interested in it. 

I chose to use a black and white theme for the pages because i feel it gives a very enigmatic vibe, similar to the antagonist of the series. 

Below the general information card, there are rows of harry potter books in chronological order. These books have a short description under them. This display allows the user to browse the book series and read the synopsis for each book.

In addition, i also added the movies of the harry potter series and some information about them below the books. This shows the users the differnt ways they can know more about the harry potter series.

For the characters page, i decided to display the characters in cards. Because each house has its own color schemes, I decided to have some fun and make each card have different background colors depending on each house the characters are put in.

Users can search characters based on name or by house. This makes it much easier when looking for a specific character in a huge group. 

The users can click on the more information button to learn more about each character and their attributes.

The more information button will remove all existing characters and display the selected character and their information.

Similarly to the cards, when clicking on the more information button, the background color and the card color will change depending on which house the character belongs to.

From here users can see each characters name, species, ancestry, date of birth, gender, house, patronus, wand core as well as background information of the character.

The search button has also been changed to a "back to character" button to allow users to display all the characters again.

For the Contat page, i decided to add a general remarks form to receive any feedback from users. This form will check if the user has filled in the fields properly before submitting the response.

I also added a suggestions form for the users to suggest a character to be added to the website. This helps to ensure that the website is updated with information and that no one's favourite character is left out. 

The users can input information about their characters based on what is displayed in the characters page.

# Features Left to implement

Some additional features i would like to impliment is the adding of links to bookstores to purchase the various books in the series.

I would also like to add links to the different movies that users can purchase

# Technologies Used
I used javascript to retrieve information from the API
I used javascript and jquery to append and edit various elements into my html document
I used Bootstrap to make the card for the more information on characters.
I used Bootstrap to make the image slider on the home page

# Testing
Search for Characters test:
1. Go to characters page
    1. type in character name
    2. click search by name button
    3. Only characters containing the name in the search field will be displayed

2. More information on Characters
    1. Go to characters page
    2. click on more information button for character
    3. Only selected character will appear with more information about that character
    4. If there is no value for information, "Unknown" will be displayed instead.

4. Submitting a form
    1. Go to contact us page
    2. submit form
    3. Website prompts user to fill in fields before submitting form

5. Navigation bar Responsiveness
    1. Reduce browser size
    2. menu links should disappear and is replaced by a button
    3. Clicking the button will show an overlay containing the menu links

6. Books and movies responsiveness
    1. Go to home page
    2. reduce browser sie
    3. after reducing the browser size to bellow 1000px, the movies will now be displayed in columns with its description on the right

7. More information Responsiveness
    1. Go to character page
    2. click on more information button
    3. reduce browser size
    4. character information card will shrink relative to how small the browser size is
    5. Character information is displayed below image instead of beside when there is not enough space.

8. Browsers tested on
    1. Google Chrome
    2. Microsoft Edge
    3. Opera
    4. Internet Explorer

9. Bugs discovered
    1. Some functions on internet explorer was not able to work.
    The image slider and the characters from the javascript did not load.




# Credits
Content
The text for home page was taken from
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter)
- [wizardingworld books](https://www.wizardingworld.com/discover/books)
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince_(film))
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1)
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2)

**Media**

Navigation Bar Logo
- [wikipedia Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter)
Slider Images
- [uploadvr article](https://uploadvr.com/harry-potter-smartphone-augmented-reality-game-is-coming-in-2019/)
- [thompsonpubliclibrary movies](https://thompsonpubliclibrary.org/events/movies/)
- [wallpaperaccess Harry Potter](https://wallpaperaccess.com/harry-potter-7)

Book Images
- [wizardingworld books](https://www.wizardingworld.com/discover/books)

Movie Images
- [oroginalfilmart](https://www.originalfilmart.com/products/harry-potter-and-the-philosophers-stone-db)
- [harrypotter.fandom](https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(film))
- [imdb](https://www.imdb.com/title/tt0304141/)
- [imdb](https://www.imdb.com/title/tt0330373/?ref_=ttmi_tt)
- [harrypotter.fandom](https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Order_of_the_Phoenix_(film))
- [imdb](https://www.imdb.com/title/tt0417741/)
- [bellworks](https://bell.works/event/cinema-pop-ups-harry-potter-the-deathly-hallows-pt-1/)
- [butteredkat](https://butteredkat.com/products/harry-potter-and-the-deathly-hallows-part-2-movie-poster-2011?variant=33359076032644)

Character Images
- [herokuapp](https://hp-api.herokuapp.com)

JQuery
- [jqyuery](https://jquery.com)

API Used
- [herokuapp](https://hp-api.herokuapp.com)

Bootstrap Used
- [getbootstrap](https://getbootstrap.com)
- [jsdelivr](https://jsdelivr.com)
- [fontawesome](https://fontawesome.com)