# Projeto Next.js com Docker e Prisma

Este projeto utiliza Docker e Docker Compose para facilitar a configuração e execução do ambiente de desenvolvimento.

## Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado na sua máquina. [Instalar Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: O Docker Compose também é necessário para gerenciar os serviços do Docker. [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Configuração do Ambiente

1. **Arquivo `.env`**: 
   - Antes de iniciar o container, verifique se o arquivo `.env` está configurado corretamente.
   - Um arquivo `.env` de exemplo já está incluído no projeto com as variáveis de ambiente necessárias. Certifique-se de que as informações (como credenciais e URLs) estão corretas para o seu ambiente.

## Iniciando a Aplicação

Para iniciar a aplicação, utilize o comando abaixo:

```bash
docker compose up -d --build
```
- A flag `-d` roda os containers em segundo plano (detached mode).
- A flag `--build` garante que as imagens Docker sejam reconstruídas antes de iniciar os containers.
- Após a execução bem-sucedida deste comando, a aplicação estará rodando na porta `3000`.

## Verificação da Aplicação

- **Acesso**: Acesse a aplicação através do navegador no endereço [http://localhost:3000](http://localhost:3000).
- **Versão e Datas de Build**:
  - **Versão**: [Insira como a versão é verificada aqui, se aplicável]
  - **Data de criação (primeiro build)**: [Data da primeira vez que o build foi feito]
  - **Data da última vez que o build foi feito**: [Data da última vez que o build foi feito]


