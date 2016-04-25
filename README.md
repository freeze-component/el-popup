# Element Popup Mixin
> A popup mixin for Vue.js.

# Installation
```shell
npm i el-popup -D
```

# Usage
```javascript
import Vue from 'vue'
import Popup from 'el-popup'
require('el-popup/dist/style.css')

export default {
  mixin: [Popup]
}
```

# Options

|     name    | description |     type    |   default   |
|-------------|-------------|-------------|-------------|
|   visible   |             |   boolean   |    false    |
|   modal   |             |   boolean   |    false    |
| closeOnPressEscape |             |   boolean   |    false    |
| closeOnClickModal |             |   boolean   |    false    |
| modalClass |             |   string   |      ''     |
|  transition |            |    string   |  pop-bounce |
|  openDelay  |             |   number   |    null    |
|  closeDelay  |             |   number   |    null    |
|  zIndex  |             |   number   |    null    |

# Development
```shell
make dev

# test
make test

# build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
