const requestUrlXhr = 'https://swapi.py4e.com/api/people/';


function requestXhr(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send();
  })
}

requestXhr('GET', requestUrlXhr)
  .then(data => data['results'].map((el) => {
    if (+el.height > 100 && +el.height <= 150) {
      console.log(el)
    }
  }))
  .catch(err => console.log(err))
