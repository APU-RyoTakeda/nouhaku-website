# nouhaku-website/nouhaku-website/backend/backend/settings.py

from pathlib import Path
import os

# manage.pyがあるディレクトリ（プロジェクトのルートディレクトリ）に合わせるためのパス
# settings.py が backend/ にある場合
BASE_DIR = Path(__file__).resolve().parent.parent # (既存のまま)

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
    'core', # あなたのカスタムアプリ (既存のまま)
    # --- ここから追加 ---
    'bookings', # 新しく追加するbookingsアプリ
    # --- ここまで ---
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # ここにCommonMiddlewareより前に移動 (既存のまま)
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls' # あなたの既存のものを変更しないでください (既存のまま)

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

WSGI_APPLICATION = 'backend.wsgi.application' # あなたの既存のものを変更しないでください (既存のまま)

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

LANGUAGE_CODE = 'en-us' # 既存のまま
TIME_ZONE = 'UTC' # 既存のまま
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # (既存のまま)
MEDIA_URL = '/media/'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    # "http://localhost:8000", # Django REST Frameworkのブラウザアクセス用 (必要であれば追加)
]

# --- Django REST Framework の設定 (もしなければ追加) ---
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny', # 開発中は誰でもアクセス可能にする (本番では変更)
    ],
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
    ]
}
