console.log('working')


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

const addTask = () => {
    const text = document.getElementById('titleText').value;
    const textdesc = document.getElementById('descriptionText').value;
    const image = imgURL
    const data = { text, textdesc, image }
    // console.log(data)

    htmlFiles.push(data)
    const htmlFilesStringy = JSON.stringify(htmlFiles)
    localStorage.setItem('value', htmlFilesStringy)
    displayData()
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
         <div class="box task">
         <div class="task_Text_area">
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
         <div class="lime done_btn flex-middle pointer">Done</div>
     </div>`
        taskDiv.innerHTML = gottenValue;
        taskContainer.appendChild(taskDiv)
    })

}
displayData()
