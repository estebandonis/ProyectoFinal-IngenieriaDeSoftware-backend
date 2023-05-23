const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/", controller.AllReviews)
router.get("/getReviewsByHospital/:id", controller.HospitalReviews)

module.exports = router