PELLIRON MULTILINGUAL WEBSITE

Upload all files and folders directly to the web root.

Languages:
- Russian: /
- Ukrainian: /uk/
- Romanian: /ro/
- English: /en/

Pages per language:
- Home
- About
- Contacts
- Privacy Policy
- Cookies Policy

Apache: keep the included .htaccess file for clean URLs.
Nginx: use try_files $uri $uri/ $uri/index.html =404;

For local preview, extract the ZIP and open index.html. JavaScript rewrites clean directory links to index.html only under file://. On a web server, URLs remain clean and contain no index.html.

Добавлены блоки «Отзывы клиентов» и «СМИ о Pelliron» на всех языковых версиях главной страницы.
