# Dos Santos Apartment Homes

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