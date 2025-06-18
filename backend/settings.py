from pathlib import Path
import os

# manage.pyがあるディレクトリ（プロジェクトのルートディレクトリ）に合わせるためのパス
# settings.py が backend/ にある場合
BASE_DIR = Path(__file__).resolve().parent.parent # ★修正点: parentを2回

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-@5v%!5xd=3f=!kp2onnflyx8%@$(qy+e9*m#%57rwwzdz@#xcd')

DEBUG = True

# ローカルホストからのアクセスを許可し、Dockerコンテナ内でのアクセスも考慮
ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]', 'backend']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'core', # あなたのカスタムアプリ
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # ここにCommonMiddlewareより前に移動
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ROOT_URLCONF のパスも変更が必要な可能性があります
# settings.py が backend/ にあるなら、backend.urls はそのままかもしれません
# もし 'backend' がプロジェクト名なら 'backend.urls' でOK
ROOT_URLCONF = 'backend.urls' # あなたの既存のものを変更しないでください

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI_APPLICATION のパスも変更が必要な可能性があります
# settings.py が backend/ にあるなら、backend.wsgi.application でOK
WSGI_APPLICATION = 'backend.wsgi.application' # あなたの既存のものを変更しないでください

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': 'db', # Docker Composeのサービス名
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
# MEDIA_ROOT は docker-compose.yml の volumes: media_data:/app/media と一致させる
# BASE_DIR が /app を指すので、os.path.join(BASE_DIR, 'media') でOK
MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # ★修正点: BASE_DIR を使用
MEDIA_URL = '/media/'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]