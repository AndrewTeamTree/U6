var quotes = [{
	quote: 'No pressure, no diamonds.',
	source: 'Thomas Carlyle',
	citation: 'Wisdomquotes.com',
	year: 2023
}, {
	quote: 'No one is you and that is your power.',
	source: 'Dave Grohl',
	citation: 'Web Search',
	year: 2023
}, {
	quote: `But seek his righteousness, and all these things will be given to you as well.`,
	source: 'source',
	year: `eternal`
}, {
	quote: 'Leaders who seek only power and control, will end up losing both.',
	source: 'pinterest',
	citation: 'Dr. Henry Cloud ',
	year: 2023
}, {
	quote: 'No one cares about it more than you. Give it the attention it needs.',
	source: 'Robert Kiyosaki',
	citation: 'Web Search',
	year: 2023
}];
var colors = ['#ee8d67', '#4884b1', '#f49237', '#65b148', '#485eb1', '#c0afaf'];

function getRandomQuote(array) {
	var rando = Math.floor(Math.random() * quotes.length);
	return array[rando].quote;
}
var isCitation;
var isYear;

function ConditionKey(index) {
	if (quotes[index].citation !== undefined) {
		isCitation = true;
	} else {
		isCitation = false;
	}
	if (quotes[index].year !== undefined) {
		isYear = true;
	} else {
		isYear = false;
	}
}

function printQuote() {
	var _body = document.querySelector("body");
	for (let i = 0; i < colors.length; i++) {
		var randomColor = Math.floor(Math.random() * colors.length);
		_body.style.backgroundColor = colors[randomColor];
	}
	var quote = getRandomQuote(quotes);
	var index;
	for (var i = 0; i < 5; i++) {
		if (quotes[i].quote === quote) {
			index = i;
		}
	}
	ConditionKey(index);
	var QuotesObjects;
	if (isCitation === true && isYear === true) {
		QuotesObjects = "<p class=\"quote\">" + quotes[index].quote + "</p> <p class=\"source\">" + quotes[index].source + "<span class=\"citation\">" + quotes[index].citation + "</span><span class=\"year\">" + quotes[index].year + "</span></p>";
	} else if (isCitation === true && isYear === false) {
		QuotesObjects = "<p class=\"quote\">" + quotes[index].quote + "</p> <p class=\"source\">" + quotes[index].source + "<span class=\"citation\">" + quotes[index].citation + "</p>";
	} else if (isCitation === false && isYear === true) {
		QuotesObjects = "<p class=\"quote\">" + quotes[index].quote + "</p> <p class=\"source\">" + quotes[index].source + "<span class=\"year\">" + quotes[index].year + "</p>";
	} else {
		QuotesObjects = "<p class=\"quote\">" + quotes[index].quote + "</p> <p class=\"source\">" + quotes[index].source + "</p>";
	}
	setTimeout(() => {
		console.log("Delayed for 1 second.");
	}, "1 second");
	document.getElementById('quote-box').innerHTML = QuotesObjects;
}
document.getElementById('load-quote').addEventListener("click", printQuote, false);