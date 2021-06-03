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
    this.color = "nero";
    this.quantity = 2;

  }
  get af(){
    return this.name0 + " e " + this.name1;
  }
}

var fantasia = new animaliFantastici;
console.log("getter  --->", fantasia.af );

/*
for (let n = 0; n < 6; n++){
  A[n] = fantasia;
}*/
