[![Build Status](https://travis-ci.org/Nitive/hexlet-challenge-left-pad.svg?branch=master)](https://travis-ci.org/Nitive/hexlet-challenge-left-pad)

Таблица `employees` содержит все работников включая их менеджеров.
Каждый работник имеет `id` и колонку для `id` менеджера `manager_id`.

    +----+-------+--------+------------+
    | id | name  | salary | manager_id |
    +----+-------+--------+------------+
    | 1  | Joe   | 70000  | 3          |
    | 2  | Henry | 80000  | 4          |
    | 3  | Sam   | 60000  | NULL       |
    | 4  | Max   | 90000  | NULL       |
    +----+-------+--------+------------+

### solution.sql
* Напишите SQL запрос который найдет имена всех работников, которые получают больше чем их менеджеры.
* Запишите запрос в файл `solution.sql`;
