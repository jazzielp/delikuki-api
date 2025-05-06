import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  api: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
}));
