# Angular 11 / Django Rest Framework / simpleJWT

creating a users management mini app using Django 3 Angular 11 and simpleJWT ,, 
crud on users and change role .


## Requirements

You need the following to run this app:

* Python 3.5 or higher
* [Pipenv](https://pipenv.readthedocs.io/)
* Node v14.x or higher
* NPM v7.x or higher

## Setup

Open a terminal at the repo root, and run the following:

```bash
  pipenv install
  pipenv shell
  cd users_manager_app/frontend-app
  npm install
  ng build
  cd ../..
  python manage.py runserver
```

the app will be available at http://127.0.0.1:8000.

## Database

This project uses a SQLite database, which lives in the file `db.sqlite3`. SQLite3 support should be available out of the box on most modern operating systems. 

## Logging into the app

The database included in this repository contains some users already and the super user is :

- username : admin 
- password : 00000000 
