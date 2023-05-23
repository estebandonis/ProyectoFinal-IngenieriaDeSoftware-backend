const AllReviews = "SELECT * FROM reviews ORDER BY reviewid"
const HospitalReviews = "SELECT correo, rating, comentario FROM reviews INNER JOIN users USING(userid) WHERE hospitalid = $1"

module.exports = {
    AllReviews,
    HospitalReviews,
}