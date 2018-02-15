window.addEventListener('load', function() {
  const characterPic = document.getElementsByClassName('container-character')
  const characterModal = document.getElementsByClassName('character-info')

  $.ajax({
    url: `https://swapi.co/api/people/${img}`
  }).done(handleResponse).fail(handleError);


  /* form.addEventListener('click', function (e) {
  }); */
  function handleResponse(data) {
    const name = data.name;
    const birth = data.birth_year;
    const gender = data.gender;
    const height = data.height;
    const eyes = data.eye_color;
    const hair = data.hair_color;
    const skin = data.skin_color;
  
/*     $('main').append('<div><h2>' + name + '</h2><h3>Born in ' + birth + '</h3><p>Gender: ' + gender + '</p><p>Height: ' + height + '</p><p>Eyes color: ' + eyes + '</p><p>Hair color : ' + hair + '</p><p>Skin color: ' + skin + '</p>');
    console.log('listo!'); */
  
  };
  function handleError() {
    console.log('Se ha presentado un error.');
  }
});