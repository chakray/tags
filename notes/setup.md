# setup

```
  npm i @chakray/tags --save
```

# icon

Use in module
__featured.module.ts__
```
import { TagsMod } from '@chakray/tags';

...
imports: [TagsMod]
...
```

Provide icon mappings:
__featured.component.ts__
```
import { iconSet } from '@chakray/tags';
import { yourIcons } from 'src/assets/fonts/dev/dev';

...
  providers: [
    { provide: iconSet, useValue: { yourIcons } }
  ]
...
```

__featured.component.html__
```
<!-- normal form -->
<ct-i [ff]='i._.ff' [code]='i.typescript'></ct-i>
<!-- shorter selector -->
<cti [ff]='i._.ff' [code]='i.firebase'></cti>
<!-- animation -->
<ct-i [ff]='i._.ff' [code]='i.rails' class='spin'></ct-i>
<!-- non-exists code -->
<ct-i code='\e1234'></ct-i>
<!-- use given font family -->
<ct-i key='dev.travis'></ct-i>
<!-- use default font family -->
<ct-i key='python'></ct-i>
```

## runtime icon font injection

Check IconSetParams for more detail

```
  constructor(private ism: IconSetManager) {
    ism.inject(new IconSetParams());
  }
```
