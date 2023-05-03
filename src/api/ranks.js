import request from "@/utils/requests"

export default {
    getAllRanks() {
        return request.get('/rank')
    }

}