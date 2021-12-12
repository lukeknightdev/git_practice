var messages = [
    'The Market is Going to Go Up Today',
    'The Market Will Crash Today',
    'Manage Your Risk Correctly',
    'No Leverage Today',
    '1% Risk Today',
    'The Market Is A Shambles',
    'Buy DOGE & SHIBA LOL'
];

function newMessage() {
    
    var randomNumber = Math.floor(Math.random() * messages.length);

    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
};