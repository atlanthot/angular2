

enum ForceSide { Light = 100, Dark  = 200 };


function createCard( 	p_name:string, 
						p_job:string, 
						p_age:number,
						p_side:ForceSide 
):string
{
	
	let side = ( p_side == ForceSide.Dark ) ? "dark" : "light";
	let card = `
	
		<div>
			<h1>Id Card</h1>
			<p>name: ${p_name}</p>
			<p>job: ${p_job}</p>
			<p>age: ${p_age}</p>
			<p>side: ${side}</p>
		</div>
	
	`;
	return card;
}

let cardInfos:[string, string, number, ForceSide] = [

	"Dark Vador"	, "Sith Lord"	, 40	, ForceSide.Dark,
	"Obiwan Kenobi"	, "Jedi Knight"	, 60	, ForceSide.Light,
	"Yoda"			, "Jedi Master"	, 900	, ForceSide.Light
	
];

let card:string = "";
let i:number = 0;
let max:number = cardInfos.length;

for( i = 0; i < max; i+=4 )
{
	card += createCard( 
			(<string> cardInfos[i]),
			(<string> cardInfos[i+1]),
			(<number> cardInfos[i+2]),
			(<ForceSide> cardInfos[i+3])
	); 
						//cardInfos[i+1], 
						//cardInfos[i+2] );
}


// array destructuring
//let [firstName, firstJob, firstAge, firstSide] = cardInfos;
//console.log(firstName, firstJob, firstAge, firstSide);


document.getElementsByTagName("body")[0].innerHTML = card;