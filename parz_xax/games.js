debugger;
let points = 0;

let resp0 = prompt("vorn e Hayastani mayraqaxaqy");

if(resp0 === "Yerevan") {
    points = points +1;
}

let resp1 = prompt("vorn e rusastani mayraqaxaqy?");

if (resp1 === "Moskva") {
    points = points +1;
}
let resp2 = prompt("vorn e Franciai mayraqaxaqy?");

if(resp2 === "Paris") {
    points = points +1;
}
alert("duq havaqel eq "+points+"/3");

