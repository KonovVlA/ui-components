# UI-Components

Набор UI-компонентов на основе дизайна СБОЛа.

## Установка

```shell
npm i @armczk/ui-components @emotion/cache @emotion/react @emotion/styled
```

## Публикация

```shell
npm run pub
```
Скрипт *build* запускается автоматически перед публикацией.


## Пример использования:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Provider } from '@armczk/ui-components';
import '@armczk/ui-components/dist/styles.css';

ReactDOM.render(
  <Provider>
    <Button>Кнопочка</Button>
  </Provider>,
  document.getElementById('app')
)
```

Компонент `<Provider />` содержит в себе:
- `<CacheProvider />` (по умолчанию выполняет добавление стилей в начала тега `<head />`);
- `<GlobalStyles />` (добавляет глобальные стили).

Их можно использовать независимо друг от друга.

## Code style

Правила оформления кода находятся [здесь](https://confluence.delta.sbrf.ru/pages/viewpage.action?pageId=7707334105).