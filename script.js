// Pegar os elementos através do JQuery
const video = $("#video-apod");
const imagem = $("#picture-apod")
const texto = $("#description");
const botao = $("#botao");
const titulo = $("#titulo");
const textData = $("#text-data");
const copyright = $("#copyright");

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
            $("#video-apod > iframe").innerHTML("src", resposta.url);
          }else{
            imagem.css("background-image", `url(${resposta.url})`);
            video.css("display", `none`);
          }
        
        textData[0].innerHTML = resposta.date;
        titulo[0].innerHTML = resposta.title;
        texto[0].innerHTML = resposta.explanation;
        copyright[0].innerHTML = resposta.copyright;
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
        $("#video-apod > iframe").attr("src", resposta.url).show();
      }else{
        imagem.css("background-image", `url(${resposta.url})`);
        video.css("display", `none`);
      }
    
    titulo[0].innerHTML = resposta.title;
    texto[0].innerHTML = resposta.explanation;
    copyright[0].innerHTML = resposta.copyright;
    console.log(resposta)
  },
});
