// src/calculadora.ts

export function calcularSemanasNoMes(ano: number, mes: number): number {
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const totalDias = ultimoDia.getDate();
    return Math.ceil(totalDias / 7);
}

export function calcularGasto(diasPorSemana: number, mes: number, salarioDia: number): number {
    const anoAtual = new Date().getFullYear();
    const semanas = calcularSemanasNoMes(anoAtual, mes);
    const diasTotais = semanas * diasPorSemana;
    return diasTotais * salarioDia;
}

function inicializarCalculadora(): void {
    const btn = document.getElementById("calcularBtn");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const diasInput = document.getElementById("diasPorSemana") as HTMLInputElement;
        const mesSelect = document.getElementById("mes") as HTMLSelectElement;
        const salarioInput = document.getElementById("salarioDia") as HTMLInputElement;
        const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;

        const dias = parseInt(diasInput.value);
        const mes = parseInt(mesSelect.value);
        const salarioDia = parseFloat(salarioInput.value);
        
        if (isNaN(dias) || isNaN(mes) || isNaN(salarioDia)) {
            resultadoDiv.innerHTML = "<p style='color: red'>⚠️ Preencha todos os campos corretamente!</p>";
            return;
        }

        const total = calcularGasto(dias, mes, salarioDia);
        const anoAtual = new Date().getFullYear();
        const semanas = calcularSemanasNoMes(anoAtual, mes);
        const diasTrabalhoMes = semanas * dias;

        resultadoDiv.innerHTML = `
            <p>🔢 Dias trabalhados no mês: <strong>${diasTrabalhoMes}</strong></p>
            <p>💰 Valor por dia: <strong>R$ ${salarioDia.toFixed(2)}</strong></p>
            <p>📆 Total gasto no mês: <strong>R$ ${total.toFixed(2)}</strong></p>
        `;
    });
}

// Inicializa quando o DOM estiver pronto
if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", inicializarCalculadora);
}