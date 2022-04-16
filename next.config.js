/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'uk'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};
