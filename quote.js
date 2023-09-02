let button=document.querySelector(".button");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");

const quotes=[
    {
        quote:"hello",
        person:"nishchith"
    },
    {
        quote:"hi",
        person:"x"
    },
    {
        quote:"bye",
        person:"y"
    },
    {
        quote:"pikachu",
        person:"pikachu"
    },
    {
        quote:"jkakfaj;afafja;dfa;fjjie ka;jfka;jaljfakjfkajkfjdksajfakdjksjdjfkjfkjkfjnvkjiruiuerquriouuitknisfhcknos=kfjjanishchith nishchith nsisnic===jjfjajfhjnishchith   nishchthi nsiiinishchthinishchith nicshifahsufhugf",
        person:"akjfkafh"
    },
    {
        quote:"Nothing goes as planned in this accursed world",
        person:"madara uchiha"
    },
    {
        quote:"i will be the king of the pirates",
        person:"monkey d luffy"
    },
    {
        quote:"know the pain",
        person:"pain"
    }
]
button.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[random].quote;
    person.textContent=quotes[random].person;

})