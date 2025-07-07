import * as readline from 'readline';

const cleanCpf = (cpf: string): string => cpf.replace(/\D/g, '');

const isValidLength = (cpf: string): boolean => cpf.length === 11;
const isRepeatedDigits = (cpf: string): boolean => /^(\d)\1{10}$/.test(cpf);

const calculateDigit = (cpf: string, factor: number): number => {
  let total = 0;
  for (const digit of cpf.slice(0, factor)) {
    total += parseInt(digit) * (factor--);
  }
  const remainder = (total % 11);
  return remainder < 2 ? 0 : 11 - remainder;
};

const validateCpf = (cpf: string): boolean => {
  if (!isValidLength(cpf) || isRepeatedDigits(cpf)) return false;
  const digit1 = calculateDigit(cpf, 10);
  const digit2 = calculateDigit(cpf, 11);
  return cpf.slice(-2) === `${digit1}${digit2}`;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o CPF (apenas números): ', (input) => {
  const cpf = cleanCpf(input);
  console.log(`${cpf} é ${validateCpf(cpf) ? 'válido' : 'inválido'}`);
  rl.close();
});
