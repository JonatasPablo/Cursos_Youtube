// Importa a classe PrismaClient do pacote @prisma/client
import { PrismaClient } from "@prisma/client";
// Cria uma instância do PrismaClient para interagir com o banco de dados
const prisma = new PrismaClient();

// Função assíncrona principal
async function main() {
  // Conta o número total de registros na tabela "usuarios"
    const count = await prisma.usuarios.count();
  // Exibe o total de registros no console
    console.log("Total de registros:", count);
}

// Chama a função `main()` e trata erros caso ocorram
main()
  .catch(e => console.error(e)) // Captura e exibe qualquer erro que ocorra na execução
  .finally(async () => await prisma.$disconnect()); // Garante que o Prisma desconecte do banco de dados ao finalizar
