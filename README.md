# Setup eslint and prettier

- yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-vue
- yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# Setup husky

- yarn add -D husky
- yarn husky install
- yarn husky add .husky/pre-commit "npm run lint" // if file pre-commit doesn't exist

# Extension vscode

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**

# Copy files ( for Laravel )

vite.config.ts
tsconfig.node.json
tsconfig.json
package.json
index.html
