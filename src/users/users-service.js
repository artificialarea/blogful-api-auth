/* eslint-disable indent */
const xss = require('xss')
const bcrypt = require('bcryptjs')

// per http://regexr.com/5an6u
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UsersService = {

    hasUserWithUserName(db, user_name) {
        return db('blogful_users')
            .where({ user_name })
            .first()
            .then(user => !!user)
    },

    insertUser(db, newUser) {
        return db
            .insert(newUser)
            .into('blogful_users')
            .returning('*')
            .then(([user]) => user)     
            // QUESTION: Why `[]` syntax required for `[user]`?
            // ANSWER?: it's kinda like a spread operator, extracting the values out of the object, so it's no longer an object, per se.
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

    hashPassword(password) {
        return bcrypt.hash(password, 12)
    },

    serializeUser(user) {
        return {
            id: user.id,
            full_name: xss(user.full_name),
            user_name: xss(user.user_name),
            nickname: xss(user.nick_name),
            date_created: new Date(user.date_created),
        }
    },
}

module.exports = UsersService