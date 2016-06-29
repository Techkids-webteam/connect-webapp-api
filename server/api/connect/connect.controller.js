/**
 * Created by Admin on 10/06/2016.
 */

'use strict';
import Company from './company.model';

export function getCompany(req, res) {
  Company.find(function (err, company) {
      if(err){
          res.send(404);
      }else{
          res.json({company});
      }
  });
}

export function getCompanyByName(req, res){
    Company.find({company_name : req.params.company_name}, function(err, data){
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}

export function getCompanyById(req, res) {
  Company.findById(req.params.id,function (err, data) {
      if(err){
          res.send(404);
      }else{
           res.json({data})
      }
  })
}

export function postCompany(req, res) {
  var post = {
      company_name: req.body.company_name,
      job_title : req.body.job_title,
      job_description : req.body.job_description
  };
  Company.create(post, function(err,data) {
      if(err){
          res.send(404);
      }else{
          return res.json({data});
      }
  })
}

export function deleteCompany(req, res) {
    Company.findById(req.params.id, function (err, product) {
        product.remove(function (err, product) {
            if(err){
                res.send(404);
            }else{
                res.json({product});
            }
        });
    })
}

export function editCompany(req, res) {
    Company.findById(req.params.id, function (err,product) {
        if(err){
            res.send(404);
        }else{
            product.company_name = req.body.company_name,
            product.job_title = req.body.job_title,
            product.job_description = req.body.job_description
            product.save(function(err,product){
                res.json({product})
            });
        }
    })
}
