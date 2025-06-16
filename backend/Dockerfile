# backend/Dockerfile
# (backend/ ディレクトリに配置)

# Pythonベースイメージの指定（脆弱性対応のため最新パッチバージョンを推奨）
FROM python:3.11-slim-buster

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# プロジェクトルートのrequirements.txtをコピー
# docker-compose.ymlのbuild.contextがルートなので、相対パスはルートから
COPY requirements.txt /app/requirements.txt

# 依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# プロジェクト全体（manage.pyやcore/, backend/, frontend/など全て）を/appにコピー
# これにより、コンテナ内でmanage.pyが実行可能になる
COPY . /app

# ポートの公開 (Docker Composeでマッピングされる)
EXPOSE 8000

# コマンドはdocker-compose.ymlで指定
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]