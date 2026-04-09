# 🔐 Auth API — Spring Security + JWT

API REST de autenticação e autorização desenvolvida com **Java 21**, **Spring Boot** e **Spring Security**, implementando o fluxo completo de registro, login e controle de acesso com **JWT**.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|----------|-----|
| **Java 21** | Linguagem principal |
| **Spring Boot 4.x** | Framework base |
| **Spring Security 7** | Autenticação e autorização |
| **JWT** | Geração e validação de tokens |
| **BCrypt** | Criptografia de senhas |
| **Spring Data JPA** | Acesso ao banco de dados |
| **H2 Database** | Banco em memória para desenvolvimento |
| **Lombok** | Redução de boilerplate |
| **Bean Validation** | Validação de dados de entrada |
| **Swagger / OpenAPI** | Documentação da API |

---

## 📁 Estrutura do Projeto

```
src/main/java/com/gabrielveras/auth_api/
├── controller/
│   ├── AutenticacaoController.java  → Endpoints de registro e login
│   └── TesteController.java         → Endpoints protegidos para teste
├── service/
│   └── AutenticacaoService.java     → Regras de negócio
├── repository/
│   └── UsuarioRepository.java       → Acesso ao banco
├── model/
│   ├── Usuario.java                 → Entidade do usuário
│   └── Perfil.java                  → Enum USUARIO e ADMIN
├── dto/
│   ├── RegistroRequest.java         → Dados de entrada do registro
│   ├── LoginRequest.java            → Dados de entrada do login
│   └── AuthResponse.java            → Resposta com token JWT
├── security/
│   ├── JwtService.java              → Geração e validação de JWT
│   ├── JwtFiltro.java               → Filtro de autenticação
│   ├── SecurityConfig.java          → Configuração do Spring Security
│   └── SwaggerConfig.java           → Configuração do Swagger
└── exception/
    └── GlobalExceptionHandler.java  → Tratamento global de erros
```

---

## ⚙️ Como Rodar

### Pré-requisitos

- Java 21+
- Maven

### Passos

Clone o repositório:

```bash
git clone https://github.com/GabrielVeras-dev/auth-api.git
```

Entre na pasta:

```bash
cd auth-api
```

Rode o projeto:

```bash
./mvnw spring-boot:run
```

Acesse a documentação em: **http://localhost:8080/swagger-ui/index.html**

Console do banco H2: **http://localhost:8080/h2-console**

---

## 🔗 Endpoints

### Públicos — sem autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/auth/registrar` | Registra novo usuário com perfil USUARIO |
| POST | `/auth/registrar-admin` | Registra novo usuário com perfil ADMIN |
| POST | `/auth/login` | Autentica e retorna token JWT |

### Protegidos — requer token JWT

| Método | Rota | Perfil | Descrição |
|--------|------|--------|-----------|
| GET | `/usuario/perfil` | USUARIO ou ADMIN | Retorna dados do usuário logado |
| GET | `/admin/painel` | ADMIN apenas | Painel exclusivo para administradores |

---

## 🔐 Como Usar o Token

**1. Registre um usuário:**

```json
POST /auth/registrar
{
  "nome": "Gabriel Veras",
  "email": "gabriel@email.com",
  "senha": "123456"
}
```

**2. Faça login e copie o token:**

```json
POST /auth/login
{
  "email": "gabriel@email.com",
  "senha": "123456"
}
```

**3. Use o token no header das requisições:**

```
Authorization: Bearer {seu_token_aqui}
```

**4. No Swagger:** clique em **Authorize 🔒** e cole o token.

---

## 🛡️ Como Funciona a Segurança

### Fluxo de autenticação

```
Cliente → POST /auth/login
       → AutenticacaoService valida credenciais com BCrypt
       → JwtService gera token com nome e perfil
       → Token retornado para o cliente

Cliente → GET /usuario/perfil com token no header
       → JwtFiltro intercepta a requisição
       → JwtService valida e decodifica o token
       → Usuário injetado no SecurityContext
       → Controller recebe usuário via @AuthenticationPrincipal
```

### Controle de acesso

| Rota | Acesso |
|------|--------|
| `/auth/**` | Público — sem autenticação |
| `/usuario/**` | Qualquer usuário autenticado |
| `/admin/**` | Somente perfil ADMIN via @PreAuthorize |

### Senhas

Todas as senhas são criptografadas com **BCrypt** antes de serem salvas no banco. Nunca são armazenadas em texto puro.

### Token JWT

O token contém as seguintes informações:

- **subject** — email do usuário
- **nome** — nome completo
- **perfil** — USUARIO ou ADMIN
- **iat** — data de emissão
- **exp** — data de expiração (24 horas)

---

## 📋 Exemplos de Resposta

### Registro ou Login com sucesso

```json
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "tipo": "Bearer",
  "nome": "Gabriel Veras",
  "email": "gabriel@email.com",
  "perfil": "USUARIO"
}
```

### Erro de validação

```json
{
  "status": 400,
  "erro": "Dados inválidos",
  "campos": {
    "email": "Email inválido",
    "senha": "Senha deve ter no mínimo 6 caracteres"
  },
  "timestamp": "2026-04-09T10:00:00"
}
```

### Credenciais inválidas

```json
{
  "status": 401,
  "erro": "Email ou senha inválidos",
  "timestamp": "2026-04-09T10:00:00"
}
```

### Acesso negado

```
403 Forbidden
```

---

## 👨‍💻 Autor

**Gabriel de Abreu Veras**
Desenvolvedor Backend Java | Spring Boot | APIs REST

[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--gabrielveras-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/dev-gabrielveras/)
[![GitHub](https://img.shields.io/badge/GitHub-GabrielVeras--dev-black?style=flat&logo=github)](https://github.com/GabrielVeras-dev)
