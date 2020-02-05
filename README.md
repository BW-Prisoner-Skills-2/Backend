# BASE URL: **_ https://prison-skills.herokuapp.com/api _**

### Endpoints For Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/auth/login`    | Logs an admin in and returns a token |
| `POST`         | `/auth/register` | creates a prison admin               |

### Endpoints For Prisons

| Request Method | Endpoint       | Description                                         |
| :------------- | :------------- | :-------------------------------------------------- |
| `POST`         | `/prisons`     | adds a prison profile                               |
| `GET`          | `/prisons`     | returns all prisons                                 |
| `DELETE`       | `/prisons/:id` | deletes a prison (and all prisoners in that prison) |
| `PUT`          | `/prisons/:id` | updates a prison's information                      |

### Endpoints For Prisoners

| Request Method | Endpoint                     | Description                                                              |
| :------------- | :--------------------------- | :----------------------------------------------------------------------- |
| `POST`         | `/prisons/:id/prisoners`     | adds a prisoner to a prison                                              |
| `GET`          | `/prisons/:id/prisoners`     | returns all prisoners for a prison, their name, availability, and skills |
| `GET`          | `/prisons/:id/prisoners/:id` | returns a prisoner by id, their basic info, skills, and experience       |
| `DELETE`       | `/prisons/:id/prisoners/:id` | deletes a prisoner                                                       |
| `PUT`          | `/prisons/:id/prisoners/:id` | updates a prisoner's basic information (name, availability)              |

### Endpoints For Prisoner Skills

| Request Method | Endpoint                                             | Description                |
| :------------- | :--------------------------------------------------- | :------------------------- |
| `POST`         | `/prisons/:id/prisoners/:prisonerid/skills`          | adds a prisoner's skill    |
| `DELETE`       | `/prisons/:id/prisoners/:prisonerid/skills/:skillid` | deletes a prisoner's skill |
| `PUT`          | `/prisons/:id/prisoners/:prisonerid/skills/:skillid` | updates a prisoner's skill |

### Endpoints For Prisoner Experience

| Request Method | Endpoint                                                      | Description                            |
| :------------- | :------------------------------------------------------------ | :------------------------------------- |
| `POST`         | `/prisons/:id/prisoners/:prisonerid/experience`               | adds prisoner's previous experience    |
| `DELETE`       | `/prisons/:id/prisoners/:prisonerid/experience/:experienceid` | deletes prisoner's previous experience |
| `PUT`          | `/prisons/:id/prisoners/:prisonerid/experience/:experienceid` | updates prisoner's previous experience |

#### Prison Admin Schema

| field    | data type        | metadata                                            |
| :------- | :--------------- | :-------------------------------------------------- |
| id       | unsigned integer | primary key, auto-increments, generated by database |
| username | string           | required, unique                                    |
| password | string           | required                                            |

#### Prisoner Profile Schema

| field     | data type        | metadata                                                              |
| :-------- | :--------------- | :-------------------------------------------------------------------- |
| id        | unsigned integer | primary key, auto-increments, generated by database                   |
| prison_id | unsigned integer | foreign key referencing id in Prison table, generated by the database |
| name      | string           | required                                                              |
| can_leave | boolean          | required                                                              |

#### Skills Schema

| field       | data type        | metadata                                            |
| :---------- | :--------------- | :-------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| prisoner_id | unsigned integer | foreign key referencing id in prisoner table        |
| description | string           | required                                            |

#### Previous Experience Schema

| field       | data type        | metadata                                            |
| :---------- | :--------------- | :-------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| prisoner_id | unsigned integer | foreign key referencing id in prisoner table        |
| description | string           | required                                            |
| date        | string           | required                                            |

### Prison Schema

| field   | data type        | metadata                                            |
| :------ | :--------------- | :-------------------------------------------------- |
| id      | unsigned integer | primary key, auto-increments, generated by database |
| name    | string           | required, string, unique                            |
| address | string           | required, string, unique                            |
| zipcode | integer          | required, integer                                   |
