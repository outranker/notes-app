'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',(e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
saveNotes(notes)
location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',(e) => {
filters.searchText = e.target.value
renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change',(e) => {
    filters.sortBy = e.target.value   
    renderNotes(notes, filters)
})

window.addEventListener('storage',(e) => {
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// const myBDay = moment()
// myBDay.year(1995).month(7).date(25)
// console.log(myBDay.format('MMM D, YYYY'))

