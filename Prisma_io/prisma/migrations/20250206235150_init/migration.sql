/*
  Warnings:

  - Made the column `nome_usuario` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuarios` MODIFY `nome_usuario` VARCHAR(191) NOT NULL,
    MODIFY `senha` VARCHAR(191) NOT NULL;
