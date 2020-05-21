//require fetch for nodejs
// const fetch = require('node-fetch');
const axios = require('axios');

export default {
  //get all contacts
  getAllContacts: () => {
    return axios.get("/api/contacts/");
  },
  //get contact by req-param
  getContact: (id) => {
    // return fetch("/api/contacts/" + id);
  },
  //deletes contact
  deleteContact: (id) => {
    // return fetch("/api/contacts/" + id, {
    //   method: "DELETE"
    // });
  },
  //create contact
  submitContact: (data) => {
    // return fetch("/api/contacts/", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
  },
  //update contact 
  updateContact: (id, data) => {
    // return fetch("/api/contacts/" + id, {
    //   method: "PUT",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
  },
  //get contact by name
  getByName: (data) => {
    // return fetch("/api/contacts/all/" + data, {
    //   method: "GET",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });
  }

};

