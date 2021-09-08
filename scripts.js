console.log('---JS---')

const list = JSON.parse(localStorage.getItem('list'));
    // [
    //     {
    //         id: 'id1',
    //         title: 'Learn JS',
    //         done: true,
    //     },
    //     {
    //         id: 'id2',
    //         title: 'Learn React',
    //         done: false,
    //     }
    // ]

const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');

function render() {
    listElement.innerHTML = null;

    list.forEach(el => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', el.done ? 'done' : 'progress');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);

        const buttonItem = document.createElement('button');
        buttonItem.setAttribute('id', el.id);
        const buttonItemText = document.createTextNode('Done');
        buttonItem.appendChild(buttonItemText);
        listItem.appendChild(buttonItem);

        listElement.appendChild(listItem);
    })
}

render();

function addToList() {
    const todoInputValue = todoInput.value;

    list.push({
        id: Math.random().toString(),
        title: todoInputValue,
        done: false,
    })

    updateLocalStorage();
    render();
    todoInput.value = '';
}

listElement.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const id = event.target.id;
        list.map(el => {
            if (el.id === id) {
                el.done = !el.done
            }
        })
        updateLocalStorage();
        render();
    }
})

function updateLocalStorage(){
    localStorage.setItem('list', JSON.stringify(list));
};
