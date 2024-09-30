const ListModel = require('./ListModel');

module.exports.getList = async(req,res) => {
    const myList = await ListModel.find();
    res.send(myList)
}

module.exports.saveList = async(req,res) => {
    const{title} = req.body;
    ListModel.create({title})
    .then((data) => {console.log ('ToDo added')
        res.send(data)
    })
}

module.exports.editList = async (req,res) => {
    const { _id, title } = req.body;
    ListModel.findByIdAndUpdate(_id, { title })
    .then (() => res.send('Edited list'))
}

module.exports.deleteList = async (req,res) => {
    const _id  = req.params.id;
    ListModel.findByIdAndDelete(_id)
    .then(() => res.send('Delete todo'))
}