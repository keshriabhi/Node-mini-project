let pokemon = {
    firstName : 'Pika',
    lastName : 'Chu',
    getPokemonName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

let pokemonProp = function(Snack, Hobby){
    console.log(`${this.getPokemonName()} loves ${Snack} and ${Hobby}`);
}

pokemonProp.call(this, 'Sushi', 'Algorithm');

