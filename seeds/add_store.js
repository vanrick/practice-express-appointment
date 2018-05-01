exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('store').del(),

        // Inserts seed entries
        knex('store').insert({ id: 1, store_name: "Upscale Nails & Spa", store_street: "1234 havana", store_city: 'fort logan', store_zip: '80239', store_country: 'United States', store_phone_number: '7779905555', sunday_store_hours: 'closed', monday_store_hours: '9:30am-6:00pm', tuesday_store_hours: '9:30am-6:00pm', wednesday_store_hours: '9:30am-6:00pm', thursday_store_hours: '9:30am-6:00pm', friday_store_hours: '9:30am-6:00pm', saturday_store_hours: '9:30am-6:00pm' }),
    );
};