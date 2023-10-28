const mongooose = require('mongoose');

const TodoSchema = new mongooose.Schema ({
    text: {
    type: String,
    required: true,
    },
});
module.exports = new mongooose.model('todo', TodoSchema)