# 🚦 Global Rate Limiter Implementation

## Overview

Implementação de um rate limiter global que conta todas as requests, incluindo requests internas, compartilhado entre todas as instâncias de clientes FMP.

## ✨ Features

- **Global Singleton**: Uma única instância compartilhada entre todos os clientes
- **Contagem Unificada**: Todas as requests são contadas, independente do cliente que as fez
- **Suporte Multi-API Key**: Limites separados para diferentes chaves de API
- **Thread-Safe**: Operações atômicas para incremento de contadores
- **Auto-Cleanup**: Limpeza automática de entradas expiradas

## 🏗️ Arquitetura

### Componentes

1. **GlobalRateLimiterInstance**: Classe singleton que gerencia os limites
2. **GlobalRateLimiter**: Instância exportada do singleton
3. **HttpClient Integration**: Integração automática em todos os clientes HTTP

### Fluxo de Funcionamento

```
Request → GlobalRateLimiter.checkAndIncrement() → HTTP Request
    ↓
Rate Limit Check → Increment Counter → Continue or Reject
```

## 🚀 Usage

### Configuração Básica

```typescript
import { FMPClient } from 'fmp-ts-lib';

// Configure global rate limiter
FMPClient.configureGlobalRateLimit({
  requestsPerMinute: 300,
  requestsPerDay: 250000,
  enabled: true,
  onLimitExceeded: (retryAfter) => {
    console.log(`Rate limit exceeded! Retry after ${retryAfter} seconds`);
  }
});
```

### Múltiplos Clientes

```typescript
// Todos os clientes compartilham o mesmo rate limiter
const client1 = new FMPClient({ apiKey: 'your-key' });
const client2 = new FMPClient({ apiKey: 'your-key' });
const advancedClient = new AdvancedFMPClient({ apiKey: 'your-key' });

// Todas as requests são contadas globalmente
await client1.search.searchSymbol('AAPL');  // Count: 1
await client2.company.getCompanyProfile('MSFT');  // Count: 2
await advancedClient.statements.getIncomeStatement('GOOGL');  // Count: 3
```

### Monitoramento de Usage

```typescript
const client = new FMPClient({ apiKey: 'your-key' });

// Get current usage
const usage = client.getGlobalRateLimitUsage();
console.log(`Usage: ${usage.minuteUsage}/${usage.minuteLimit} per minute`);
console.log(`Daily: ${usage.dayUsage}/${usage.dayLimit} per day`);
```

## 🔧 API Reference

### Configuration Options

```typescript
interface GlobalRateLimitOptions {
  requestsPerMinute?: number;    // Default: 300
  requestsPerDay?: number;       // Default: 250000
  enabled?: boolean;             // Default: true
  onLimitExceeded?: (retryAfter: number) => void;
}
```

### Methods

#### `FMPClient.configureGlobalRateLimit(options)`
Configura o rate limiter global.

#### `client.getGlobalRateLimitUsage()`
Retorna o uso atual dos limites.

#### `FMPClient.resetGlobalRateLimit()`
Reseta todos os contadores (útil para testes).

## 🧪 Testing

```bash
# Run global rate limiter tests
bun test tests/global-rate-limiter.test.ts

# Run rate limit example
bun run example:rate-limit
```

## 📊 Benefits

### Before (Per-Client Rate Limiting)
```
Client1: Request 1 → ✅ (Count: 1)
Client2: Request 1 → ✅ (Count: 1) ← Separate counter!
Client1: Internal Request → ❌ Not counted!
```

### After (Global Rate Limiting)
```
Client1: Request 1 → ✅ (Global Count: 1)
Client2: Request 1 → ✅ (Global Count: 2)
Client1: Internal Request → ✅ (Global Count: 3) ← Counted!
```

## 🔒 Thread Safety

O rate limiter global é thread-safe através de:
- Operações atômicas de leitura/escrita
- Verificação e incremento em uma única operação
- Maps nativas do JavaScript (thread-safe em Node.js)

## 🧹 Cleanup & Maintenance

- **Auto-cleanup**: Executado a cada 5 minutos
- **Memory efficient**: Remove entradas expiradas automaticamente
- **Reset capability**: Para testes e desenvolvimento

## 🚨 Error Handling

```typescript
try {
  await client.search.searchSymbol('AAPL');
} catch (error) {
  if (error.message.includes('Rate limit exceeded')) {
    // Handle rate limit error
    console.log('Rate limited, waiting...');
    await new Promise(resolve => setTimeout(resolve, 60000));
  }
}
```

## 📈 Performance Impact

- **Minimal overhead**: ~1ms per request
- **Memory efficient**: Only stores active windows
- **No external dependencies**: Pure JavaScript implementation

## 🔄 Migration from Old Rate Limiter

O novo rate limiter global é **backward compatible**:
- Clientes existentes continuam funcionando
- Configuração opcional
- Fallback para comportamento anterior se não configurado

---

**Implementado com ❤️ para resolver o problema de contagem de requests internas**
