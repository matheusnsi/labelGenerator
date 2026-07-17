# 🏷️ Label Generator

Gerador de **etiquetas adesivas** para produtos industriais: preencha os dados, veja a prévia em tempo real com **código de barras** e imprima direto do navegador.

> ⚙️ **Sobre este projeto:** reimplementação autoral de uma ferramenta interna que desenvolvi na indústria MultiTools para agilizar a impressão e identificação de produtos. Código escrito do zero, com dados fictícios — nada proprietário da empresa.

## ✨ Funcionalidades

- Formulário com produto, código, lote, data e quantidade
- Prévia da etiqueta atualizada em tempo real
- Geração de **código de barras** (CODE128)
- Impressão direta pelo navegador, com layout de impressão dedicado

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite**
- **JsBarcode** (geração de código de barras)

## 🚀 Rodando localmente

```bash
git clone https://github.com/matheusnsi/labelGenerator.git
cd labelGenerator
npm install
npm run dev
```

Acesse `http://localhost:5173`. Para imprimir, use o botão **Imprimir etiqueta**.

---

Desenvolvido por **Matheus Nascimento Silveira** · [LinkedIn](https://linkedin.com/in/matheusnsi) · [GitHub](https://github.com/matheusnsi)
