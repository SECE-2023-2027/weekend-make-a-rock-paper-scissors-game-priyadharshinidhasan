 function play(user) {
      const choices = ["Rock", "Paper", "Scissors"];
      const computer = choices[Math.floor(Math.random() * 3)];

      document.getElementById("userChoice").innerHTML = "You chose: " + user;
      document.getElementById("computerChoice").innerHTML = "Computer chose: " + computer;

      let result = "";
      if (user === computer) {
        result = "🤝 It's a Draw!";
      } else if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
      ) {
        result = "🎉 You Win!";
      } else {
        result = "😢 You Lose!";
      }

      document.getElementById("result").innerText = result;
    }