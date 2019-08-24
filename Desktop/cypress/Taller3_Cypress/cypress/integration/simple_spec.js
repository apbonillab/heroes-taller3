


describe('Los estudiantes registro', function() {
  it('Cree una cuenta ', function() {

    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Adriana")
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("bonilla beleño")
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type(userID_Alpha_Numeric()+"apbonillab@gmail.co")
    cy.get('.jsx-527058112 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      // cy.get('[name="idPrograma"]').contains('16').then(option => {
      //   // Confirm have correct option
      //   cy.wrap(option).contains('22');
      //   option[0].click();
      //   // After click, mdc-select should hold the text of the selected option
      //   cy.get('[name="idPrograma"]').contains('16');
      // });
     cy.get('[name="idPrograma"]').select('16');
     cy.get('.cajaSignUp').find('input[name="password"]').click().type("Lupe1990")
     cy.get('.cajaSignUp').contains('Registrarse').click()
     cy.get('.sweet-alert').contains('Registro exitoso') 
     cy.get('.sweet-alert').contains('Ok').click()
  })

  function userID_Alpha_Numeric() {
  
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

})



describe('login correcto ', function() {
    it('login correcto ', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("apbonillab@gmail.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("Lupe1990")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.get('#cuenta')
  
    })
})





describe('creación de una cuenta con un login que ya existe.', function() {
  it('crear usuario ya existente', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Adriana")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("bonilla beleño")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("apbonillab@gmail.co")
      cy.get('.jsx-527058112 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      cy.get('[name="idPrograma"]').select('16');
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("Lupe1990")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.get('.sweet-alert').contains("Error: Ya existe un usuario registrado con el correo 'apbonillab@gmail.co'")
      cy.get('.sweet-alert').contains('Ok').click()
  })
})


describe('Pruebe la funcionalidad de búsqueda de profesores', function() {
  it('buscar profesores y validar respuesta', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.get('.buscador').click()//.type("Adriana")
    cy.get('.Select-input  input').type("alejandro")
    cy.get('.Select-input  input').clear()
    cy.get('.Select-input  input').type("Maria Camila")
    cy.get('#react-select-required_error_checksum--option-0').contains('Maria Camila Correa Florez - Derecho')
  })
})


describe('Pruebe como dirigirse a la página de un profesor', function() {
  it('dirigirse a la página de un profesor con usuarioMaria Camila ', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.get('.buscador').click()
    cy.get('.Select-input  input').type("alejandro")
    cy.get('.Select-input  input').clear()
    cy.get('.Select-input  input').type("Maria Camila")
    cy.get('#react-select-required_error_checksum--option-0').click()
  })
})



describe('Pruebe los filtros por materia en la página de un profesor', function() {
  beforeEach(() => {
    cy.visit('https://losestudiantes.co/universidad-de-los-andes/derecho/profesores/manuel-alejandro-iturralde-sanchez')
  })

  it('pruebas solo filtro (Cine Y Crimen)', function() {
      cy.get('.materias [type="checkbox"]')
      .first().check() 
      cy.get('.boxElementFirstChild  .jsx-1682178024').eq(3)
  })
  
  it('pruebas multiple filtro materia', function() {
    cy.get('.materias [type="checkbox"]')
    .first().check() 

     cy.get('.materias')
     .find('[name="id:DERE2401"]')
     .check()

    cy.get('.boxElementFirstChild  .jsx-1682178024').eq(12)
    })
})

