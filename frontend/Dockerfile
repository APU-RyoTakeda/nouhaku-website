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

# ★★★★ ここから変更 ★★★★

# アプリケーションのコードは docker-compose.yml の volumes でマウントされるため、
# Dockerfile ではコピーしないのが、開発時のリアルタイム反映には適しています。
# もし本番用のイメージ作成も兼ねる場合は、この COPY ステップが必要です。
# 現在は開発用としてのみ考慮し、以下の COPY はコメントアウトします。
# COPY src ./src
# COPY public ./public
# COPY next.config.mjs ./
# COPY tailwind.config.ts ./
# COPY tsconfig.json ./
# COPY postcss.config.mjs ./
# COPY eslint.config.mjs ./

# ポートの公開 (Docker Composeでマッピングされる)
EXPOSE 3000

# ★★★★ ここにCMD命令を追加 ★★★★
# コンテナ起動時にNext.js開発サーバーを起動
CMD ["npm", "run", "dev"]