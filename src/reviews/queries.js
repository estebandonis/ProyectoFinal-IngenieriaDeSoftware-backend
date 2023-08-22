const AllReviews = "SELECT * FROM reviews ORDER BY review_id"
const HospitalReviews = "SELECT correo, rating, comentario FROM reviews INNER JOIN users USING(user_id) WHERE hospital_id = $1 ORDER BY review_id"
const AddUserReview = "INSERT INTO reviews (rating, comentario, user_id, hospital_id) VALUES ($1, $2, (SELECT user_id FROM users WHERE correo = $3), $4)"

module.exports = {
    AllReviews,
    HospitalReviews,
    AddUserReview,
}