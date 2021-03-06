"use strict";

const ObjectID=require("./ObjectID");


class Table{
  constructor(data){
     this.id=ObjectID(this,"table");
     this.maxchairs=data.maxchairs || 4; // if not set 4 will be used by default
     this.reservations=[]; // contains guest numbers. TODO: replace array with direct database readout over time!
     this.orders=[]; // link to orders ??
  }

  addguest(guestid){
    this.reservations.push(guestid);
    // TODO: check if a number if present and if the guest_id exists at all!
    // Link can provide guest information!
  }

  static lookupbyminchairs(minchairs){
    let ret = [];
    let data = require("./temp_database");
    for (let entry of data.table) {
      if (entry.maxchairs>=minchairs) ret.push(entry);
    }
    return ret;
  }
  
}

if (module) module.exports = Table;
