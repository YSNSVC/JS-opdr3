const age = 28;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";




if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op je bier")
} else {
    console.log("Geen jongere korting");
}

if (firstName = Bram || Sarah) {
    console.log("Je krijgt een gratis biertje omdat je Bram of Sarah heet");
} else {
    console.log("Geen gratis bier, want je heet geen Bram of Sarah");
}