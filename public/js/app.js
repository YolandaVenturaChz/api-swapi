window.addEventListener('load', function () {
  const modalImage = document.getElementById('modalImage');
  const modalInfo = document.getElementById('modalContent');
  const modalContent = '';
  const people;

  $.ajax({
    url: 'https://swapi.co/api/people',
    dataType: 'JSON',
    method: 'GET',
  }).done(starwarsPeople).fail(handleError);

  function starwarsPeople() {
    people = starwarsPeople.results;
    // console.log(people);

    for (var i = 0; i < people.length; i++) {
      modalContent += '<h6 class="text-center">' + people[i].name + '</h6>';
      modalContent += '<h6 class="text-center">' + people[i].hair_color + '</h6>';
      modalContent += '<h6 class="text-center">' + people[i].skin_color + '</h6>';
      modalContent += '<h6 class="text-center">' + people[i].eye_color + '</h6>';
      modalContent += '<h6 class="text-center">' + people[i].birth_year + '</h6>';
      modalContent += '<h6 class="text-center">' + people[i].gender + '</h6>';
    }

    modalInfo.innerHTML = modalContent;
  };

  function handleError() {
    console.log('Se ha presentado un error.');
  }

});