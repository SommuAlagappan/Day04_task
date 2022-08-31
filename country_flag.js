const countryflags = async() => {
const data = await fetch("https://restcountries.com/v3.1/all")
const res = await data.json()      

res.forEach((ele) => {
    console.log(ele.flags)
})
}

countryflags()