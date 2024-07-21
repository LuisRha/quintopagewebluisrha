fetch("https://pokeapi.co/api/v2/move/10001/")
    .then(res => res.json())
    .then(response => {
      console.log(response)
    })