const request = require('supertest');
const express = require('express');
const app = require('../appTest.js');

describe('CRUD API Tests', () => {
    let id = 10000;

    it('should create a new user', async () => {
        const user = { id: id, name: 'John Doe', age: 32, height: 1.80, weight: 90, job: "assistance" };

        const response = await request(app)
            .post('/api/adduser')
            .send(user);

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({STATUS: "DATA INSERTED SUCCESSFULLY"});

        createdUser = response.body;
    });

    it('should get all users', async () => {
        const response = await request(app).get('/api/members');

        expect(response.statusCode).toBe(202);
    });

    it('should get a user by ID', async () => {
        const response = await request(app).get(`/api/members/${id}`);

        expect(response.statusCode).toBe(203);
    });

    it('should update a user', async () => {
        const user = { id: id, name: 'John Doe', age: 32, height: 1.80, weight: 90, job: "assistance" };
        const updatedUser = { job: 'student' };

        const response = await request(app)
            .put(`/api/users/${id}`)
            .send(updatedUser);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ STATUS: "DATA UPDATED SUCCESSFULLY" });
    });

    it('should delete a user', async () => {
        const response = await request(app).delete(`/api/users/${id}`);

        expect(response.statusCode).toBe(204);
        const getResponse = await request(app).get(`/api/users/${id}`);
        expect(getResponse.statusCode).toBe(404);

    });
});