# Dos Santos Apartment Homes

<p align="center">Dos Santos Apartment Homes is a property management company that manages apartments. Users will be able to search different apartments owned by Dos Santos Apartment Homes in the state of Washington. Additionally, there will be a renter/admin dashboard with different permissions based on the type of user. Renters will be able to send maintenance tickets and manage their payments. Admins will be able to review unoccupied apartment numbers per property and approve applications to link an email to a property location (including rental terms, price per month, fees, etc).</p>

## User Stories
* User: User is looking to rent an apartment and is reviewing Apartment A. User is able to review the homepage and easily find a list of the available apartments as well as the rent per month. User is prompted to call the number for Apartment A to schedule a viewing. User is also given the option to begin processing an application, which will link to Dos Santos Apartment Homes signup/login portal.
* Admin: Admin spoke with a renter, and renter submitted an application after confirming they would like to rent Apartment A’s room 202. Admin verifies there are no other applications for room 202 in Apartment A and approves the renter’s application after review. Admin has the ability to update before approval. Afterward, Admin is able to view the renter’s payment and maintenance history/requests.
* Renter: Renter is approved to rent Apartment A, room 202. The user is now upgraded to an ‘active renter’ status, and is now considered a Renter.

## Tech Stack

* Javascript
* React (Front end)
* ExpressJS/Sequelize (Back end)
* PostgreSQL (Database)


___
## Tier 1: MVPs

CUSTOMER/USER EXPERIENCE:
1. User is able to sign up
2. User is able to sign in
3. User is able to send an application to apply for room(s)
4. User is able to sign out
5. User is able to view all apartments/rooms
6. User is able to view availability of apartments/rooms

ENGINEER EXPERIENCE:
1. Engineer has a well-seeded database to simulate different interactions with the history
  - User data: id, firstName, lastName, email, password
  - Apartment/Room data
  - Maintenance Ticket data
2. Engineer has limited one account per email
3. Engineer has a secured database so nobody is able to unrightfully manipulate the user's data

ADMIN EXPERIENCE:
1. Admin is able to add apartment complexes
2. Admin is able to view apartment rooms by apartment complex
3. Admin is able to update apartment rooms by user
4. Admin is able to view/approve/deny user applications
5. Admin is able to view payment status/history


## Tier 2:

CUSTOMER/USER EXPERIENCE:

ENGINEER EXPERIENCE:

## Tier 3:

CUSTOMER/USER EXPERIENCE:

ENGINEER EXPERIENCE:


## Tier 4:

CUSTOMER/USER EXPERIENCE:

ENGINEER EXPERIENCE:

## Database Design
![Database Schema](https://i.imgur.com/wBUiXhD.png)


## User
[Flowchart](https://i.imgur.com/JajBPWL.png)

Link: https://excalidraw.com/#json=6yanzjP_Vw9K1iynMW-W1,Ylv0U80wW6fSuM5NosCMqA


## Routes

# Backend
|   Route       |   Methods   |   Purpose       |
| ------------- | ----------- | --------------- |
| /auth/signup       | GET         | Sign up |
| /auth/login   | GET         | Login |
| /auth/refresh | GET        | Refresh JWT token |
| /auth/logout | GET       | Logout |

#Frontend
|   Route       |   Purpose       |
| ------------- | --------------- |
| /home         | Homepage for primary site |
| /about-us    | About us |
| /contact-us | Contact us |
| /auth | Signup/Login |