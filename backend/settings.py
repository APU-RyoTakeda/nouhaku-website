# nouhaku-website/backend/backend/settings.py

from pathlib import Path
import os # osモジュールがなければ追加

# Build paths inside the project like this: BASE_DIR / 'subdir'.
# このBASE_DIRは 'nouhaku-website/backend/backend/' を指します
# manage.pyがあるディレクトリ（'nouhaku-website/backend/'）に合わせるため調整します
BASE_DIR = Path(__file__).resolve().parent.parent # これが現在の settings.py の場所

# ★変更点1: BASE_DIRの調整
# settings.pyからmanage.pyがあるbackend/ディレクトリのパスを取得
# settings.pyは backend/backend/settings.py なので、parent.parent が manage.py がある backend/ ディレクトリ
PROJECT_ROOT = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# ★変更点2: SECRET_KEYを環境変数から取得
# backend/.env.local から DJANGO_SECRET_KEY が読み込まれます
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-@5v%!5xd=3f=!kp2onnflyx8%@$(qy+e9*m#%57rwwzdz@#xcd')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# ★変更点3: ALLOWED_HOSTS を Dockerコンテナからのアクセスを許可
ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 追加したアプリ
    'rest_framework',        # Django REST Framework
    'corsheaders',           # CORS設定用
    'core',                  # 作成した`core`アプリケーション
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware', # ★変更点4: CORSミドルウェアがここにあることを確認 (通常、CommonMiddlewareの下あたり)
]

ROOT_URLCONF = 'backend.urls' # これは既存のまま

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

WSGI_APPLICATION = 'backend.wsgi.application' # これは既存のまま


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        # ★変更点5: backend/.env.local から環境変数として取得
        'NAME': os.environ.get('POSTGRES_DB', 'farmstay_db'),
        'USER': os.environ.get('POSTGRES_USER', 'farmstay_user'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD', 'T4keastr0ll'),
        'HOST': 'db',            # ★Docker Composeのdbサービス名
        'PORT': '5432',          # PostgreSQLのデフォルトポート
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

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


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = 'static/'
# STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles') # 本番デプロイ時に必要

# アップロードされたメディアファイルを保存するディレクトリのパス
# ★変更点6: MEDIA_ROOTのパスをPROJECT_ROOT（manage.pyがある場所）基準に修正
MEDIA_ROOT = os.path.join(PROJECT_ROOT, 'media')

# メディアファイルにアクセスするためのURLプレフィックス
MEDIA_URL = '/media/'

# CORS設定 (フロントエンドのポート3000からのアクセスを許可します)
# ★変更点7: CORS_ALLOWED_ORIGINS を明示的に許可
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]