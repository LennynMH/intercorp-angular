# -intercorp-angular
reto técnico Intercorp front

# comandos npm
npm install -g firebase-tools
firebase login
firebase init

Are you ready to proceed? (Y/n) y
  (*) Hosting: Configure and deploy Firebase Hosting sites
What do you want to use as your public directory? (public) dist
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
File dist/index.html already exists. Overwrite? (y/N) n

Firebase initialization complete!
In this step, I have deleted dist folder and run ng build --prod again
angular build app in a subfolder inside dist directory hence I copied all the content from the subdirectory which contains index.html to dist/.

ng build --prod
firebase deploy
firebase open hosting:site

# cambios en firebase.json
public : "dist/clientes-app"
destination : "/dist/index.html"
