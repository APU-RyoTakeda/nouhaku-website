# frontend/Dockerfile
# (frontend/ ディレクトリに配置)

FROM node:20.12.2-alpine

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# 必要なファイルとディレクトリを具体的にコピーする
COPY package.json ./
COPY package-lock.json ./

# 依存関係をインストール
RUN npm install

# frontendフォルダ内の src/ と public/ ディレクトリをコピー
COPY src ./src
COPY public ./public

# その他の必要なルートファイルも個別にコピー
# next.config.ts を next.config.mjs に変更
COPY next.config.mjs ./
COPY tailwind.config.ts ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./

# ポートの公開 (Docker Composeでマッピングされる)
EXPOSE 3000