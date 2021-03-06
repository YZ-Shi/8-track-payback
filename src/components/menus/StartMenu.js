import { SelectMenu } from "menus";
import { ImageLoader } from "three";
import BOOMBOX from "./Boombox.gif";
import CSS from "./styles.css";

class StartMenu {
  constructor(scene) {
    // load gif
    const loader = new ImageLoader();
    loader.load(BOOMBOX, (gif) => {

      // set gif as background of menu
      document.body.style.backgroundImage = "url(" + gif.src + ")";
      document.body.style.backgroundSize = "50%";
    });

    this.name = "startMenu";

    // link to stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen";
    document.head.appendChild(link);

    // hide all other elements in body
    var length = document.body.children.length;
    for (let i = 0; i < length; i++) {
      document.body.children[i].style.opacity = 0;
    }

    // create title screen element
    const titleScreen = document.createElement("div");
    titleScreen.className = "titleScreen";
    document.body.appendChild(titleScreen);

    // Creation of title
    const title = document.createElement("H1");
    title.id = "menu";
    title.className = "title";
    title.innerText = "8-Track Payback";
    titleScreen.appendChild(title);

    // Names
    const names = document.createElement("H2");
    names.id = "name";
    names.className = "author";
    names.innerText = "by Yunzi Shi & Milan Eldridge";
    titleScreen.appendChild(names);

    // instructions
    const instruct = document.createElement("div");
    instruct.className = "command";
    titleScreen.appendChild(instruct);

    const instructions1 = document.createElement("p");
    instructions1.id = "directions1";
    instructions1.innerText = "wasd/arrow keys to move";

    const instructions2 = document.createElement("p");
    instructions2.id = "directions2";
    instructions2.innerText = "escape to pause/unpause";

    const instructions3 = document.createElement("p");
    instructions3.id = "directions3";
    instructions3.innerText = "touch a teal obstacle: lose a life";

    const instructions4 = document.createElement("p");
    instructions4.id = "directions4";
    instructions4.innerText = "touch an instrument: lose immediately";

    const instructions5 = document.createElement("p");
    instructions5.id = "directions5";
    instructions5.innerText = "avoid obstacles to win";

    instruct.appendChild(instructions1);
    instruct.appendChild(instructions2);
    instruct.appendChild(instructions3);
    instruct.appendChild(instructions4);
    instruct.appendChild(instructions5);

    // button
    const button = document.createElement("button");
    button.id = "btn";
    button.onclick = function startPayback() {

      // un-hide previously hidden body elements
      for (let i = 0; i < length; i++) {
        document.body.children[i].style.opacity = 1;
      }

      // remove title screen after button is clicked
      document.body.removeChild(titleScreen);

      // take player to song selection menu after button is clicked
      const selectMenu = new SelectMenu(scene);

      //remove boombox background
      document.body.style.backgroundImage = null;
    };
    
    button.className = "startButton";
    button.type = "button";
    button.innerText = "CLICK TO BEGIN THE ATTACK OF THE 8-TRACK";
    titleScreen.appendChild(button);
  }
}

export default StartMenu;
