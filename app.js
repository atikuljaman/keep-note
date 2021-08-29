const getNote = (text = '') => {
    const noteDiv = document.getElementById('notes');
    const div = document.createElement('div');
    div.classList.add('note');
   div.innerHTML = `
        <div class="buttons">
            <button onclick="" id="edit"><i class="far fa-edit"></i></button>
            <button id="delete"><i class="far fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`
       noteDiv.appendChild(div)

        const deleteDiv =  div.querySelector('#delete');
        deleteDiv.addEventListener('click', () => {
           div.remove()
        })

        const mainDiv = div.querySelector('.main');
        const textArea = div.querySelector('textarea')

        textArea.value = text;
        mainDiv.innerHTML = text;

        const editButton = div.querySelector('#edit')
        editButton.addEventListener('click', () => {
            mainDiv.classList.toggle('hidden')
            textArea.classList.toggle('hidden')
        })

        textArea.addEventListener('change', (e) =>{
            const value = e.target.value;
            mainDiv.innerHTML = value;
        })

}
