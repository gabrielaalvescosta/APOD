// Pegar os elementos através do JQuery
let video = $("#video-apod");
const imagem = $("#picture-apod")
const texto = $("#description");
const botao = $("#botao");
const titulo = $("#titulo");
const textData = $("#text-data");
let copyright = $("#copyright");
const source = $("#source");

// ao clicar no botao envia a data para o API
botao.on("click", () => {
apod()
})

// a imagem aparece independente de colocar a data
function apod() {
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=bqy9gf7bu4oMMgN2Qj6WMLa4D27nTMZZGZ9caXjn&date=${data.value}`,
      success(resposta) {
        if(resposta.media_type === 'video') {
            imagem.css("display", `none`);
            video.css("display", `block`);
            video.html(`<iframe src=${resposta.url} width='100%' height='100%' id='video-apod'></iframe>`)
            
          }else {
            imagem.css("background-image", `url(${resposta.url})`);
            video.css("display", `none`);
          }
        
        textData[0].innerHTML = resposta.date;
        titulo[0].innerHTML = resposta.title;
        texto[0].innerHTML = resposta.explanation;
        if(resposta.copyright) {
        copyright[0].innerHTML = resposta.copyright;
        }
        else {
        copyright[0].innerHTML = 'Unknown';
        }
        console.log(resposta)
      },
    });
  }
apod()

// limita a data
$.ajax({
  url: `https://api.nasa.gov/planetary/apod?api_key=bqy9gf7bu4oMMgN2Qj6WMLa4D27nTMZZGZ9caXjn`,
  success(resposta) {
    data.setAttribute('max' , resposta.date)
    if(resposta.media_type === 'video') {
        imagem.css("display", `none`);
        video.css("display", `block`)
        video.innerHTML = `<iframe src=${resposta.url} width='320' height='240' id='video-apod'>`
      }else{
        imagem.css("background-image", `url(${resposta.url})`);
        video.css("display", `none`);
      }
    
    titulo[0].innerHTML = resposta.title;
    texto[0].innerHTML = resposta.explanation;
    if(resposta.copyright) {
      copyright[0].innerHTML = resposta.copyright;
      }
      else {
      copyright[0].innerHTML = 'unknown';
      }
    console.log(resposta)
  },
});
