/**
 * Created by devios on 13/01/17.
 */
exports.findAll = function(req, res){
    FailureModel.getFailures(function(error, data)
    {
        console.log('GET /areas');
        res.status(200).jsonp({ success: true, status_code: 200, status_message: "Areas", areas: data});
    });

};