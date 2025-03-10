function verPrecio() {
    window.location.href = "AQUI_IRA_TU_LINK_DE_AFILIADO";
}

function inscribirse() {
    window.location.href = "AQUI_IRA_TU_LINK_DE_AFILIADO";
}

// Simulación de carga de testimonios dinámicos
document.addEventListener("DOMContentLoaded", function () {
    const testimonios = [
        "💬 'No sabía nada y ahora hago mis propios moldes. ¡Increíble!' - Ana L.",
        "💬 'El soporte es muy bueno y el curso es fácil de entender.' - Carlos G.",
        "💬 'Invertí en el curso y ya estoy vendiendo mis moldes. Muy recomendado.' - Luisa M."
    ];

    let indice = 0;
    const testimonioElemento = document.getElementById("testimonio");

    setInterval(() => {
        testimonioElemento.textContent = testimonios[indice];
        indice = (indice + 1) % testimonios.length;
    }, 4000);
});
