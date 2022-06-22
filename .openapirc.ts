import { join } from 'path';

export default [
  {
    mock: false,
    namespace: 'PLATFORM',
    requestLibPath: "import request from '@/utils/request';",
    projectName: 'platform',
    schemaPath: join(__dirname, './api/platform_iam.swagger.json'),
  },
  {
    mock: false,
    projectName: 'smzx',
    namespace: 'SMZX',
    requestLibPath: "import request from '@/utils/request';",
    schemaPath: join(__dirname, './api/smzx.swagger.json'),
  },
];
