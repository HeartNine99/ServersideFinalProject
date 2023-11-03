import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('gasstoves')
    },
    show(gasstoveId) {
        return Api().get('gasstove/' + gasstoveId)
    },
    post(gasstove) {
        return Api().post('gasstove', gasstove)
    },
    put(gasstove) {
        return Api().put('gasstove/' + gasstove.id, gasstove)
    },
    delete(gasstove) {
        return Api().delete('gasstove/' + gasstove.id, gasstove)
    },
}