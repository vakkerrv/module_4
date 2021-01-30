(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var name_id in names) {
	  name = names[name_id];

	  var firstLetter = name.charAt().toLowerCase();

	  if (firstLetter === 'j') {
	    byeSpeaker.speak(name)
	  } else {
	    helloSpeaker.speak(name)
	  };

	};
	
	console.log(names);
}
)();

