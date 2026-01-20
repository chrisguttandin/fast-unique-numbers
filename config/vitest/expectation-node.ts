import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: 'test/expectation/node/',
        include: ['**/*.js'],
        watch: false
    }
});
