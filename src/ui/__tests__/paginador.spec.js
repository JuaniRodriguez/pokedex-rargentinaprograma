import mostrarPaginador,{manejarCambioPagina} from "../paginador";
import pokedexFixture from "../../__tests__/pokedex.fixture";


describe("testeo de event y callback",()=> {

    const mockFunction=jest.fn();
    document.body.innerHTML=pokedexFixture;
    

    test("testea ejecucion de callback",()=> {

        (document.querySelector("#paginador")).onclick=(e)=> {
            manejarCambioPagina(e,mockFunction)
        };
    
        document.querySelector("#paginador").click();
        expect(mockFunction).toHaveBeenCalled();


    })

    test("testea que se haga click al correcto",()=> {

        const totalPokes=1154;
        const paginaActual=1;
        const siguienteUrl="siguiente";
        const anteriorUrl=null;

        mostrarPaginador(totalPokes,paginaActual,siguienteUrl,anteriorUrl,mockFunction);

        document.querySelector('[data-pagina="1"]').click();
            expect(mockFunction.mock.calls).toContainEqual([1])
            //podria haber usado directamente toHaveBeenCalledWith(1) 

    })

})


describe("Prueba funcion paginador",()=> {

    document.body.innerHTML=pokedexFixture;
    const totalPokes=1154;
    const paginaActual=1;
    const siguienteUrl="siguiente";
    const anteriorUrl=null;
    const mockFunction=jest.fn();

    mostrarPaginador(totalPokes,paginaActual,siguienteUrl,anteriorUrl,mockFunction);

    test("pagina Anterior",()=> {

        expect(document.querySelector('[data-pagina="Anterior"]').textContent)
            .toEqual("Anterior");
        expect((document.querySelectorAll(".page-item"))[0].className)
            .toEqual("page-item disabled")
    })
  
    test("creacion de paginas",()=> {

        expect(document.querySelectorAll(".page-item")).toHaveLength((Math.ceil(totalPokes/20))+2);
        expect((document.querySelectorAll(".page-item"))[1].className)
            .toEqual("page-item active");
    })

    test("pagina Siguiente",()=> {

        expect(document.querySelector('[data-pagina="Siguiente"]').textContent)
            .toEqual("Siguiente");
        expect((document.querySelectorAll(".page-item"))[59].className)
            .toEqual("page-item")
    })

})