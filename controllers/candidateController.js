const candidateModel =require('../models/candidateModel');
const { response, query } = require('express');


module.exports = {

    candidateSignUp: (req, res) => {
        try {
           /*  var query = {
                $and:
                    [{
                        $or: [
                            { email: req.body.email },
                            { mobileNumber: req.body.mobileNumber }
                        ]
                    },
                    { status: "ACTIVE" }]
            } */
            candidateModel.findOne({ email: req.body.email }, (error, result) => {
                if (error) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error." })
                } else if (result) {
                    
                    
                        return res.send({ responseCode: 409, responseMessage: "Email already exists." })
                
    
                } else {

                    first_Round=req.body.first_Round,
                    second_Round=req.body.second_Round,
                    third_Round=req.body.third_Round,
                    average= (first_Round+second_Round+third_Round)/3;
                  
                    var obj = {
                        email: req.body.email,
                        candidateName: req.body.candidateName,
                        first_Round: first_Round,
                        second_Round: second_Round,
                        third_Round: third_Round,   
                        average:average
                        
                       
                    }
                    console.log("42===================>", req.body);
                    console.log("43===================>", obj);
                    new candidateModel(obj).save((saveErr, saveRes) => {
                        if (saveErr) {
                            return res.send({ responseCode: 500, responseMessage: "Internal server error" })
                        } else {
                           
                            return res.send({ responseCode: 400, responseMessage: "successfully added the candidate", resultMessage:saveRes})
                        }
                    })
                }
            })
        } catch (error) {
            return res.send({ responseCode: 501, responseMessage: "Something went wrong" })
        }
    },

    

    viewCandidate: (req, res) => {
        try {

            candidateModel.findOne({  email: req.body.email }, (error, result) => {
                if (error) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error" })
                } else if (!result) {
                    return res.send({ responseCode: 404 , responseMessage: "Data not found" })
                } else {

                    return res.send({ responseCode: 200, responseMessage: "Details of fetched data.", responseMessage: result })
                }
            }).populate("addBy")
        } catch (error) {
            return res.send({ responseCode: 501, responseMessage: "Something went wrong" })
        }
    },

    listCandidate: (req, res) => {
        try {
            candidateModel.find((error,result)=>{
                if(error){
                    return res.send({ responseCode: 501, responseMessage: "Something went wrong" })
                }else{
                    return res.send({ responseCode: 200, responseMessage: "success", reponseResult: result })
                }
            }).sort({average:-1}).limit(1)
            
        } catch (error) {
            console.log(error);
            return res.send({ responseCode: 501, responseMessage: "Something went wrong" })
        }

    },



    assignScore: (req, res) => {
        try {
           /*  var query = {
                $and:
                    [{
                        $or: [
                            { email: req.body.email },
                            { candidateName: req.body.CandidateName }
                        ]
                    },
                    { status: "ACTIVE" }]
            } */
            candidateModel.findOne({ email: req.body.email }, (error, result) => {
                if (error) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error." })
                } else if (!result) {
                    
                    
                        return res.send({ responseCode: 409, responseMessage: "Email not exists." })
                
    
                } else {
                    first_Round=req.body.first_Round,
                    second_Round=req.body.second_Round,
                    third_Round=req.body.third_Round,
                    average= (first_Round+second_Round+third_Round)/3;

                  
                    var obj = {
                        first_Round: first_Round,
                        second_Round: second_Round,
                        third_Round: third_Round,   
                        average:average
                        

                    }
                    console.log("42===================>", req.body);
                    console.log("43===================>", obj);
                    new candidateModel(obj).save((saveErr, saveRes) => {
                        if (saveErr) {
                            return res.send({ responseCode: 500, responseMessage: "Internal server error" })
                        } else {
                           
                           // return res.send({ responseCode: 400, responseMessage: "successfully added the candidate Score", resultMessage:saveRes })
                         
                          /*  var average=(a1+a2+a3)/3;
                            candidateModel.findOneAndUpdate({email:req.body.email }, { $set: {average:(a1+a2+a3)/3}}, { new: true }, (updateErr, updateRes) => {
                                if (updateErr) {

                                    return res.send({ responseCode: 500, responseMessage: "Internal server error." })
                                } else {
                                    return res.send({ responseCode: 200, responseMessage: "OTP verification successfully done.",resultMessage:updateRes })
                                }
                            }) */
                        }
                    })
                }
            })
        } catch (error) {
            return res.send({ responseCode: 501, responseMessage: "Something went wrong" })
        }
    }

//sum= r1 +r2+r3;
  //avrg = 
    //Api to get highest scoring candidate and average scores per round for all candidates
    //calculate average of score ( method) & then find the highest scorer,
    //$gne to find  high score



}



