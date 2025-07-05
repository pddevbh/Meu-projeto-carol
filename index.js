"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = require("prompt-sync");
const prompt = (0, prompt_sync_1.default)();
function calcularSemanasNoMes(ano, mes) {
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const totalDias = ultimoDia.getDate();
    return Math.ceil(totalDias / 7);
}
function calcularGasto(diasPorSemana, mes, salarioDia) {
    const anoAtual = new Date().getFullYear();
    const semanas = calcularSemanasNoMes(anoAtual, mes);
    const diasTotais = semanas * diasPorSemana;
    return diasTotais * salarioDia;
}
const diasInput = Number(prompt("Quantos dias por semana você trabalha? "));
const mesInput = Number(prompt("Digite o mês (0 = Janeiro, 11 = Dezembro): "));
const salarioDia = 11;
const anoAtual = new Date().getFullYear();
const semanas = calcularSemanasNoMes(anoAtual, mesInput);
const diasTrabalhoMes = semanas * diasInput;
const total = calcularGasto(diasInput, mesInput, salarioDia);
// Saída
console.log("\n====================");
console.log(`🔢 Dias trabalhados no mês: ${diasTrabalhoMes}`);
console.log(`💰 Valor por dia: R$ ${salarioDia.toFixed(2)}`);
console.log(`📆 Total gasto no mês: R$ ${total.toFixed(2)}`);
console.log("====================\n");
