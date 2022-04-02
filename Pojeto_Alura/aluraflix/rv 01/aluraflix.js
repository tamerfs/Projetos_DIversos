var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
    "https://i0.wp.com/1.bp.blogspot.com/-WK8tgMxcwsw/WD81iYYm3dI/AAAAAAAADqg/6z-m5QRewP4zgWuRt5R655inbPvq0-2xACLcB/s1600/ILHA-DO-MEDO.jpg?ssl=1",
    "https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg"
    ];
    
    listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/MementoCartaz.jpg/250px-MementoCartaz.jpg");
    listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg");
    listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/7/76/Kungfupanda.jpg");
    listaFilmes.push("https://br.web.img3.acsta.net/pictures/14/10/09/13/58/594934.jpg");
    listaFilmes.push("https://m.media-amazon.com/images/I/51wILNNX2VL._AC_SY445_.jpg");

    listaFilmes.push ("https://w7.pngwing.com/pngs/473/357/png-transparent-air-island-floating-island-air-island-floating-thumbnail.png");
    
    for (var i = 0; i < listaFilmes.length; i++) {
      document.write(i + 1 + "º " + "<img src=" + listaFilmes[i] + ">");
    }
    
    // for.each verificar o uso
    // for each ou forEach ou while
    
    