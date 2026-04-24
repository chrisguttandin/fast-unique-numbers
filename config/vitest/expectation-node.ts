import { defineConfig } from 'vitest/config';

export default defineConfig({ test: { bail: 1, dir: 'test/expectation/node/', include: ['**/*.js'], watch: false } });
