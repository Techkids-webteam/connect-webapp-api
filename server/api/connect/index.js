/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./connect.controller.js');

var router = express.Router();

// get
router.get('/company', controller.getCompany);
router.get('/companyById/:id', controller.getCompanyById);
router.get('/companyByName/:company_name', controller.getCompanyByName);

//post
router.post('/post-company', controller.postCompany);

//delete
router.post('/delete-company', controller.deleteCompany);

//edit
router.post('/edit-company', controller.editCompany)

module.exports = router;
