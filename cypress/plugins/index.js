module.exports = on => {
    on('before:browser:launch', (browser = {}, args) => {
        if (browser.name === 'chrome') {
            args.push('--auto-open-devtools-for-tabs');
            return args;
        }
    });
};
