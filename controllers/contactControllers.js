// @description - Get all contacts
// @route - GET /api/contacts
// @access - public

const getContact = (req,res) => {
    res.status(200).json({message: "Get all contacts"});
};

// @description - Create new contacts
// @route - POST /api/contacts
// @access - public

const createContact = (req,res) => {
    res.status(201).json({message: "Create contacts"});
};

// @description - Get contacts
// @route - PUT /api/contacts/:id
// @access - public

const getContacts = (req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
}

// @description - Update contacts
// @route - PUT /api/contacts/:id
// @access - public

const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

// @description - Delete contacts
// @route - DELETE /api/contacts/:id
// @access - public

const deleteContact = (req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};

module.exports = {
    getContact, 
    createContact, 
    getContacts, 
    updateContact, 
    deleteContact 
};