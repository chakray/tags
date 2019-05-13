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

Add font file:
__styles.sass__
```
@import 'projects/chakray/tags/src/icon/add-icon-font'
+add-icon-font('dev', '', '/assets/fonts/dev')
```

__featured.component.html__
```
<!-- normal form -->
<ct-i [ff]='i.ff' [code]='i.typescript'></ct-i>
<!-- shorter selector -->
<cti [ff]='i.ff' [code]='i.firebase'></cti>
<!-- animation -->
<ct-i [ff]='i.ff' [code]='i.rails' class='spin'></ct-i>
<!-- non-exists code -->
<ct-i code='\e1234'></ct-i>
<!-- use given font family -->
<ct-i key='dev.travis'></ct-i>
<!-- use default font family -->
<ct-i key='python'></ct-i>
```
