var messages = [
    'I hate when old people poke you at a wedding and say \"you\'re next\". So next time I was at a funeral I poked them and said \"you\'re next\"',
    'This is so hilarious! I remember I was in math, and I saw something that reminded me of this joke. I laughed so hard my teacher threatened me to go to the principal. I got in trouble... Lots and lots of trouble...',
    'Love this one so much! I remember I once said it to some lady at the funeral and after, she hit me with her Michael Kors purse. And jee, I recommend to never do that, \( It hurt\'s like real bad \).',
    'I think that this Quote is very rood',
    'Show me the Power of Holy One',
    'Swampverse NFTs',
    'This is a randomly generated message :)',
    'hope your having a good day',
    'How am I so good at this programming',
    'Who thought it possible?',
    'Not me that\'s for sure'
];

function newMessage() {
    
    var randomNumber = Math.floor(Math.random() * messages.length);

    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
};