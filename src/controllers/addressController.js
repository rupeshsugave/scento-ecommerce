const Address = require("../models/Address");


// ADD ADDRESS
exports.addAddress = async (req, res) => {

    try {

        const address = new Address(req.body);

        await address.save();


        res.status(201).json({
            success: true,
            message: "Address Added Successfully",
            address
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};




// GET USER ADDRESSES
exports.getAddresses = async (req, res) => {

    try {

        const addresses = await Address.find({
            userId: req.params.userId
        });


        res.json({

            success: true,
            addresses

        });


    } catch (error) {

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

};





// UPDATE ADDRESS
exports.updateAddress = async (req, res) => {

    try {


        const address =
        await Address.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        res.json({

            success:true,

            message:"Address Updated",

            address

        });



    } catch(error) {


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};







// DELETE ADDRESS
exports.deleteAddress = async (req,res)=>{

    try {


        await Address.findByIdAndDelete(
            req.params.id
        );


        res.json({

            success:true,

            message:"Address Deleted"

        });



    } catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};







// SET DEFAULT ADDRESS
exports.makeDefault = async(req,res)=>{

    try {


        const address =
        await Address.findById(
            req.params.id
        );


        if(!address){

            return res.status(404).json({

                success:false,

                message:"Address not found"

            });

        }



        await Address.updateMany(

            {
                userId: address.userId
            },

            {
                isDefault:false
            }

        );



        address.isDefault=true;


        await address.save();



        res.json({

            success:true,

            message:"Default Address Updated",

            address

        });



    } catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};