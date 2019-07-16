(function () {
//Anonymous Function
  var names = ["Yash", "John", "Jen", "Jason", "Paul", "Frank", "Laura", "Pali", "Laura", "Jatin"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
