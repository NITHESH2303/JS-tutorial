let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote:'“Be yourself; everyone else is already taken.”',
    person: 'Oscar Wilde'
}, {
    quote: '“I\'m selfish, impatient and a little insecure. ' +
        'I make mistakes, I am out of control and at times hard to handle. ' +
        'But if you can\'t handle me at my worst, ' +
        'then you sure as hell don\'t deserve me at my best.”',
    person: 'Marilyn Monroe'
}, {
    quote: '“Two things are infinite: ' +
        'the universe and human stupidity; ' +
        'and I\'m not sure about the universe.”',
    person:  'Albert Einstein'
}, {
    quote: '“So many books, so little time.”',
    person: 'Frank Zappa'
}, {
    quote: '“A room without books is like a body without a soul.”',
    person: 'Marcus Tullius Cicero'
}, {
    quote: '“Be who you are and say what you feel, ' +
        'because those who mind don\'t matter, and those who matter don\'t mind.”',
    person: 'Bernard M. Baruch'
},{
    quote: '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
    person: 'Dr. Seuss'
}]

btn.addEventListener('click',function (){
    let random = Math.floor(Math.random()*quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})