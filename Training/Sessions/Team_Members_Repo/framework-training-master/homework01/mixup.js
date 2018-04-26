mixUp("Hello", "World");
mixUp("mix", "pod");
mixUp("dog", "dinner");

function mixUp(inputstring1, inputstring2) {

    outputstring1 = inputstring1.substring(0, 2) + inputstring2.substring(2);
    outputstring2 = inputstring2.substring(0, 2) + inputstring1.substring(2);

    console.log("The mix up of " + inputstring1 + " and " + inputstring2 + " is " + outputstring1 + " and " + outputstring2);

}