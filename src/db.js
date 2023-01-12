// import { createPool } from "mysql2/promise";

// export const pool = createPool({
//   host: 'localhost',
//   port: 3306,
//   user: 'e2q5g154gi12319grt6l',
//   password: 'pscale_pw_cKCFAYHTQ56QpWDpGO3voOZWiTZZ7nUcIq61LRM7ntk',
//   database: 'torneos'
// })

import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: 'torneos',
  user: 'e2q5g154gi12319grt6l',
  password: 'pscale_pw_cKCFAYHTQ56QpWDpGO3voOZWiTZZ7nUcIq61LRM7ntk',
  host: 'us-east.connect.psdb.cloud',
  ssl: {
    rejectUnauthorized: false
  }
})