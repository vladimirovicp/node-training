# node-training

## Путь [https://nodejs.org/api/path.html#path](https://nodejs.org/api/path.html#path)
Модуль node:path предоставляет утилиты для работы с путями к файлам и каталогам. К нему можно получить доступ с помощью:

```node
    const path = require('node:path'); 
```
### path.basename(path[, suffix])
> * **path** <строка>
> * **suffix** <string> Необязательный суффикс для удаления
> * Возвращает: <строка>

path.basename() Метод возвращает последнюю часть path, аналогично команде Unix basename. Завершающие разделители каталогов игнорируются.
```node
    path.basename('/foo/bar/baz/asdf/quux.html');
    // Returns: 'quux.html'

    path.basename('/foo/bar/baz/asdf/quux.html', '.html');
    // Returns: 'quux' 
```

