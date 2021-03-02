function start() {
  document.getElementById('upload').addEventListener('submit', handleClick);

  function handleClick(e) {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append('userfile', document.getElementById('userfile').files[0]);
    formData.append('username', document.getElementById('username').value);
    console.log([...formData]);

    fetch(`/upload`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      })
      .then((response) => {
        response.text();
      })
      .then((data) => {
        console.log("data: ", data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }
}

window.addEventListener("load", start);