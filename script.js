const getButton = document.querySelector(".get-button");
const downloadButton = document.querySelector("#download-button");
const catImageContainer = document.querySelector("#cat-image");
const isGifCheckbox = document.querySelector("#is-gif");

// API Configurationx
const API_BASE_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY =
  "live_PYibej8aMhQMgIztnEgcEwNwuvtRqWul01j67gqpRNYqmvd8DUqoBnoOX328pWtT";
let lastImageUrl = "";

async function fetchRandomCat() {
  const isGif = isGifCheckbox.checked;
  const mimeType = isGif ? "gif" : "jpg,png";

  const size = "med";
  const limit = 1;

  const API_URL = `${API_BASE_URL}?mime_types=${mimeType}&size=${size}&limit=${limit}`;

  const headers = {
    "x-api-key": API_KEY,
  };

  catImageContainer.innerHTML = "<p>Loading cuteness... ⏳</p>";
  downloadButton.classList.add("disabled");
  downloadButton.disabled = true;

  try {
    const response = await fetch(API_URL, { headers: headers });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();

    lastImageUrl = data[0].url;

    displayCatImage(lastImageUrl);
    downloadButton.classList.remove("disabled");
    downloadButton.disabled = false;
  } catch (error) {
    console.error("Could not fetch cat photo:", error);
    catImageContainer.innerHTML =
      "Oops! Something went wrong loading the kitty. 😿";
    lastImageUrl = "";
  }
}

function displayCatImage(url) {
  catImageContainer.innerHTML = `<img src="${url}" alt="Random cute cat photo">`;
}

// A função deve ser ASSÍNCRONA para esperar que a imagem seja baixada
async function handleDownload() {
  if (!lastImageUrl) {
    console.error("Download falhou: Nenhuma URL de imagem disponível.");
    alert("Erro: Gere um gato primeiro!");
    return;
  }

  // O ENDEREÇO DO PROXY QUE VAI DRIBLLAR O CORS
  const PROXY_URL = "https://corsproxy.io/?";

  // A URL que você realmente quer acessar, precedida pelo proxy
  const proxiedUrl = PROXY_URL + encodeURIComponent(lastImageUrl);

  try {
    // O fetch AGORA é feito para o servidor proxy, que adiciona o cabeçalho CORS e repassa a imagem.
    const response = await fetch(proxiedUrl);

    if (!response.ok) {
      throw new Error(`Erro ao baixar imagem! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;

    const isGif = isGifCheckbox.checked;
    const fileName = isGif ? "pedropierri_esteve_aqui!.gif" : "pedropierri_esteve_aqui!.jpg";

    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);

    console.log("Download iniciado com sucesso!");
  } catch (error) {
    console.error("Download falhou na etapa BLOB:", error);
    alert(`Não foi possível iniciar o download. Erro: ${error.message}`);
  }
}

getButton.addEventListener("click", fetchRandomCat);
downloadButton.addEventListener("click", handleDownload);
