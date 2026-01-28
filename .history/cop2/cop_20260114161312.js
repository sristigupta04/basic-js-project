let arr = ['', '', '', '', '', '', '', '', ''];
let user = 'x';

let winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let btn = document.querySelector("button");
let boxes = document.querySelectorAll(".box");
let p = document.querySelector("p");

// har box par click event lagao
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // agar box khali hai tabhi likho
    if (arr[index] === '') {
      arr[index] = user;         // array update karo
      box.innerText = user;      // screen pe dikhado
      checkWinner();             // winner check karo

      // turn change karo agar koi winner nahi
      user = user === 'x' ? 'o' : 'x';
    }
  });
});

function checkWinner() {
  let combo = ['a', 'b', 'c']; // sirf naam ke liye rakha gaya hai

  // har winning pattern check karo
  for (let i = 0; i < winner.length; i++) {
    let [a, b, c] = winner[i];

    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      console.log(`you are winner: ${arr[a]}`);
      p.innerText = `Winner is: ${arr[a]}`;
      // saare boxes disable kar do
      boxes.forEach(box => box.style.pointerEvents = "none");
      return; // winner mil gaya
    }
  }

  // draw check
  if (!arr.includes('')) {
    p.innerText = "It's a Draw!";
    return;
  }

  console.log("No winner yet...");
}

// reset button
btn.addEventListener("click", () => {
  arr = ['', '', '', '', '', '', '', '', ''];
  user = 'x';
  p.innerText = '';
  boxes.forEach(box => {
    box.innerText = '';
    box.style.pointerEvents = "auto";
  });
});
