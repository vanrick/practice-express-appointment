exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('services').del(),

        // Inserts seed entries
        knex('services').insert({ id: 1, service_name: "Pedicure", service_description: "Deluxe pedicure", service_duration: '30' }),
        knex('services').insert({ id: 2, service_name: "Manicure", service_description: "Deluxe manicure", service_duration: '45' }),
    );
};