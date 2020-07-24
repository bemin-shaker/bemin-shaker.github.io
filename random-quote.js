var quotes = [
  "Dont't worry if it doesn't work right. If everything did, you'd be out of a job. - Anonymous",
  "Don't comment bad code - rewrite it. - Brian Kernighan",
  "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. - Paul Graham",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
  "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell",
  "One of my most productive days was throwing away 1000 lines of code. - Ken Thompson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Fix the cause, not the symptom. - Steve Maguire",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "The best error message is the one that never shows up. - Thomas Fuchs"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
