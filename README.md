## GetCat

### 🌟 Sobre o Projeto

Este é um projeto simples, divertido e vibrante, desenvolvido para praticar o consumo de APIs REST e manipulação de DOM (Document Object Model) com JavaScript puro. Ele serve uma dose de fofura felina com apenas um clique!

**Funcionalidades Principais:**

* **🐱 Geração Aleatória:** Busca e exibe fotos aleatórias de gatos em um layout de tela cheia.
* **🎬 Filtro GIF:** Permite alternar a busca para obter GIFs animados, em vez de imagens estáticas (JPG/PNG).
* **⬇️ Download Forçado:** Permite baixar o arquivo da imagem/GIF diretamente para o dispositivo do usuário.
* **✨ Layout Divertido:** Interface colorida e responsiva, focada na melhor experiência de visualização dos gatinhos!

---

### 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **API** | [The Cat API](https://thecatapi.com/) | Fonte das imagens e GIFs dos felinos. |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) | Estrutura, estilização e lógica do lado do cliente. |
| **Download** | `fetch` API e **Blob** | Responsáveis por contornar a política CORS para forçar o download. |
| **Estilo** | CSS Flexbox | Para o layout de tela cheia e responsivo. |

---


### 🖼️ Preview
<img width="450" height="450" alt="image" src="https://github.com/user-attachments/assets/bfc119ec-abd9-4bbd-bc29-083bd4fd5fad" />


---

### 🚀 Como Rodar o Projeto

Este é um projeto **apenas de Front-end** e não requer um servidor *Node.js* ou dependências complexas.

1.  **Clone o Repositório:**
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO]
    cd nome-do-projeto
    ```
2.  **Abra o HTML:**
    Abra o arquivo `index.html` diretamente no seu navegador.

    **OU (Recomendado para evitar problemas de CORS/Download):**
    Use uma extensão de servidor local, como o **Live Server** no VS Code.

3.  **Configure a Chave API:**
    Para usar a funcionalidade completa (e evitar limites de requisição), obtenha uma chave no site [The Cat API] e insira-a no arquivo `script.js`:
    ```javascript
    // No script.js
    const API_KEY = "SUA_CHAVE_AQUI"; 
    ```

---

### 🤝 Contribuição (Se for Open Source)

Encontrou um bug ou quer adicionar um filtro de raça? Sinta-se à vontade para contribuir!

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-nova-feature`).
3.  Commit suas mudanças (`git commit -m 'feat: adiciona filtro de raça'`).
4.  Faça o Push para a branch (`git push origin feature/minha-nova-feature`).
5.  Abra um Pull Request!

---

coded by pedro pierri
