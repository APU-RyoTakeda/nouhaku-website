# frontend/Dockerfile
# (nouhaku-website/frontend/ ディレクトリに配置)

FROM node:20.12.2-alpine

WORKDIR /app

# ★修正: NEXT_PUBLIC_API_URLに関するARGとENVの行を削除します。
# ARG NEXT_PUBLIC_API_URL
# ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# アプリケーションのコードをコピー
COPY . ./ 

EXPOSE 3000

CMD ["npm", "run", "dev"]
