import pokedexFixture from "../../__tests__/pokedex.fixture";
import mostrarPokemon from "../pokemon";

describe("testea funcion mostrarPokemon",()=> {

    document.body.innerHTML=pokedexFixture;

    mostrarPokemon(
        {
            id:1,
            nombre:"bulbasaur",
            foto:"image",
            tipos:["grass","poison"],
            habilidades:["overgrow","chlorophyll"],
            movimientos:[{nombre:"razor-wind",versiones:["gold-silver","crystal"]}],
        });
    
    test("actualizacion de texto ayuda",()=> {
        expect(document.querySelector("#ayuda").textContent)
            .toBe('')
    })

    test("testea actualizacion de imagen",()=> {

        expect(document.querySelector('#pokemon-imagen').getAttribute("src"))
            .toBe("image")
        expect(document.querySelector('#pokemon-imagen').getAttribute("alt"))
            .toBe(`Imagen frontal del pokemon bulbasaur`)


    })

    test("testea nombre e id",()=> {
        expect(document.querySelector('#pokemon-nombre').textContent)
            .toBe("bulbasaur")
        expect(document.querySelector('#pokemon-id').textContent)
            .toBe("1")

    })


})