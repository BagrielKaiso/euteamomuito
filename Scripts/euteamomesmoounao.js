document.addEventListener("DOMContentLoaded", function() {
    const bar = document.querySelector('.love-bar');
    const percent = document.querySelector('.love-percent');
    let width = 0;
    const max = 100; // largura máxima da barra em %
    const percentMax = 99999; // valor máximo exibido na porcentagem
    const duration = 10000; // duração total em ms
    const interval = 10; // intervalo de atualização em ms
    const step = max / (duration / interval);

    const grow = setInterval(() => {
        if (width >= max) {
            bar.style.width = "100%";
            percent.textContent = percentMax + "%";
            document.getElementById("botao1").style.display = "inline-block";
            clearInterval(grow);
            return;
        }
        width += step;
        if (width > max) width = max;
        bar.style.width = width + "%";

        // Cálculo proporcional da porcentagem
        const currentPercent = Math.floor((width / max) * percentMax);
        percent.textContent = currentPercent + "%";
    }, interval);
});
