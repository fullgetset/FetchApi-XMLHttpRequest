const requestUrlFetch = 'https://swapi.py4e.com/api/people/';

async function f(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data['results'].map((el) => {
      if (+el.height > 100 && +el.height < 183) {
        console.log(el)
      }
    })
  } catch (err) {
    alert(err);
  }
}

f(requestUrlFetch);
