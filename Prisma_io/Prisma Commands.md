# Prisma CLI - Comandos Principais 🚀

Abaixo estão listados os principais comandos do Prisma para gerenciamento do banco de dados.

## 📌 Inicializar Prisma no projeto
```sh
npx prisma init
```
- Cria `prisma/schema.prisma` e configura a conexão no `.env`.

## 🔄 Gerenciar Migrações

### Criar e aplicar uma migração no banco de desenvolvimento
```sh
npx prisma migrate dev --name nome_da_migracao
```
- Gera um diretório `prisma/migrations/` com os scripts SQL.
- Aplica as alterações no banco de desenvolvimento.

### Aplicar todas as migrações pendentes no banco de produção
```sh
npx prisma migrate deploy
```
- Executa os scripts de migração previamente gerados.

### Atualizar o banco de dados sem criar migrações
```sh
npx prisma db push
```
- Alinha o banco com o `schema.prisma`, sem histórico de migração.

### Resetar o banco de dados e reaplicar todas as migrações
```sh
npx prisma migrate reset
```
- Deleta e recria o banco, aplicando todas as migrações do zero.

### Listar o status das migrações aplicadas
```sh
npx prisma migrate status
```
- Mostra o histórico de migrações e pendências.

## 📊 Sincronizar e Interagir com o Banco

### Gerar o cliente Prisma para interagir com o banco
```sh
npx prisma generate
```
- Cria arquivos necessários para usar Prisma no código.

### Abrir a interface visual para visualizar e editar dados
```sh
npx prisma studio
```
- Interface gráfica para explorar o banco de dados.

### Obter a estrutura do banco de dados existente e atualizar `schema.prisma`
```sh
npx prisma db pull
```
- Importa a estrutura do banco de dados para o Prisma.

### Validar o schema do Prisma
```sh
npx prisma validate
```
- Verifica se o arquivo `schema.prisma` contém erros.

### Formatar o schema do Prisma
```sh
npx prisma format
```
- Aplica formatação automática ao arquivo `schema.prisma`.

### Exibir informações da versão do Prisma
```sh
npx prisma version
```
- Mostra a versão instalada do Prisma CLI.

### Exibir informações de depuração do Prisma
```sh
npx prisma debug
```
- Exibe informações detalhadas para debugging.

### Exibir ajuda com todos os comandos disponíveis
```sh
npx prisma --help
```
- Lista todos os comandos do Prisma e suas opções.

---
📌 **Dica:** Sempre execute `npx prisma generate` após modificar o `schema.prisma` para garantir que o Prisma Client esteja atualizado.

Para mais informações, consulte a [documentação oficial do Prisma](https://www.prisma.io/docs). 🚀

