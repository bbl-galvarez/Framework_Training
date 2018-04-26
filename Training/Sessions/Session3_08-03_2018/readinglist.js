var book = [
    {title: "The Game",
    author: "Neil Strauss",
    alreadyread: true},

    {title: "The Dirt",
    author: "Neil Strauss",
    alreadyread: false}
];

for (var i = 0; i < book.length; i++){
    myBooks = book[i];
    if (myBooks.alreadyread){
        console.log("Already read: " + myBooks.title + " by: " + myBooks.author);
    }else{
        console.log("Need to read: " + myBooks.title + " by: " + myBooks.author);
    }
}
