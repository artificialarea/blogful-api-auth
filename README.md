# Blogful API Auth!

## Iterations

### 2. Learning a new codebase 
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/2

branch: **`me-checkpoint-2`**  via `auth-starting-point`

<br />

### 3. Protected endpoints 
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/3

branch: **`me-checkpoint-3`**

<br />

### 4. Data protection
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/4

branch: **`me-checkpoint-4`**

<br />

### 5. Secure login
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/5

branch: **`me-checkpoint-5`**

<br />

### 6. User registration
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/6

branch: **`me-checkpoint-6`**

**NOTE/TODO:** Periodically this `POST /api/auth/login` 200 test fails with a 400, if I repeatedly run test. WHY?
```
    Auth Endpoints
        POST /api/auth/login
      1) responds 200 and JWT auth token using secret when valid credentials

1) Auth Endpoints
       POST /api/auth/login
            responds 200 and JWT auth token using secret when valid credentials:
   Error: expected 200 "OK", got 400 "Bad Request"
```

<br />

### 7. Session Storage and Expiry Time
src: https://courses.thinkful.com/auth-jwt-v1/checkpoint/7

branch: **`me-checkpoint-7`** changes made: https://github.com/artificialarea/blogful-api-auth/compare/me-checkpoint-6...artificialarea:me-checkpoint-7

<br />


## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

Migrate the dev database `npm run migrate`

Migrate the test database `npm run migrate:test`

## IMPORTANT NOTE ON NODE VERSION

If you are running Node v14, then you must also upgrade your `pg` package to v8.x by typing:

`npm install pg@8`

If you are on Node v12 or lower, run `npm install` as normal and let it remain locked to major version `pg` v7.

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```
