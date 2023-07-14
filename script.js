const quotes = [
  "Success is the sum of small efforts-repeated day in and day out -Rober Collier",
  "Arise awake and stop not till the Goal is achieved-Swami Vivekananda",
  "If Your Dreams Don't Scare You, They are too small-Richard Branson",
  "Today is your opportunity to build the tomorrow you want-Ken Poirot",
  "It is very easy to defeat someone, but very difficult to win someone-DR.APJ Abdul Kalam",
  "Mindset has more power than anything else in the world-Sudha Murty",
  "We try to work on things which billions of people will use every day-Sundar Pichai"
  
];

function generateQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomNumber];
}
