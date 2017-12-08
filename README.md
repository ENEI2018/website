# Website for Encontro Nacional de Estudantes de Informática (ENEI)
Website for [Encontro Nacional de Estudantes de Informática](https://www.enei.pt).

Development instructions:
- Install latest version of NodeJS from [here](https://nodejs.org/en/).
- Create Google developer service account with access to Sheets API and place the JSON auth file under '/app/credentials' with the name 'service-creds.json'
- Open directory 'app' in a terminal.
- Run 'npm install' (only required once, or when a module is installed).
- Run 'npm start' (requires restart on file changes).
- Open [localhost:8080](http://localhost:8080) on any browser.
- **OPTIONAL**: use Nodemon (install with 'npm install -g nodemon'), and then run project with 'nodemon app'. This updates the website on file changes, without needing to re-run the command.
