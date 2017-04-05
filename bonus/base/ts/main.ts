import {JediKnight} 	from "./JediKnight";
import {SithLord} 		from "./SithLord";
import {ForceWarrior} 	from "./ForceWarrior";
import {ForceSide} 		from "./app.enum";
import {IDroid}			from "./droid/IDroid";
import {DroidFactory}	from "./droid/DroidFactory";


function makeDroidMove( p_droid:IDroid ):void
{
	p_droid.move();
}


let anakin:JediKnight = new JediKnight(
							"Anakin Skywalker", 
							100, 
							ForceSide.Light
						);

let darky:SithLord = new SithLord(
							"Dark Vador", 
							200, 
							ForceSide.Dark
						);

						
console.log(anakin, darky);


let factory:DroidFactory = new DroidFactory();





makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());





function useTheForce(options:Object) 
{
    return function (target: Function) 
	{
		let prop:string;
		for( prop in options )
		{
			target.prototype[prop] = options[prop];
		}
    };
}

@useTheForce(
	{
		"name":"anakin",
		"force": function()
		{
			console.log("je suis un JediKnight qui soulève description cailloux par la pensée");
		}
	}
)
class Toto{}

let a:any = new Toto();
a.force();