// Module {
//   id: 'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\notes.js',
//   exports: {},
//   parent:
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: 'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\app.js',
//      loaded: false,
//      children: [ [Circular] ],
//      paths:
//       [ 'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\node_modules',
//         'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\node_modules',
//         'C:\\Users\\btabesh\\Desktop\\Toturial\\node_modules',
//         'C:\\Users\\btabesh\\Desktop\\node_modules',
//         'C:\\Users\\btabesh\\node_modules',
//         'C:\\Users\\node_modules',
//         'C:\\node_modules' ] },
//   filename: 'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\notes.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ 'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\node_modules',
//      'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\node_modules',
//      'C:\\Users\\btabesh\\Desktop\\Toturial\\node_modules',
//      'C:\\Users\\btabesh\\Desktop\\node_modules',
//      'C:\\Users\\btabesh\\node_modules',
//      'C:\\Users\\node_modules',
//      'C:\\node_modules' ] }

console.log('Starting notes.js')
// // console.log(module)
// module.exports.age = 30

const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
    return notes
  } catch(e) {
    return []
    console.log(e)
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  }

  let duplicateNotes = notes.filter((note) => note.title === title)

  if(duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  console.log('Getting all notes')
}

const getNote = (title) => {
  console.log('geting note', title)
}

const removeNote = (title) => {
  console.log('removing note', title)
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
}
