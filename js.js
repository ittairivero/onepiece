const formulario = document.getElementById('clubfans');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // 3. Capturamos los valores que el usuario escribió en los inputs
    const n = document.getElementById('nombre').value;
    const a = document.getElementById('apellidos').value;
    const c = document.getElementById('correo').value;

    // 4. Mostramos el mensaje de éxito en la página
    resultado.textContent = `¡Gracias ${n} ${a}! Te hemmos enviado un correo de para verificar tu cuenta al: ${c}`;
});