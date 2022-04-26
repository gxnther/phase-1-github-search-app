let form = document.querySelector("#github-form")


form.addEventListener(`submit`, function(e){
        e.preventDefault()
        var search = document.getElementById("search").value
    fetch("https://api.github.com/users/"+search)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        document.getElementById("user-list").innerHTML = `
        <p>Username: ${data.login}</p>
        <img id="repo" src ="${data.avatar_url}"/>
        `
        let repoURL = document.getElementById("repo")
        console.log(repoURL)
    })
})    
    
    



