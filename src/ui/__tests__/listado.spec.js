import { actualizarTextoIndicePokemones,mostrarListadoPokemones } from "../listado";

it("testea que se actualice el indice",()=> {
    document.body.innerHTML='<div id="indice"></div>';
    actualizarTextoIndicePokemones("hola");
    expect(document.querySelector("#indice").textContent)
        .toContain("hola");

})

const mock=jest.fn();

it("testea listado de pokemones",()=> {
    document.body.innerHTML='<div id="indice"></div>';
    mostrarListadoPokemones(["juan","pedro","lucas"],mock)
    expect(document.querySelector("#indice").textContent)
        .toContain('');
    expect(document.querySelectorAll(".list-group-item")).toHaveLength(3);
    (document.querySelectorAll(".list-group-item")).forEach((el)=>el.click())
    expect(mock).toHaveBeenCalledTimes(3);
})
