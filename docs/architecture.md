# [Index /](../README.md)

### Architektura aplikacji - backend
Aby zachować modularność przy jednoczesnym oszczędnym wykorzystaniu zasobów, wybrano architekturę aplikacji opartą na technologii Python Flask Blueprint.

W miarę rozrostu aplikacji można zastosować submoduły git dla wybranych lub wszystkich projektów.

Struktura aplikacji:
```sh
/matlewan_github_io
    /frontend
        index.html
        /auth
        /blog
    /backend
        app.py
        /auth
            __init__.py
            routes.py
        /blog
            __init__.py
            routes.py
```
Plik główny `app.py`:
```py
from flask import Flask
from backend.auth import auth_bp

app = Flask(__name__)
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
```
Przykładowy `/auth/__init__.py`:
```py
from flask import Blueprint
auth_bp = Blueprint('auth', __name__)
from . import routes  # Importujemy widoki (routes)
```
Przykładowy `/auth/routes.py`:
```py
from . import auth_bp
@auth_bp.route('/login')
def login():
    return "Login page"
```
