// Code your solutions in this file
function writeCards(names, event) {
  let thankYouNotes = []
  for (let i = 0; i < names.length; i++) {
    thankYouNotes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    
  }
  return thankYouNotes
}

function countDown(number) {
  
  while (number >= 0) {
    console.log(number)
    number--
  }
}