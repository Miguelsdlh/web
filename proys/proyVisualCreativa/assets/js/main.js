document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-mobile-button');
    const nav = document.querySelector('.nav');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('menu-mobile');
    });
});



document.addEventListener("DOMContentLoaded", function() {
  const videoFrame = document.getElementById("video-frame");

  // Función para cambiar el video cuando cambia la selección del radio button
  function cambiarVideo() {
      const selectedVideo = document.querySelector('input[name="video"]:checked').value;

      // Cambiar el src del iframe con la nueva URL del video
      videoFrame.src = selectedVideo;
  }

// Llamar a la función para cambiar el video cuando cambia la selección
document.querySelectorAll('input[name="video"]').forEach(item => {
      item.addEventListener('change', cambiarVideo);
  });

  // Llamar a la función para establecer el video predeterminado al cargar la página
  cambiarVideo();
});



// Obtener el enlace por su id
var enlace = document.getElementById("enlaceWhatsapp");

// Verificar el tamaño de la pantalla y cambiar el href en consecuencia
if (window.innerWidth <= 768) { // Cambiar a tu tamaño de pantalla deseado
    enlace.href = "https://api.whatsapp.com/send/?phone=51956187879"; // Cambiar al href deseado para dispositivos móviles https://api.whatsapp.com/send/?phone=51956187879
} else {
    enlace.href = "https://web.whatsapp.com/send/?phone=51958521888"; // Cambiar al href deseado para otros dispositivos
}


function generarMensaje() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Formatear los datos en un mensaje para WhatsApp
    var mensajeWhatsApp = "Nombres: " + nombre + "%0A" + apellido + "%0A" +
                          "Email: " + email + "%0A" +
                          "celular: " + celular + "%0A" +
                          "asunto: " + asunto + "%0A" +
                          "Mensaje: " + mensaje;
    
    // Crear el enlace para compartir en WhatsApp
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=51958521888&text=" + mensajeWhatsApp;
    
    // Redirigir a WhatsApp
    window.open(linkWhatsApp);
}
