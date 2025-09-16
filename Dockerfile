# nginx を使って静的サイトを公開
FROM nginx:latest

# HTML/CSS/JS をコピー
COPY . /usr/share/nginx/html

# ポート 80 を開放
EXPOSE 80
