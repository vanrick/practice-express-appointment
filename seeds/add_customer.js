exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('customer').del(),

        // Inserts seed entries
        knex('customer').insert({ id: 1, first_name: "connie", last_name: "orielly", phone_number: "3037775555", email: 'connieO@gmail.com', google_token: '12aSdf3fG3d45k3' }),
        knex('customer').insert({ id: 2, first_name: "ron", last_name: "williams", phone_number: "7207775555", email: 'ronW@gmail.com', google_token: '13aSdf3fG3d45k2' }),
    );
};