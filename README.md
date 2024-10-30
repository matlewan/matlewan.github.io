# matlewan.github.io

### Cel i opis projektu
Celem projektu jest udostępnienie i prezentacja napisanych przeze mnie programów w internecie w sposób przyjazny dla użytkownika. Każdy moduł:
- posiada kafelek na [stronie głównej](https://matlewan.github.io)
- składa się z 2 części
    - `backend/<moduł>` - backend
    - `frontend/<moduł>-ui` - frontend

Zadaniem tego modułu jest:
- wygenerowanie strony głównej z kafelkami
- wygenerowanie w pełni statycznej strony internetowej na podstawie kodu projektów frontendowych
- wygenerowanie obrazu dockerowego stanowiącego API na podstawie kodu projektów backendowych

[Github workflows: quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart)

### Lokalizacja modułów

Adres każdego z modułów frontendowych to:<br>
`https://matlewan.github.io/<moduł>`<br>
Adres każdego z modułów backendowych to:<br>
`<BASE_URL>/api/<moduł>`<br>
Obecnym dostawcą usług backendowych jest darmowa platforma render.com, a główny adres strony (`<BASE_URL>`) to:<br>
`TODO: uzupełnić po zbudowaniu obrazu dockerowego i deploymencie na render.com`

Docelowo będą tu linki do wykonanych modułów

### Założenia
- implementacja w taki sposób, aby osiągnąć możliwie wysoką niezależność od zewnętrznych platform i usług, np. GitHub, Render.com, MongoDB Atlas
- implementacja modułów niezależnie w sposób umożliwiający ich niezależny development (możliwość uruchomienia samodzielnie dowolnego modułu bez kodu innych modułów)

### Dokumentacja
- [architektura backend](docs/architecture.md)
- [utworzenie aplikacji frontend](docs/frontend.md)
- [utworzenie aplikacji backend](docs/backend.md)

