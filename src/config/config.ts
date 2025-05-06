import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  api: {
    port: parseInt(process.env.PORT_API, 10) || 3000,
  },
}));
