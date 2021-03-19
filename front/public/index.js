
function addAnnonce() {
    event.preventDefault();
  
    fetch('http://localhost:3000/annonce', {
      method: 'post',
      body: JSON.stringify({
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        adresse: document.getElementById('adresse').value,
        code_postal: document.getElementById('code_postal').value,
        ville: document.getElementById('ville').value,
        prix: document.getElementById('prix').value,
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}

function changeAnnonce(id) {
    console.log(id);
    event.preventDefault();
  
    fetch(`http://localhost:3000/annonce/${id}`, {
      method: 'put',
      body: JSON.stringify({
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        adresse: document.getElementById('adresse').value,
        code_postal: document.getElementById('code_postal').value,
        ville: document.getElementById('ville').value,
        prix: document.getElementById('prix').value,
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}
  
function deleteAnnonce(id) {
    console.log(id);
    event.preventDefault();
  
    fetch(`http://localhost:3000/annonce/${id}`, {
      method: 'delete',
    })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}
  