

# Fase final de produção
FROM node:18-alpine3.19 AS production

WORKDIR /usr/src/nextjs

COPY package.json package-lock.json next.config.mjs ./

RUN npm install

RUN apk update && apk add bash
# Copiar scripts de espera e entrypoint
COPY wait-for-it.sh docker-entrypoint.sh /usr/src/nextjs/bin/
RUN chmod +x /usr/src/nextjs/bin/wait-for-it.sh /usr/src/nextjs/bin/docker-entrypoint.sh
# Expor a porta da aplicação

COPY  .env ./env
COPY  next.config.mjs ./next.config.mjs
COPY  src ./src
COPY  tsconfig.json ./tsconfig.json
COPY  package.json ./package.json
COPY  package-lock.json ./package-lock.json
COPY  tailwind.config.ts ./tailwind.config.ts
COPY postcss.config.mjs ./postcss.config.mjs
COPY  prisma ./prisma

EXPOSE 3000
ENTRYPOINT ["/usr/src/nextjs/bin/docker-entrypoint.sh"]
# Comando para rodar o container
CMD ["npm", "run", "start"]



# # Instalar dependências de produção
# RUN npm install --production && npm cache clean --force