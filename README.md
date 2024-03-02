# Install package

- delete dependencies and devDependencies in package.json
```sh
yarn add @types/node dotenv vue vue-router vite vue-tsc typescript @vitejs/plugin-vue --network-timeout 100000
```
```sh
yarn add vuex
```

# Setup eslint and prettier

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-vue
```
```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

# Setup husky

```sh
yarn add -D husky
```

```sh
yarn husky init
```

```sh
echo "npm run lint:fix" > .husky/pre-commit
```

# Extension vscode

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
- **[Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)**
- **[Vue TS](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)**
- **[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)**

# Copy files ( for Laravel )

- vite.config.ts
- tsconfig.node.json
- tsconfig.json
- package.json
- index.html
