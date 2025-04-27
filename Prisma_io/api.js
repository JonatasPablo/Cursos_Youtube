// Importa o módulo express para criar o servidor
import express from 'express';

// Importa o PrismaClient para interagir com o banco de dados
import { PrismaClient } from '@prisma/client';

// Inicializa a aplicação express
const app = express();

// Inicializa o cliente do Prisma
const prisma = new PrismaClient();

// Middleware para permitir o parse de JSON no corpo da requisição
app.use(express.json());

// Rota GET para buscar todos os usuários
app.get('/usuarios', async (req, res) => {
    // Busca todos os registros na tabela "usuarios" do banco de dados
    const usuarios = await prisma.usuarios.findMany();
    // Retorna os usuários como resposta em formato JSON
    res.json(usuarios);
});

// Rota POST para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        // Extrai os campos nome_usuario e email do corpo da requisição
        const { nome_usuario, email, senha } = req.body;

        // Valida se os campos nome_usuario e email foram fornecidos
        if (!req.body.nome_usuario || !req.body.email) {
            // Retorna um erro 400 se os campos obrigatórios estiverem ausentes
            return res.status(400).json({ error: 'Informe o nome do usuário e o email' });
        }

        // Cria um novo registro na tabela "usuarios" com os dados fornecidos
        const usuario = await prisma.usuarios.create({
            data: {
                nome_usuario, // Nome do usuário
                email,
                senha         // Email do usuário
            }
        });

        // Retorna o registro criado com status 201
        res.status(201).json(usuario);

        // Exibe uma mensagem no console quando o usuário for criado com sucesso
        console.log('Usuário criado com sucesso: ', usuario);
    } catch (error) {
        // Exibe o erro no console
        console.error('Erro ao criar usuário: ', error);
        // Retorna um erro 500 caso ocorra algum problema ao criar o usuário
        res.status(500).json({ error: 'Não foi possível criar o usuário' });
    }
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
    // Exibe uma mensagem no console quando o servidor estiver rodando
    console.log('Server is running on port 3000 no endereço http://localhost:3000');
});