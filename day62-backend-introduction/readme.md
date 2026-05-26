# Backend Folder Creation Steps
- Step 1: Create a New Folder

- Step 2: ` npm init -y `

- Step 3: Rename the index.js into main.js in package.json

- Step 4: Create a **main.js** file

- Step 5: Dependency Installation
` npm i express `

- Step 6: Create a **.gitignore** file and add the node_modules folder name into it

- Step 7: Create a complete Express Server (refer to the main.js file)

- Step 8: Install the nodemon library using this below command
` npm i -D nodemon `

- Step 9: Add a **dev** script in package.json file
` "scripts": { `
   ` "dev": "nodemon main.js", `
` } `

- Step 10: For starting the application
` npm run dev `