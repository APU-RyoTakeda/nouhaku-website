# backend/Dockerfile
# (backend/ ディレクトリに配置)

FROM python:3.11-slim-buster

WORKDIR /app

# プロジェクトルートのrequirements.txtをコピー (nouhaku-website/requirements.txt)
# docker-compose.ymlのbuild.contextがルートなので、ここでのパスはルート基準
COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r /app/requirements.txt

# プロジェクト全体（manage.pyやcore/, backend/, frontend/など全て）を/appにコピー
COPY . /app

EXPOSE 8000