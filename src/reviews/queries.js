const AllReviews = "SELECT * FROM reviews ORDER BY review_id"
const HospitalReviews = "SELECT correo, rating, comentario FROM reviews INNER JOIN users USING(user_id) WHERE hospital_id = $1"

module.exports = {
    AllReviews,
    HospitalReviews,
}