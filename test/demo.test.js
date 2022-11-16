
describe('Pruebas en  <DemoComponent />', () =>{

    test ('Esta prueba no debe fallar', ()=>{


        // 1. INICIALIZACION
    const mensaje1 = 'hola mundo';
        // 2. ESTIMULO
    const mensaje2 = mensaje1.trim();
        // 3. OBSERVAAR EL COMPORTAMIENTO ...ESPERADO "test": "jest"
    expect( mensaje1 ).toBe( mensaje2 )
    })
})
