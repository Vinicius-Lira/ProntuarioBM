'use strict';

const Pessoa = require('./../models/Pessoa');

exports.get = (req, res, next) => {
    // const id = req.params.id;
    Pessoa.findAll().then(response => {
        res.status(200).json(response);
    });

}

exports.getAll = (req, res, next) => {
    // const id = req.params.id;
    Pessoa.findAll().then(response => {
        res.status(200).json(response);
    });

}
