# nouhaku-website/backend/Dockerfile
# (nouhaku-website/backend/ ディレクトリに配置)

FROM python:3.11-slim-buster

WORKDIR /app

# プロジェクトルートのrequirements.txtをコピー (build contextの親ディレクトリから)
# docker-compose.yml の backend サービスで context: ./backend と設定されているため
COPY ../requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r /app/requirements.txt

# backendディレクトリ全体を/appにコピー
# manage.py が /app の直下に来るようにする
COPY . /app

EXPOSE 8000

# コンテナ起動時に実行するコマンドを CMD で定義
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
