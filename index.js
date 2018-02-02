function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
<<<<<<< HEAD
  } else if (string === "I love you, Grandma.") {
=======
  } else if (string === "I love you, Grandma") {
>>>>>>> 4313288d1d15f7dc156339b96fbbb51096c7e9e3
    return "I love you, too."
  }
}


