import { getSaludo } from "../../src/base-pruebas/02-template-string"

getSaludo

describe('Pruebas en template string', () => {
  test('getSaludo debe retornar "hola fernando" ', () => {
    const name = 'Fernando';
    const message = getSaludo( name );
    expect ( message).toBe(`Hola ${name}`)
  })
  
})
