'use strict'

class UserController {
    async login ({ request, response, auth }) {
        const { email, password } = request.all()
        try {
            let user =  auth.attempt(email, password);
            return await auth.generate(user)
        } catch (error) {
            response.send(error.message);
        }
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }

    logout ({auth, response}) {
        auth.logout();
        response.json({success:true})
    }
}

module.exports = UserController
