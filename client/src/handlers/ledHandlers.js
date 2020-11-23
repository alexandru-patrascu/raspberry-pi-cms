const getLeds = new Promise((resolve, reject) =>
  fetch('http://localhost:8000/api/leds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      const response = await res.json();
      const { data = [] } = response;
      return resolve(data);
    })
    .catch(reject)
);

const toggleLed = (_id) =>
  new Promise((resolve, reject) =>
    fetch(`http://localhost:8000/api/toggle-led/${_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

export { getLeds, toggleLed };