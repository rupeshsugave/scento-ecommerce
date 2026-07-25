const express = require("express");
const router = express.Router();

const {
    addContact,
    getContacts,
    updateStatus
} = require("../controllers/contactController");


// ==========================
// ADD CONTACT MESSAGE
// ==========================
router.post(
    "/",
    addContact
);


// ==========================
// GET ALL CONTACTS
// ==========================
router.get(
    "/",
    getContacts
);


// ==========================
// UPDATE CONTACT STATUS
// ==========================
router.put(
    "/:id",
    updateStatus
);


module.exports = router;