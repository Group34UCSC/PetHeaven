// exports.ADD_MEDICINE = "UPDATE tempPres SET  Medicine='${req.body.Medicine}', Dosage='${req.body.Dosage}', Duration= '${req.body.Duration}' ";
exports.ADD_MEDICINE = "INSERT INTO temppres VALUES (NULL, ?)";

