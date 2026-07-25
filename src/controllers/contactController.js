const Contact = require("../models/Contact");


// ==========================
// SAVE CONTACT MESSAGE
// ==========================

exports.addContact = async (req, res) => {

    try {

        const contact = new Contact({

            name: req.body.name,

            email: req.body.email,

            phone: req.body.phone,

            subject: req.body.subject,

            message: req.body.message

        });

        await contact.save();

        res.status(201).json({

            success: true,

            message: "Your message has been sent successfully.",

            contact

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ==========================
// GET ALL CONTACT MESSAGES
// ==========================

exports.getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find().sort({

            createdAt: -1

        });

        res.json({

            success: true,

            contacts

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ==========================
// UPDATE STATUS
// ==========================

exports.updateStatus = async (req, res) => {

    try {

        const contact = await Contact.findByIdAndUpdate(

            req.params.id,

            {

                status: req.body.status

            },

            {

                new: true

            }

        );

        res.json({

            success: true,

            message: "Status Updated",

            contact

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};