sed -i '5i\  "homepage": "http://maleksal.github.io/holbertonschool-web_react",' ./package.json
sed -i '15i\    "predeploy": "npm run build",' ./package.json
sed -i '16i\    "deploy": "gh-pages -d build",' ./package.json
