# frontend/Dockerfile
# (frontend/ ディレクトリに配置)

FROM node:20.12.2-alpine

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# 必要なファイルとディレクトリを具体的にコピーする
# frontendフォルダ内のpackage.jsonとpackage-lock.jsonをコピー
COPY package.json ./
COPY package-lock.json ./

# 依存関係をインストール
RUN npm install

# frontendフォルダ内の src/ と public/ ディレクトリをコピー
COPY src ./src
COPY public ./public

# その他の必要なルートファイルも個別にコピー（Next.jsの設定ファイルなど）
COPY next.config.mjs ./
COPY tailwind.config.ts ./
COPY tsconfig.json ./
# もし他に frontend/ 直下にある重要な設定ファイルがあればここに追加してください
# 例: COPY postcss.config.js ./  (もしあれば)

# ポートの公開 (Docker Composeでマッピングされる)
EXPOSE 3000

# コマンドはdocker-compose.ymlで指定されるため、ここでは不要です
# CMD ["npm", "run", "dev"]