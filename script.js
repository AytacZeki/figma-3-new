fetch('https://api.exchangerate.host/convert')
.then(res => res.json())
.then(data => {
    console.log(data)
})