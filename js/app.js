

let usernames = ["Ali", "Dawud", "Suleiman", "Umar", "Taymiyyah", "Uthman", "Yusuf", "Yunus", "Musab", "Talha"];
let userAges = [16, 23, 35, 54, 22, 77, 61, 82, 11, 8 ];

let counter = -1;
while (counter < userAges.length){
    counter = counter + 1;
    if (userAges[counter] >= 18 ){
    console.log(usernames[counter]);
    }
}

//This was a super hard while statement. Had some help from Alex.

for (let counter = -1; counter < userAges.length; counter++) 
    if (userAges[counter] < 18){
    console.log(usernames[counter]);
}