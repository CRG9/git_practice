const punctuationMarks = ["!", "?", ".", "..."];
const actions = ["jumped over", "skipped across", "slid into", "rolled down", "teleported into", "elevated above", "calculated", "passed through", "avoided", "counted up"];
const startingNouns = ["Michael Jordan", "Ricky Bobby", "The Mailman", "The Amazon Driver", "The Bobble Head", "The Musician", "The Banker", "The Student", "The Teacher", "The Businessman", "The Child", "The Toaster", "The Helicopter", "The iPhone"];
const endingNouns = ["the panda", "the clock", "the apple", "the house", "the school", "your apartment", "the arena", "her car", "the supermarket", "the lion", "the tiger", "the platypus", "the gecko", "the athlete", "the girl", "the woman", "your DM's", "facebook", "the gym"]

function selectionRandomizer(itemToBeSelected) {
  let randomizedSelection = itemToBeSelected[Math.floor(Math.random() * (itemToBeSelected.length))];
  return randomizedSelection;
}

function constructPhrase() {
  let phrase = `${selectionRandomizer(startingNouns)} ${selectionRandomizer(actions)} ${selectionRandomizer(endingNouns)}${selectionRandomizer(punctuationMarks)}`;
  return phrase;
}

console.log(constructPhrase());