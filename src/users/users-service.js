/* eslint-disable indent */

// per http://regexr.com/5an6u
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UsersService = {
    hasUserWithUserName(db, user_name) {
        console.log('db: ', db)
        return db
            .from('blogful_users')
            .where({ user_name })
            .first()
            .then(user => !!user)
    },
    validatePassword(password) {
        if (password.length < 8) {
            return 'Password must at least 8 characters'
        }
        if (password.length > 72) {
            return 'Password must be less than 72 characters'
        }
        if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with empty spaces'
        }
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
            return `Password must contain an uppercase, lowercase, number, and special character`
        }
        return null
    },
}

module.exports = UsersService