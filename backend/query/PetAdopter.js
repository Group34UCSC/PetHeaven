// exports.CHECK_EMAIL = "SELECT * FROM students WHERE email =?";
// exports.REGISTER_PETADOPTER = "INSERT INTO students VALUES (NULL, ?)";

exports.FIND_APET="SELECT * FROM pet";
// exports.FIND_APET_BYTYPE="SELECT * FROM pet where type=?";
exports.FIND_PHARMACY="SELECT * FROM pharmacy where type=?";
exports.ADOPT_REQUEST="INSERT INTO adoptrequests VALUES (NULL, ?)";
exports.FIND_DOCTOR="SELECT fullname,address FROM doctor";
exports.FIND_PHARMACY="SELECT name,number,street,city FROM pharmacy";
exports.FIND_PETTOOLSTORE="SELECT name,number,Street,City FROM pettoolstore";
exports.APPOINT_DOCTOR="INSERT INTO appointment VALUES (NULL,?)";