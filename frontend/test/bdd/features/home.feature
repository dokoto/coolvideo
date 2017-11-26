@coolvideos
@mandatory

Feature: Entrar y testear la la funcionalidad de favoritos
    AS usuario valido
    I WANT autenticarmen correctamente
    IN ORDER TO poder navegar y usar las principales funcionalidades

    Background:
        Given Accedo al login en "http://localhost:3000"
        When Estoy en la pantalla de login
        Then Escribo el usuario "user1" con clave "pass"
        Then Hago click en entrar en su cuenta

    @add-favoritos
    Scenario: Añado pelicula favorita
        Given Estando en el dashboard
        When Hago click en añadir
        Then La pelicula aparece en favoritos

    @remove-favoritos
    Scenario: Elimino pelicula favorita
        Given Estando en el dashboard
        When Hago click en quitar
        Then La pelicula desaparece de favoritos        
