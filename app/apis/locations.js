var locationModel = require('../models/location.js')
var authentication = require('../helpers/authentication.js')

module.exports = {
    getList: function (request, response) {
        if (authentication.hasAdminRole(request)) {
            locationModel.find({}, "name", function (err, result) {
                response.json(result);
            })
        } else {
            response.json({ success: false, message: 'Wrong role.' })
        }
    }
};