# Étape 1 : Build l'application
FROM node:22-alpine AS builder

WORKDIR /app

# Installer deps
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Image de prod
FROM node:22-alpine

WORKDIR /app

# Installer uniquement les deps prod
COPY package*.json ./
RUN npm install --only=production

# Copier le build
COPY --from=builder /app ./

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
