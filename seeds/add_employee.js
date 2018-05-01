exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('employee').del(),

        // Inserts seed entries
        knex('employee').insert({ id: 1, first_name: "nini", last_name: "v", email: 'niniv@gmail.com', phone_number: "3038775555", google_token: '11aSdf3fG3d45k4', security_level: '3' }),
        knex('employee').insert({ id: 2, first_name: "thanh", last_name: "n", email: 'thanN@gmail.com', phone_number: "7207774555", google_token: '14aSdf3fG3d45k3', security_level: '3' }),
    );
};