let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "https://stackoverflow.com/questions/234875/what-is-your-best-programmer-joke",
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

programming.languages.map((lang, index) => {
  console.log(`${index} - ${lang}`);
});
