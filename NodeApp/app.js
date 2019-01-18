/**
 * install nodemon
*/

console.log('Starting app.js')
const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

// let user = os.userInfo()
// console.log(user)

// fs.appendFile('greetings.txt', `Hello ${user.username} you are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log('Unable to write to file')
//   }
// })

// fs.appendFileSync('greetings.txt', 'Hello World')
let command = process.argv[2]

// remove --title='secret'
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\btabesh\\Desktop\\Toturial\\Node\\NodeApp\\app.js',
//   'add',
//   '--title=secrets' ]
//{ _: [ 'add' ], title: 'secrets', '$0': 'app.js' }

const argv = yargs.argv

if(command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if(note) {
    console.log(`${note.title} and ${note.body} exists`)
  } else {
    console.log('duplicate or not exists')
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  notes.getNote(argv.title)
} else if(command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('command not recognized')
}
