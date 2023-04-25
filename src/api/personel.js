import request from "@/utils/requests"

export default {
    getAllActivePersonel() {
        return request.get('/person')
    }

}