import { test, expect } from '@playwright/test';
import postAPIRequest from '../../test-data/api_requests/POST_API_Request.json';
test.use({ baseURL: process.env.BASE_API_URL });

test('Create POST API Request', async ({ request }) => {

    const response = await request.post('/booking', { data: postAPIRequest });
    const jsonPOSTAPIResponse = await response.json();
    console.log("POST API Response is : - 01_POST_API_Request_Static.spec.ts:9", jsonPOSTAPIResponse);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.bookingid).toBeDefined();
    expect(responseBody.booking).toBeDefined();
    expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Playwright typescript');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Testers Talks');
    expect(jsonPOSTAPIResponse.booking.totalprice).toBe(4001);
    expect(jsonPOSTAPIResponse.booking.depositpaid).toBe(true);
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');
    expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe('Breakfast');

});