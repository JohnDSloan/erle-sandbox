<h1 align="center">
  <br>
  <img src="#" alt="Erle" width="160">
</h1>

<h4 align="center">The sandbox for modules of <a href="https://erle.ucd.ie" target="_blank">Erle</a></h4>

# Demo
👉 Watch the ERLE demo <a href="https://www.https://www.youtube.com/watch?v=VeQA3oXULQw">here</a>.
<br>

### For developers

create an empty directory and enter it
```sh
$ mkdir erle-sandbox-container && cd erle-sandbox-container
```

Create and activate a new virtual environment (for Python 3)
```sh
$ pip install -U virtualenv
$ virtualenv venv
$ source venv/bin/activate
```

Clone repository
```sh
$ git clone https://github.com/JohnDSloan/erle-sandbox
```

Enter the base directory
```sh
$ cd erle-sandbox
```

Install project dependencies:
```sh
$ pip install -r requirements.txt
```

Navigate back up to the erle-sandbox-container directory:
```sh
$ cd ..
```

Start your own Django project:
```sh
$ django-admin startproject myerlesandbox
```

Django will create the file structure
```sh
├── myerlesandbox/
    ├── manage.py
    ├── myerlesandbox/
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        ├── wsgi.py
```

From the cloned erle-sandbox, copy the directories 'media', 'base' and 'saoirse' into your 'myerlesandbox' directory:

```sh
cp -r erle-sandbox/media/ myerlesandbox/media/
cp -r erle-sandbox/base/ myerlesandbox/base/
cp -r erle-sandbox/saoirse/ myerlesandbox/saoirse/
```

```sh
├── myerlesandbox/
    ├── base/..
    ├── manage.py
    ├── media/..
    ├── myerlesandbox/
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        ├── wsgi.py
    ├── saoirse/..
```

Edit 'myerlesandbox/myerlesandbox/urls.py' to look like:

```sh
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('saoirse.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

In 'myerlesandbox/myerlesandbox/settings.py', make the following changes:

```sh
1. ALLOWED_HOSTS = ['localhost', '127.0.0.1']
2. add 'saoirse.apps.SaoirseConfig' to the 'INSTALLED_APPS' list
3. TEMPLATES['DIRS'] = [os.path.join(BASE_DIR, 'base/templates')]
4. the end of the file should look like:

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'base/static')
]
STATIC_ROOT = 'static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
```

To generate synthesised speech, register for a free acoount at <a href="https://www.cereproc.com">Cereproc</a>

in 'saoirse/views/speech_synthesis/utils/text_to_speech.py', fill in your own accountID and password at the top of the page. Then delete:

```sh
try:
    accountID = settings.CEREPROC_ACC_ID
    password = settings.CEREPROC_PASSWORD
except:
    pass
```

(all animations will still work without taking this step above)

navigate to the root myerlesandbox directory and migrate models to database:

```sh
./manage.py migrate
```

```sh
$./manage.py createsuperuser
```
enter your own username and password.

run the server
```sh
$./manage.py runserver
```

go to http://127.0.0.1:8000/ in your browser

You are up and running!

Now, read 'animation_instructions.md' to begine making your own animations with Saoirse

## Built with
- [Django](https://www.djangoproject.com)
- [Three.js](https://threejs.org)


