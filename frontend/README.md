Frontend часть написана React+Redux, backend часть Node.js + Express, база данных на MongoDB.
Блог написан как учебный фулстек проект. Во фронтенд части был использован роутинг. Реализована авторизация и пагинация. Простой поиск по части названия.
Области хранения данных:

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
- статья: БД (список статей), стор (отображение в браузере)
- комментарии: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / autor_id / post_id / content

схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стора ( на клиенте ):

- user: id / login / roleId
- posts: массив posts: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
- 
