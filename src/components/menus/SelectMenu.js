import { ImageLoader } from 'three';
import BOOMBOX from './Boombox.jpg';

class SelectMenu {
    constructor(scene) {
        // load gif
        const loader = new ImageLoader();
        loader.load(BOOMBOX, (jpg) => {
            document.body.style.backgroundImage = 'url(' + jpg.src + ')';
            document.body.style.backgroundPosition = 'bottom center';
            document.body.style.backgroundSize = '50%';
            document.body.style.backgroundRepeat = 'no-repeat';
        });

        this.name = 'selectMenu';

        // link to stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        //link.href = "/src/components/menus/styles.css";
        link.media = 'screen';
        document.head.appendChild(link);

        // hide all other elements in body
        var length = document.body.children.length;
        for (let i = 0; i < length; i++) {
            document.body.children[i].style.opacity = 0;
        }

        // Creation of title
        /*const title = document.createElement("H1");
		title.id = "menu";
		title.className = "title";
		title.innerText = "8-Track Payback";
		document.body.appendChild(title);

		// Names
		const names = document.createElement("H2");
		names.id = "name";
		names.className = "author";
		names.innerText = "by Yunzi Shi & Milan Eldridge";
		document.body.appendChild(names);*/

        // instructions
        const instructions = document.createElement('p');
        instructions.id = 'directions';
        instructions.className = 'instructions1';
        instructions.innerText = 'Select Music to be played';
        document.body.appendChild(instructions);

        // button
        const button1 = document.createElement('button');
        button1.id = 'btn1';
        button1.onclick = function startPayback() {
            for (let i = 0; i < length; i++) {
                document.body.children[i].style.opacity = 1;
            }

            // remove select menu children
            document.body.removeChild(instructions);
            document.body.removeChild(button1);
            document.body.removeChild(button2);
            document.body.removeChild(button3);

            // begin game after short delay
            scene.state.startBegin = false;
            scene.state.musicSelect = 1;
            scene.state.player.position.set(0, 0, 0);
            scene.state.lifeText.innerText = 'life: ' + scene.state.life;
            scene.addMusic();

            document.body.style.backgroundImage = null;
            document.body.style.backgroundPosition = null;
            document.body.style.backgroundSize = null;
            document.body.style.backgroundRepeat = null;

            setTimeout(() => {
                scene.state.gamePlay = true;
            }, 1000); // wait 1000 miliseconds before beginning game
        };
        button1.className = 'button1';
        button1.type = 'button1';
        button1.innerText = 'Jazz Hiphop';
        document.body.appendChild(button1);

        const button2 = document.createElement('button');
        button2.id = 'btn2';
        button2.onclick = function startPayback() {
            for (let i = 0; i < length; i++) {
                document.body.children[i].style.opacity = 1;
            }

            // remove start menu children
            document.body.removeChild(instructions);
            document.body.removeChild(button1);
            document.body.removeChild(button2);
            document.body.removeChild(button3);

            // begin game after short delay
            scene.state.startBegin = false;
            scene.state.musicSelect = 2;
            scene.state.player.position.set(0, 0, 0);
            scene.state.lifeText.innerText = 'life: ' + scene.state.life;
            scene.addMusic();

            document.body.style.backgroundImage = null;
            document.body.style.backgroundPosition = null;
            document.body.style.backgroundSize = null;
            document.body.style.backgroundRepeat = null;

            setTimeout(() => {
                scene.state.gamePlay = true;
            }, 1000); // wait 1000 miliseconds before beginning game
        };
        button2.className = 'button2';
        button2.type = 'button2';
        button2.innerText = '8-bit';
        document.body.appendChild(button2);

        const button3 = document.createElement('button');
        button3.id = 'btn3';
        button3.onclick = function startPayback() {
            for (let i = 0; i < length; i++) {
                document.body.children[i].style.opacity = 1;
            }

            // remove start menu children
            document.body.removeChild(instructions);
            document.body.removeChild(button1);
            document.body.removeChild(button2);
            document.body.removeChild(button3);

            // begin game after short delay
            scene.state.startBegin = false;
            scene.state.musicSelect = 3;
            scene.state.player.position.set(0, 0, 0);
            scene.state.lifeText.innerText = 'life: ' + scene.state.life;
            scene.addMusic();

            document.body.style.backgroundImage = null;
            document.body.style.backgroundPosition = null;
            document.body.style.backgroundSize = null;
            document.body.style.backgroundRepeat = null;

            setTimeout(() => {
                scene.state.gamePlay = true;
            }, 1000); // wait 1000 miliseconds before beginning game
        };
        button3.className = 'button3';
        button3.type = 'button3';
        button3.innerText = 'Classical';
        document.body.appendChild(button3);
    }
}

export default SelectMenu;
