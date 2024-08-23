# Fase de migração
FROM node:18 as migrate

WORKDIR /usr/src/nextjsss

# Copiar arquivos necessários para a instalação de dependências e configuração
COPY package.json package-lock.json next.config.mjs .env ./


# Instalar dependências
RUN npm install

# Copiar o schema do Prisma
COPY prisma ./prisma

# Copiar scripts de espera e entrypoint
COPY wait-for-it.sh docker-copy.sh /usr/src/nextjs/bin/
RUN chmod +x /usr/src/nextjs/bin/wait-for-it.sh /usr/src/nextjs/bin/docker-copy.sh


ENTRYPOINT ["/usr/src/nextjs/bin/docker-copy.sh"]
CMD [ "npx", "prisma", "migrate", "deploy" ]