import { json } from "body-parser";
import patientService from "../services/patientService"

let postBookAppointment = async (req, res) => {
    try {
        let infor = await patientService.postBookAppointment(req.body)
        return res.status(200).json(infor)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server "
        })
    }
}
let postVerifyAppointment = async (req, res) => {
    try {
        let infor = await patientService.postVerifyAppointment(req.body)
        return res.status(200).json(infor)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server "
        })
    }
}

module.exports = {
    postBookAppointment, postVerifyAppointment
}