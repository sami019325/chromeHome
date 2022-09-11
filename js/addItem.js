console.log('working')


const hideAndShow = (id, id2) => {
    document.getElementById(id).style.display = 'none';
    document.getElementById(id2).style.display = 'block';
}


const addTask = () => {
    const text = document.getElementById('titleText').value;
    const textdesc = document.getElementById('descriptionText').value;
    console.log(text, textdesc)

    const gottenValue = `<h1>${text}</h1> 
                         <h3>${textdesc}</h3> `
    localStorage.setItem('value', gottenValue)
    displayData()
}

const displayData = () => {
    const values = localStorage.getItem('value')
    console.log(values)
    const mainDiv = document.getElementById('showText')
    mainDiv.innerHTML = values;
}
displayData()
