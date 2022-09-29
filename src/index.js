const messages = [
    "Thou shalt not pass",
    "All your bases are belong to us",
    "What is a man? A miserable little pile of secrets. But enough talk.",
    "I'm vengeance!",
    "Gorlomi",
    "I like shorts! They're comfy and easy to wear!",
    "I am error",
    "A winner is you!",
    "I am the great mighty poo, and 'm going to throw shit at you",
    "That wizard came from the moon",
    "A man chooses, a slave obeys",
    "Come on! You wanna get nuts?! Let's get nuts",
    "I did not hit her, it's not true! It's bullshit, I did not hit her! I did not! Oh, hi Mark!",
    "I'm the king of the world!",
    "They call it a 'Royale with cheese'",
    "You're going out a youngster, but you've got to come back a star",
    "Where's the money, Lebowski? Where's the fucking money, shithead?",
    "I am your father",
    "I’m just a girl, standing in front of a boy, asking him to love her",
    "You complete me",
    "I’m gone, like a turkey in the corn. Gobble gobble!",
    "You know what happens when a toad gets struck by lightning? The same thing that happens to everything else",
    "I feel just like Julia Roberts in Pretty Woman. You know, except for the whole hooker thing",
    "A dingo ate my baby!",
    " I killed them all, or not just the men, but the women and children too",
];

const quote = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`${message}`);
}

module.exports = {
    quote
};