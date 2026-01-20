import { webdriverio } from '@vitest/browser-webdriverio';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        browser: {
            enabled: true,
            instances: [
                {
                    browser: 'firefox',
                    name: 'Firefox',
                    provider: webdriverio({
                        capabilities: { 'moz:firefoxOptions': { args: ['-headless'] } }
                    })
                }
            ]
        },
        dir: 'test/expectation/firefox/current/',
        include: ['**/*.js'],
        watch: false
    }
});
