const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    { text: "Dream bigger. Do bigger.", author: "Unknown" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { text: "Little things make big days. Great things use a lot of little things.", author: "Unknown" },
    { text: "Life is short, and it’s up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "Good friends are like stars. You don’t always see them, but you know they’re always there.", author: "Unknown" },
    { text: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        text: "In the end, we only regret the chances we didn’t take.",
        author: "Lewis Carroll"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "The purpose of life is to believe, to hope, and to strive.",
        author: "Indira Gandhi"
    },
    {
        text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "An unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown, Jr."
    },
    {
        text: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        text: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    }
];


const profilePics = [
    'porto123.jpg', // Replace with actual image paths
    'p0rto13.jpg',
    'mine.jpg'
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const profilePic = document.getElementById('profile-pic');
const newQuoteBtn = document.getElementById('new-quote-btn');
const portfolioBtn = document.getElementById('portfolio-btn');

let currentPicIndex = 0;

function changeProfilePic() {
    currentPicIndex = (currentPicIndex + 1) % profilePics.length;
    profilePic.src = profilePics[currentPicIndex];
}

function displayQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

// Automatically change profile picture every 5 seconds
setInterval(changeProfilePic, 5000);

document.addEventListener('DOMContentLoaded', displayQuote);

portfolioBtn.addEventListener('click', () => {
    window.location.href = 'https://mayang669.github.io/profile'; // Replace with your actual portfolio URL
});