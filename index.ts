// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface mago{
  name0:string,
  ability: string,
  age: any
};
interface animale{
  color: any,
  name1: string
  };

class animaliFantastici implements mago, animale{
  name0:string;
  ability;string;
  age:any;
  color:any;
  name1:string;
  quantity:number; //nuova proprietà aggiunta
  constructor (){
    this.name0 = "Ethan";
    this.ability = "Trasfigurazione";
    this.age = 27;
    this.name1 = "snaso";
    this.quantity = 2;

  }
  set col(col){   //col è un accessorio setter, imposta la prop di color
    this.color = col
  }
  get af(){  //accessorio getter, ottiene le due prop
    return this.name0 + " e " + this.name1;
  }
}
animaliFantastici.col = "nero";

var fantasia = new animaliFantastici;
console.log("getter  --->", fantasia.af );
console.log("setter  --->", animaliFantastici.col );

