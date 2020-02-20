import axios from "axios";
//require fetch for nodejs
const fetch = require('node-fetch');

export default {
  //get all contacts
  getAllContacts: function () {
    return fetch("/api/contacts");
  },
  //get contact by req-param
  getContact: function (id) {
    return fetch("/api/contacts/" + id);
  },
  //deletes contact
  deleteContact: function (id) {
    return axios.delete("/api/contacts/" + id);
  },
  //create contact
  submitContact: function (data) {
    return axios.post("/api/contacts", data);
  },
  //update contact 
  updateContact: function (id, data) {
    return axios.put("/api/contacts/" + id, data);
  },
  //get contact by name
  getByName: function (data) {
    return axios.get("/api/contacts/all/" + data);
  }

};

