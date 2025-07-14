document.querySelectorAll('.ramo').forEach(boton => {
  const desbloqueos = boton.dataset.desbloquea ? boton.dataset.desbloquea.split(" ") : [];

  desbloqueos.forEach(id => {
    const dependiente = document.getElementById(id);
    if (dependiente) dependiente.classList.add("bloqueado");
  });

  boton.addEventListener('click', () => {
    if (boton.classList.contains("aprobado") || boton.classList.contains("bloqueado")) return;

    boton.classList.add("aprobado");

    desbloqueos.forEach(id => {
      const desbloquear = document.getElementById(id);
      if (desbloquear && desbloquear.classList.contains("bloqueado")) {
        desbloquear.classList.remove("bloqueado");
      }
    });
  });
});
