# Portfólio — Guilherme Pereira Andraz

Site pessoal estático para apresentar o perfil profissional, tecnologias, projetos, formação e canais de contato.

## Stack

- HTML semântico
- CSS responsivo com tokens de tema claro/escuro
- JavaScript sem framework para navegação, seleção de tecnologias, tema, idioma e formulário de contato
- Implantação estática na Vercel

## O que mudou

- Atualização do conteúdo com base no currículo atual.
- Projetos em destaque alinhados ao escopo documentado: Orva, Drazyx e EasyVan.
- Seção de tecnologias com botões interativos e painel de detalhes baseado no contexto real dos projetos.
- Remoção de percentuais subjetivos de soft skills e de tecnologias que não constam no currículo atual.
- Tema claro/escuro e idioma português/inglês preservados e revisados.
- Links de currículo e certificados apontam para arquivos locais com nomes estáveis.
- Contato consistente com o e-mail `guilherme.andraz@outlook.com`; o formulário prepara um e-mail e não simula envio por servidor.
- Responsividade, foco de teclado e preferência por movimento reduzido tratados no CSS.

## Executar localmente

Na raiz do projeto, execute:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000/Public/` no navegador. Como é um site estático, não há etapa de build.

## Publicação na Vercel

Importe o repositório no painel da Vercel. O arquivo `vercel.json` direciona a rota raiz para `Public/index.html` e publica os arquivos estáticos. Depois do deploy, teste a página raiz, os links para certificados e currículo e a navegação entre as seções.

## Conteúdo e veracidade

As descrições não atribuem níveis percentuais às habilidades. Tecnologias sem ligação verificável a um dos projetos são identificadas como conhecimentos listados no currículo, sem associação inventada. Os links de projeto apontam para os repositórios oficiais informados.

## Segurança

Não armazene arquivos `.env`, connection strings, tokens ou credenciais neste pacote. O portfólio não precisa de credenciais para ser executado. Caso tenha publicado anteriormente uma variável de conexão real em um repositório público, rotacione a credencial no serviço correspondente.
