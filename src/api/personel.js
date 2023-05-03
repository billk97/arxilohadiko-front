import request from "@/utils/requests"

export default {
    getAllActivePersonel() {
        return request.get('/person')
    },
    addNewPerson(person) {
        return request.post('/person', person)
    }

}