var books = [
    {title : "Free Willy", author: "Tom Harry", isAlreadyRead: true},
    {title : "Harry Potter", author: "John Dinkins", isAlreadyRead: false},
    {title : "Mockingbird", author: "Sarry Sally", isAlreadyRead: true},
    {title : "Integrated Science", author: "Kevin Tom", isAlreadyRead: false},
];

for (i = 0; i < books.length; i++) {
    if (books[i].isAlreadyRead) {
        string = "You already read ";
    } else {
        string = "You still need to read ";
    }
    string = string + books[i].title + " by " + books[i].author;
    console.log(string);
}
