window.onload=function() {
var quotecnt = document.getElementsByClassName("quote")[0];
var obj = {
        1: "Your intellect may be confused, but your emotions will never lie to you.",
        2: "When we are no longer able to change a situation – we are challenged to change ourselves.",
        3: "One of the most beautiful qualities of true friendship is to understand and to be understood.",
        4: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",
        5: "Life is not a problem to be solved, but a reality to be experienced.",
        6: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        7: "Love is composed of a single soul inhabiting two bodies.",
        8: "Discovery comes only to a mind immersed in its pursuit.”",
        9: "If you don’t make mistakes, you’re not working on hard enough problems. And that’s a mistake.",
        10: "Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do.",
        11: "Change your thoughts and you change your world.",
        12: "We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds.",
        13: "You don’t choose your family. They are God’s gift to you, as you are to them.",
        14: "You can get help from teachers, but you are going to have to learn a lot by yourself, sitting alone in a room.",
        15: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        16: "Where there is love there is life.",
        17: "Don’t waste another moment crying over what went wrong! If it wasn’t a blessing – it was a lesson.",
        18: "Did you ever stop to think, and forget to start again?",
        19: "Nothing is impossible, the word itself says ‘I’m possible!",
        20: "Life isn’t about finding yourself. Life is about creating yourself."
    };
function  change() {
    var num = Math.floor(Math.random() * 20) + 1;
    quotecnt.innerHTML = obj[num];}
var el = document.getElementsByClassName("button1")[0];
el.addEventListener("click", change(), false);
}