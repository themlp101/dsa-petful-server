# Petful Server

## Introduction

Find cats and dogs available for adoption here onPetful! You will be able to see the next available animal ready for adoption.
We have a First-Come-First-Serve policy, because we don't like to keep out pets waiting for their new home for too long!

## Process

The app is a demo for a queue stack data structure. When the compoments mount, a timer is set for 5 seconds and a person in line is dequeued on the backend and another person is added to the queue (to simulate endless users). The user can get in line and when it is the users turn, she can adopt the next animal. If the animal list is depleted the component unmounts and displays a message. 

![Petful](./public/images/petful.png)

[Client Repo](https://github.com/themlp101/dsa-petful-client)

### Tech


---
- Tech
  - `React`
  - `Express.js`
  - `Node.js`
  - Backend stores data in JavaScript memory using a queue data structure

---

### Sample API requests

Returns json data

- People
  - Methods
    - `GET`
    - `POST`
    - `DELETE`
  - `POST` params
    - Request body must be an object with a key `person` and an unrestricted string
    - `{ "person": "Bob Joe Bob" }`
  - Success Response
    - 200 - returns an array of names 
    - 201 - returns `Created`
    - 204 - returns `No Content   
  - Error Response
    - 400 - `people` list is empty

- Pets
  - Methods
    - `GET`
    - `DELETE`
  - Success Response
    - 200 - returns an object for the next pet 
      - `{ 
          "age": 2,
          "breed": "Bengal",
          "description": "Orange bengal cat with black stripes lounging on concrete.",
          "gender": "Female",
          "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Steve French",
          "story": "Thrown on the street"
        }`
    - 204 - returns `No Content   
  - Error Response
    - 400 - `cat` or `dog` list is empty
