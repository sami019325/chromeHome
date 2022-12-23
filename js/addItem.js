console.log('working')

let bgColor = 'FFE0AB'
const hideAndShow = (id, id2) => {
    document.getElementById(id).style.display = 'none';
    document.getElementById(id2).style.display = 'block';
}

let imgURL = "image/select/noimage.png";

const getImgURL = (url) => {
    imgURL = url;
    return imgURL;
}

// image border set on click 
const setBorder = (border) => {
    console.log(border)

    let imgText = 'image'
    for (let i = 1; i < 8; i++) {
        let borders = imgText + i
        console.log(borders)
        document.getElementById(borders).style.border = 'none'
    }
    document.getElementById(border).style.border = '4px solid tomato';
}

// date border set on click 

const setBorderDate = (border) => {
    console.log(border)

    let dateText = 'next'
    for (let i = 1; i < 10; i++) {
        let borders = dateText + i
        console.log(borders)
        document.getElementById(borders).style.border = '2px solid #FFBCA6'
    }
    document.getElementById(border).style.border = '2px solid tomato';
}
const changeColor = (color) => {
    console.log(color)

    let dateText = 'colorSet'
    // for (let i = 1; i < 4; i++) {
    //     let bgcolors = dateText + i
    //     console.log(bgcolors)
    //     document.getElementById(bgcolors).style.background = '#FFBCA6'
    // }
    if (color === '#FFE0AB') {
        document.getElementById('B1D8B7').style.background = '#FFBCA6';
        document.getElementById('blueBG').style.background = '#FFBCA6';
        document.getElementById('FFE0AB').style.background = '#FFE0AB';
        bgColor = 'FFE0AB'
        console.log(bgColor);

    }
    else if (color === '#B1D8B7') {
        document.getElementById('FFE0AB').style.background = '#FFBCA6';
        document.getElementById('blueBG').style.background = '#FFBCA6';
        document.getElementById('B1D8B7').style.background = '#B1D8B7';
        bgColor = 'B1D8B7'
        console.log(bgColor)
    }
    else {
        document.getElementById('FFE0AB').style.background = '#FFBCA6';
        document.getElementById('B1D8B7').style.background = '#FFBCA6';
        document.getElementById('blueBG').style.background = '#8A8AFF';
        bgColor = 'blueBG'
        console.log(bgColor)
    }
}
let htmlFiles = [];

const values = localStorage.getItem('value')
const valuesParsed = JSON.parse(values)

const setHTMLFiles = () => {
    /*  const values = localStorage.getItem('value')
     const valuesParsed = JSON.parse(values) */
    htmlFiles = valuesParsed;
    // console.log('htmlFiles')
}
if (valuesParsed?.length > 0) { setHTMLFiles(); }
let id;
const addTask = () => {
    id = Math.floor((Math.random() * 1000000) + 1);
    console.log(id)
    divId = id
    const text = document.getElementById('titleText').value;
    const textdesc = document.getElementById('descriptionText').value;
    const image = imgURL
    const data = { divId, text, textdesc, image, bgColor }
    // console.log(data)

    htmlFiles.push(data)
    const htmlFilesStringy = JSON.stringify(htmlFiles)
    localStorage.setItem('value', htmlFilesStringy)
    displayData()
}


// delete items 


const deletItem = (id) => {
    console.log('idddd', id)
    // window.confirm("Are sure you want to delete?");

    if (confirm("Are sure you want to delete?")) {
        const innervalues = localStorage.getItem('value')
        const innervaluesParsed = JSON.parse(innervalues)
        const newData = innervaluesParsed.filter(v => v.divId !== id)
        console.log(newData)

        htmlFiles = newData
        const htmlFilesStringy = JSON.stringify(htmlFiles)
        localStorage.setItem('value', htmlFilesStringy)
        displayData()
    }
    else {
        return;
    }
}


const displayData = () => {
    const values = localStorage.getItem('value')
    const valuesParsed = JSON.parse(values)
    const taskContainer = document.getElementById('Task_Box')
    taskContainer.innerHTML = '';




    console.log('============================== ========================== ================= ', valuesParsed)
    valuesParsed.forEach(value => {
        console.log(value)
        //  console.log('------------------------------- ------------------------- --------------- ', value)
        taskDiv = document.createElement('div')
        const gottenValue = `
         <div class="box task ${value.bgColor}" id='${value.divId}'>
         <div class="task_Text_area ${value.bgColor}">
             <div class="image_contener Task_img flex">
                 <img src="${value.image}" alt="${value.image}">
             </div>
             <div class=" text_contener">
                 <div>
                     <h3>${value.text}</h3>
                 </div>
                 <div>
                     <p>${value.textdesc}</p>
     
                 </div>
             </div>
         </div>
         <div class="lime done_btn flex-middle pointer" onclick="deletItem(${value.divId})">Done</div>
     </div>`
        taskDiv.innerHTML = gottenValue;
        taskContainer.appendChild(taskDiv)
    })

}
displayData()

