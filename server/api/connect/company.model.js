'use strict';
import mongoose from 'mongoose';

var CompanySchema = mongoose.Schema({
    company_name: String,
    job_title : String,
    job_description : String
  },
  {
    collection : 'company'
  }
);

export default mongoose.model('Company', CompanySchema);
