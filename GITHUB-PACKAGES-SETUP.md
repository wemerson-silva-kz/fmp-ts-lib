# 📦 GitHub Packages Setup

## ✅ Configuração Concluída

### 1. **Arquivos Configurados:**
- ✅ `.npmrc` - Registry do GitHub Packages
- ✅ `package.json` - Nome com escopo e publishConfig

### 2. **Próximos Passos:**

#### **Criar Personal Access Token:**
1. Vá para: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Selecione os escopos:
   - ✅ `write:packages` - Para publicar pacotes
   - ✅ `read:packages` - Para baixar pacotes
   - ✅ `delete:packages` - Para gerenciar pacotes (opcional)

#### **Configurar Autenticação:**
```bash
# Fazer login no GitHub Packages
npm login --scope=@wemerson-silva-kz --registry=https://npm.pkg.github.com

# Ou configurar o token diretamente
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc
```

#### **Publicar no GitHub Packages:**
```bash
# Publicar o pacote
npm publish

# Ou forçar publicação no GitHub Packages
npm publish --registry=https://npm.pkg.github.com
```

## 📋 **Configuração Atual:**

### **package.json:**
```json
{
  "name": "@wemerson-silva-kz/fmp-ts-lib",
  "version": "1.0.2",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### **.npmrc:**
```
@wemerson-silva-kz:registry=https://npm.pkg.github.com
```

## 🚀 **Como Instalar (após publicação):**

```bash
# Configurar registry para o escopo
npm config set @wemerson-silva-kz:registry https://npm.pkg.github.com

# Instalar o pacote
npm install @wemerson-silva-kz/fmp-ts-lib
```

## 📍 **URLs Importantes:**
- **Repositório**: https://github.com/wemerson-silva-kz/fmp-ts-lib
- **Packages**: https://github.com/wemerson-silva-kz/fmp-ts-lib/packages
- **NPM Registry**: https://www.npmjs.com/package/fmp-ts-lib (original)
- **GitHub Packages**: https://github.com/wemerson-silva-kz/fmp-ts-lib/packages (novo)

## ⚠️ **Nota:**
O pacote agora estará disponível em **dois registries**:
1. **NPM**: `fmp-ts-lib` (nome original)
2. **GitHub Packages**: `@wemerson-silva-kz/fmp-ts-lib` (nome com escopo)
