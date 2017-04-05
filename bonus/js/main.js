
let Observable = Rx.Observable;


let obs = Observable.create(

    (observer) => {

        $.getJSON("./data/data1.json").then((data) => observer.next( data ) );
        $.getJSON("./data/data2.json").then((data) => {observer.next( data ); } );

    }

);


obs.subscribe(
    (p_data) => console.log(p_data), // callback success 
    (p_error) => console.log(p_error), // callback error
    () => console.log("this is complete") // callback complete
);