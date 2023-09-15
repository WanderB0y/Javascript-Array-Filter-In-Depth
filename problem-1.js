const  countries = ["South Africa", "Brazil", "United States", "Sweden"].filter((country) => {
    return country.includes(' ');
})

console.log(countries);