---
title: "BukuBook"
description: "Aplikasi CRUD Buku beserta Auth dan Multi-roles."
date: "2024-05-26"
demoURL: "https://bukubook.adityapryg.my.id"
repoURL: "https://github.com/adityapryg/bukubook"
type: "public"
tags: ["laravel", "blade"]
---

![BukuBook](./bukubook.png)

BukuBook adalah aplikasi manajemen buku. Project sudah termasuk dengan authentikasi dan multiple roles (User&Admin). Project ini sekaligus mempelajari konsep relasi database one to many dan sebaliknya.

BukuBook dibuat menggunakan framework [PHP Laravel](https://laravel.com), [Docker](https://docker.com) untuk deployment, dan SQL Database.

BukuBook adalah sample project untuk mendemonstrasikan pembuatan CRUD Laravel pada course Laravel Fundamentals yang saya ajar. Aplikasi ini dibuat dengan front-end [Blade](https://laravel.com/docs/master/blade) untuk konsep monolithic-apps. 

Visit [BukuBook Repository](https://github.com/adityapryg/bukubook) to get started.

## 📋 Features

- Authentication
  - Register
  - Login
  - Support Multiple Roles (User & Admin)
- CRUD User
- CRUD Book's Category
- CRUD Book

## 📄 Requirements

- PHP ^8.0
- Composer
- NodeJS
- MySQL/PostgreSQL

## 💻 Installation Step

All commands are run from the root of the project, from a terminal:


| Command                                                 | Action                                                  |
| :------------------------------------------------------ | :------------------------------------------------------ |
| `git clone https://github.com/adityapryg/bukubook.git`  | Clone the repository                                    |
| `cp  .env.example .env`                                 | Config APP_NAME & Database Connection in env            |
| `composer install`                                      | Installing BukuBook php modules.                        |
| `php artisan key:generate`                              | Generate APP_KEY                                        |
| `npm install`                                           | Installing BukuBook js modules                          |
| `npm run build`                                         | Building assets (using Vite)                            |
| `php artisan migrate --seed`                            | Migrating the database scheme and seed dummy contents   |
| `php artisan storage:link`                              | Linking public and storage, used for book's cover image |
| `php artisan serve`                                     | Running laravel locally                                 |